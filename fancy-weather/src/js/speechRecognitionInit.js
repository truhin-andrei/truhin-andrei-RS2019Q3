export default function speechRecognitionInit() {
  const searchInput = document.getElementById('searchInput');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.lang = 'en';

  recognition.addEventListener('result', (e) => {
    searchInput.value = e.results[0][0].transcript;
  });

  recognition.start();
}
