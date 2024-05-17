# from flask import Flask
# from flask_cors import CORS,cross_origin
# api = Flask(__name__)
# cors=CORS(api)
# api.config["CORS_HEADERS"]="Content-Type"

# @api.route('/profile')
# @cross_origin()
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body

from flask import Flask, request, jsonify
import cv2

from flask_cors import CORS,cross_origin
from ultralytics import YOLO
import numpy as np

# Initialize Flask app
app = Flask(__name__)
cors=CORS(app)
app.config["CORS_HEADERS"]="Content-Type"
# Load YOLOv8 model
model = YOLO('yolov8n-seg.pt')
original_names = model.model.names
model.model.names = ['knife'] * len(original_names)
classes = [4, 34, 25, 42, 44, 52, 46, 65, 76, 79]  # Replace with your desired classes

def get_detections(image):
    results = model(source= 0, show=True , conf = 0.4, save = True, classes = classes)
    detections = []
    object_detected = False
    for result in results:
        boxes = result.boxes
        probs = result.probs
        for box, prob in zip(boxes.data, probs.data):
            x1, y1, x2, y2, conf, cls = box.tolist()
            prob = float(prob)
            detection = {
                'box': [x1, y1, x2, y2],
                'confidence': conf,
                'class_id': int(cls),
                'probability': prob
            }
            detections.append(detection)
            object_detected = True

    return object_detected



@app.route('/detect', methods=['POST'])
@cross_origin()
def detect():
    file = request.files['image']
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    object_detected = get_detections(image)
    return jsonify({"object_detected": object_detected})

@app.route('/profile')
@cross_origin()
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body



# if __name__ == '_main_':
#     app.run(debug=True)