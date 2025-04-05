import os
from flask import Flask, request, jsonify, render_template
import librosa
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
import warnings
from flask_cors import CORS

os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

app = Flask(__name__, template_folder="Frontend")
CORS(app)  # Enable CORS for all routes



app = Flask(__name__, template_folder="Frontend")

# Ensure 'uploads' directory exists
if not os.path.exists('uploads'):
    os.makedirs('uploads')

# Load the trained model and label encoder
model = load_model("huntington_audio_model.h5")
label_classes = np.load("label_encoder.npy", allow_pickle=True)
label_encoder = LabelEncoder()
label_encoder.classes_ = label_classes

def preprocess_audio(file_path):
    try:
        if not file_path.endswith(('.wav', '.mp3')):
            return None
        with warnings.catch_warnings():
            warnings.filterwarnings("ignore", category=FutureWarning, module="librosa")
            audio, sr = librosa.load(file_path, sr=None)
        mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=40)
        mfccs_mean = np.mean(mfccs.T, axis=0)
        return np.expand_dims(mfccs_mean, axis=0)
    except Exception as e:
        print(f"Error processing audio file {file_path}: {e}")
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['audio']
    if file:
        file_path = os.path.join(os.getcwd(), 'uploads', file.filename)
        file.save(file_path)
        print(f"File saved at: {file_path}")  # Debugging line
        features = preprocess_audio(file_path)
        if features is not None:
            predictions = model.predict(features)
            predicted_class = np.argmax(predictions, axis=1)
            predicted_label = label_encoder.inverse_transform(predicted_class)[0]
            return jsonify({"prediction": predicted_label})
    return jsonify({"error": "Failed to process the audio file"})

if __name__ == '__main__':
    app.run(debug=True)
