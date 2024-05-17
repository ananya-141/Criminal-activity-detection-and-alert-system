
import cv2
from ultralytics import YOLO
import numpy as np

model = YOLO('yolov8n-seg.pt')
original_names = model.model.names
model.model.names = ['knife'] * len(original_names)
classes = [4, 34, 25, 42, 44, 52, 46, 65, 76, 79]


results = model(source= 0, show=True , conf = 0.4, save = True, classes = classes)
