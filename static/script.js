document.getElementById('audioForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  try {
    const response = await fetch('/predict', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.prediction) {
      document.getElementById('result').textContent = `Predicted Class: ${result.prediction}`;
    } else {
      document.getElementById('result').textContent = 'Error: Failed to process the audio file.';
    }
  } catch (error) {
    console.error('An error occurred:', error);
    document.getElementById('result').textContent = 'An error occurred. Please try again.';
  }
});
