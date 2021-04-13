const submitBtn = document.getElementById("submit");
const userText = document.getElementById("user-text");

const arrElementsHappyEmoji = document.querySelectorAll(".happy > li");
const arrElementsAngryEmoji = document.querySelectorAll(".angry > li");
const arrElementsSadEmoji = document.querySelectorAll(".sad > li");

const containerAnswers = document.getElementById("container-answer");

const arrhappyAnswer = [
  "У тебя сегодня был хороший день?",
  "Все чудесно, не правда ли?",
  "Рад, что у тебя хорошее настроение!",
];

const arrAngryAnswers = [
  "Кажется, сегодня что-то пошло не так?",
  "Почему ты сегодня злой?",
  "С тобой все в порядке?",
];

const arrSadAnswers = ["Хочешь чаю?", "Все будет хорошо", "Не унывай!"];

let lastMood;

function addTextContainerAnswers(text) {
  const answer = document.createTextNode(text);
  const p = document.createElement("p");

  p.appendChild(answer);
  containerAnswers.appendChild(p);
  userText.value = "";
}

function sayHello() {
  if (containerAnswers.children.length === 0) {
    function getRandomAnswer(arrAnswers) {
      const answer = arrAnswers[Math.floor(Math.random() * arrAnswers.length)];
      return `Привет, ${answer}`;
    }

    function reactClickMood(arrEmoji, arrAnswers, mood) {
      arrEmoji.forEach((element) => {
        element.onclick = () => {
          lastMood = mood;
          addTextContainerAnswers(getRandomAnswer(arrAnswers));
        };
      });
    }

    reactClickMood(arrElementsHappyEmoji, arrhappyAnswer, "happy");
    reactClickMood(arrElementsSadEmoji, arrSadAnswers, "sad");
    reactClickMood(arrElementsAngryEmoji, arrAngryAnswers, "angry");
  }
}

function sayDontUnderstand() {
  submitBtn.onclick = function () {
    const reg = "^[a-zA-Z0-9_]*$";
    const answer = document.createTextNode("Прости, но я тебя не понимаю");
    const p = document.createElement("p");

    if (userText.value !== reg) {
      p.appendChild(answer);
      containerAnswers.appendChild(p);
      userText.value = "";
    }
  };
}

sayDontUnderstand();
