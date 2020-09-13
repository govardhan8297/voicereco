const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
var date = new Date();
const hours = date.getHours;
const minutes = date.getMinutes;
const seconds = date.getSeconds;

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

const time = [hours + "" + minutes + "" + seconds];

const introduce = [
  "Im a Person that was designed to meet your needs",
  "Im an AI",
  "Im your shadow",
];

const google = [
  "Im not google just a similar type of that, you can call me naga",
  "At your service",
  "Present sir",
];

const greetings2 = ["hai", "hai, how are you doing today", "hello there"];

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
  if (message.includes("who are you")) {
    const finalText = introduce[Math.floor(Math.random() * introduce.length)];
    speech.text = finalText;
  }
  if (message.includes("hai")) {
    const finalText = greetings2[Math.floor(Math.random() * greetings2.length)];
    speech.text = finalText;
  }
  if (message.includes("Google")) {
    const finalText = google[Math.floor(Math.random() * google.length)];
    speech.text = finalText;
  }

  if (message.includes("time")) {
    const finalText = time[Math.floor(Math.random() * time.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
