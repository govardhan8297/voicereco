const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "Im good, how are you",
  "Thats so nice of you",
  "Im so lucky to have a friend like you",
];

const weather = [
  "weather is fine",
  "Its gonna rain today",
  "Its a nice day for a trip",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is acivated, you can speak to microphone");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I dont know what you are saying";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  if (message.includes("how is the weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
