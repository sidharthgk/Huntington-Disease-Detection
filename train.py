import os
import librosa
import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder

# Step 1: Load and preprocess audio data
def load_audio_data(data_dir):
    features = []
    labels = []

    for label_dir in os.listdir(data_dir):
        label_path = os.path.join(data_dir, label_dir)
        if not os.path.isdir(label_path):
            continue

        for file in os.listdir(label_path):
            file_path = os.path.join(label_path, file)
            try:
                audio, sr = librosa.load(file_path, sr=None)
                mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=40)
                mfccs_mean = np.mean(mfccs.T, axis=0)
                features.append(mfccs_mean)
                labels.append(label_dir)
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

    return np.array(features), np.array(labels)

# Load data from your dataset folder
data_dir = r"C:\Users\vgopa\Datasets\Audio_files"
features, labels = load_audio_data(data_dir)

# Encode the labels
label_encoder = LabelEncoder()
labels_encoded = label_encoder.fit_transform(labels)
labels_categorical = to_categorical(labels_encoded)

# Save the LabelEncoder classes
np.save("label_encoder.npy", label_encoder.classes_)  # This will create label_encoder.npy

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, labels_categorical, test_size=0.2, random_state=42)

# Step 2: Build the model
model = Sequential([
    Dense(256, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.3),
    Dense(128, activation='relu'),
    Dropout(0.3),
    Dense(labels_categorical.shape[1], activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Step 3: Train the model
model.fit(X_train, y_train, epochs=30, batch_size=32, validation_split=0.2)

# Step 4: Evaluate the model
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"Test Loss: {test_loss}, Test Accuracy: {test_accuracy}")

# Step 5: Save the trained model
model.save("huntington_audio_model.h5")  # This will create huntington_audio_model.h5
