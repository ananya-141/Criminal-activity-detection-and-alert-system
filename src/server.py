from flask import Flask, request, jsonify
import cv2
from ultralytics import YOLO
import numpy as np

# Initialize Flask app
app = Flask(_name_)

# Load YOLOv8 model
model = YOLO('yolov8n-seg.pt')
classes = [34, 43]  # Replace with your desired classes

def get_detections(image):
    results = model(image, conf=0.4, classes=classes)
    detections = []

    for result in results:
        boxes = result.boxes
        masks = result.masks
        keypoints = result.keypoints
        probs = result.probs

        for box, mask, keypoint, prob in zip(boxes.data, masks.data, keypoints.data, probs.data):
            x1, y1, x2, y2, conf, cls = box.tolist()
            mask = mask.cpu().numpy().astype(np.uint8)
            keypoint = keypoint.cpu().numpy().tolist()
            prob = float(prob)

            detection = {
                'box': [x1, y1, x2, y2],
                'mask': mask.tolist(),
                'keypoints': keypoint,
                'confidence': conf,
                'class_id': int(cls),
                'probability': prob
            }
            detections.append(detection)

    return detections

@app.route('/detect', methods=['POST'])
def detect():
    file = request.files['image']
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    detections = get_detections(image)
    return jsonify(detections)

if _name_ == '_main_':
    app.run(debug=True)