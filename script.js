const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
var date = new Date();
const hours = date.getHours;
const minutes = date.getMinutes;
const seconds = date.getSeconds;

const text = [
  "I don't know what you are saying",
  "say that again, i couldn't catch that",
  "i haven't seen that coming",
];

const greetings = [
  "Im good, how are you",
  "Thats so nice of you",
  "Im so lucky to have a friend like you",
];

const sandeep = ["Are you talking about the tall guy??"];

const Race = ["Let's talk something, shall we??"];

const chandana = [
  "Craziest person don't you think, huh??",
  "Hello chandana, how are you",
];

const srinu = ["I dont know man", "Nice Person"];

const purna = ["Doctor babu for all the town"];

const ameer = ["The director"];

const avinash = ["Our Cr"];

const weather = [
  "weather is fine",
  "Its gonna rain today",
  "Its a nice day for a trip",
  "Better be home soon",
];

const time = [hours + "" + minutes + "" + seconds];

const introduce = [
  "Im a Person that was designed to meet your needs",
  "Im an AI",
  "Im your shadow",
];

const google = [
  "I'm not google just a similar type of that, you can call me naga",
  "At your service",
  "Present sir",
];

const greetings2 = [
  "helllllo ",
  "hai, how are you doing today??",
  "hello there!!",
];

const greetings3 = ["Good morning ", "morning", "Having a nice day huh??"];

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
  speech.text = text[Math.floor(Math.random() * text.length)];

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("Srinu")) {
    const finalText = srinu[Math.floor(Math.random() * srinu.length)];
    speech.text = finalText;
  }

  if (message.includes("Chandana")) {
    const finalText = chandana[Math.floor(Math.random() * chandana.length)];
    speech.text = finalText;
  }

  if (message.includes("Avinash")) {
    const finalText = avinash[Math.floor(Math.random() * avinash.length)];
    speech.text = finalText;
  }
  if (message.includes("Ameer")) {
    const finalText = ameer[Math.floor(Math.random() * ameer.length)];
    speech.text = finalText;
  }
  if (message.includes("Purna")) {
    const finalText = purna[Math.floor(Math.random() * purna.length)];
    speech.text = finalText;
  }
  if (message.includes("race")) {
    const finalText = Race[Math.floor(Math.random() * Race.length)];
    speech.text = finalText;
  }
  if (message.includes("Sandeep")) {
    const finalText = sandeep[Math.floor(Math.random() * sandeep.length)];
    speech.text = finalText;
  }
  if (message.includes("morning")) {
    const finalText = greetings3[Math.floor(Math.random() * greetings3.length)];
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
  if (message.includes("hello")) {
    const finalText = greetings2[Math.floor(Math.random() * greetings2.length)];
    speech.text = finalText;
  }
  if (message.includes("Google")) {
    const finalText = google[Math.floor(Math.random() * google.length)];
    speech.text = finalText;
  }

  if (message.includes("Siri")) {
    const finalText = google[Math.floor(Math.random() * google.length)];
    speech.text = finalText;
  }

  if (message.includes("what is the time")) {
    const getTime = () => {
      const time = new Date(Date.now());
      return `the time is ${time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`;
    };
    speech.text = getTime;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
