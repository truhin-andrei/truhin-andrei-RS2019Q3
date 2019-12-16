export default function speechRecognitionInit(lang) {
  const searchInput = document.getElementById('searchInput');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.lang = lang;

  recognition.addEventListener('result', (e) => {
    searchInput.value = e.results[0][0].transcript;
  });

  recognition.start();
}
