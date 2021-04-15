//!!  Если в конце названия переменной пристуствует множественное число ( moods, answers ), то это массив

const submitBtn = document.getElementById("submit");
const userText = document.getElementById("user-text");

const happyEmojiElements = document.querySelectorAll(".happy > li");
const angryEmojiElements = document.querySelectorAll(".angry > li");
const sadEmojiElements = document.querySelectorAll(".sad > li");

const containerAnswers = document.getElementById("container-answer");

//* создаем массивы для ответов на настроения при старте приложения
const happyStartAnswers = [
  "У тебя сегодня был хороший день?",
  "Все чудесно, не правда ли?",
  "Рад, что у тебя хорошее настроение!",
];

const angryStartAnswers = [
  "Кажется, сегодня что-то пошло не так?",
  "Почему ты сегодня злой?",
  "С тобой все в порядке?",
];

const sadStartAnswers = ["Хочешь чаю?", "Все будет хорошо", "Не унывай!"];

// * создаем массивы для ответов на прошлое настроение. Читать как - счастливый ответ на счастливое настроение и т.д
const happyAnswerOnHappyMoods = [
  "Рад, что у тебя все также хорошо",
  "Жизнь прекрасна!",
  "Ты такой жизнерадостный!",
];
const happyAnswerOnAngryMoods = [
  "Почему ты разозлился?",
  "Что произошло, что тебя так разозлило, все ведь было хорошо?",
  "Хочешь я от тебя отстану?",
];
const happyAnswerOnSadMoods = [
  "Хэй, ты чего? ты ведь улыбался",
  "тебе стало грустно?",
  "Я тебя понимаю, не всегда бывает радостно",
];

const sadAnswerOnHappyMoods = [
  "Рад что тебе лучше",
  "Видишь, все наладилось",
  "Самое время погулять!",
];
const sadAnswerOnAngryMoods = [
  "Твоя грусть привела тебя к злобе?",
  "Что произошло, что ты разозлился после злобы?",
];
const sadAnswerOnSadMoods = [
  "Кажется, ничего не изменилось?",
  "Все стало еще хуже?",
];

const angryAnswerOnHappyMoods = [
  "Рад, что ты перестал злиться!",
  "Ну вот видишь, не стоило так злиться!",
];
const angryAnswerOnAngryMoods = ["Ты стал еще злобнее", "Я лучше отойду"];

const angryAnswerOnSadMoods = [
  "Злость сменилась грусть?",
  "хэй, это лучше чем быть в ярости",
];

// * объявляем массив, в котором будут хранится 2 значения. [0] - текущее настроение. [1] - прошлое настроение
let moods = [];

// * функция, которая добавляет в контейнер тег p, с необходимым содержанием
function addTextContainerAnswers(text) {
  if (text !== undefined) {
    const answer = document.createTextNode(text);
    const p = document.createElement("p");

    p.appendChild(answer);
    containerAnswers.appendChild(p);
    userText.value = "";
  }
}

// * функция, которая отдает рандомный ответ при старте приложения
function getRandomAnswerStart(arrAnswers) {
  const answer = arrAnswers[Math.floor(Math.random() * arrAnswers.length)];
  if (containerAnswers.children.length === 0) {
    return `Привет, ${answer}`;
  } else if (moods.length === 2) {
    AnswerLastMood(moods);
  }
}

// * аналогичная функция, но только не при старте приложения(не очень хорошо, что dry, знаю).
function getRandomAnswer(arrAnswers) {
  const answer = arrAnswers[Math.floor(Math.random() * arrAnswers.length)];
  return answer;
}

// * функция, которая реагирует на нажатие какой-либо эмоции
function reactClickMood(arrEmoji, arrAnswers) {
  arrEmoji.forEach((element) => {
    element.onclick = () => {
      if (moods[0] === "happy" && moods[1] === "happy") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "happy" && moods[1] === "angry") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "happy" && moods[1] === "sad") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      }

      if (moods[0] === "angry" && moods[1] === "happy") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "angry" && moods[1] === "angry") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "angry" && moods[1] === "sad") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      }

      if (moods[0] === "sad" && moods[1] === "happy") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "sad" && moods[1] === "angry") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      } else if (moods[0] === "sad" && moods[1] === "sad") {
        addTextContainerAnswers(getRandomAnswer(arrAnswers));
      }
    };
  });
}

//* Аналогичная функция, которая реагирует на нажатие какой-либо эмоции только при старте и записывает в массив moods настроение
function reactStartClickMood(arrEmoji, arrAnswers, mood) {
  arrEmoji.forEach((element) => {
    element.onclick = () => {
      moods.unshift(mood);
      if (moods.length > 2) {
        moods.pop();
      }
      addTextContainerAnswers(getRandomAnswerStart(arrAnswers, mood));
    };
  });
}

// * без комментариев))
function sayHello() {
  reactStartClickMood(happyEmojiElements, happyStartAnswers, "happy");
  reactStartClickMood(sadEmojiElements, sadStartAnswers, "sad");
  reactStartClickMood(angryEmojiElements, angryStartAnswers, "angry");
}
sayHello();

function AnswerLastMood() {
  if (moods[1] === "happy" && moods[0] === "happy") {
    reactClickMood(happyEmojiElements, happyAnswerOnHappyMoods);
  } else if (moods[1] === "happy" && moods[0] === "angry") {
    reactClickMood(angryEmojiElements, happyAnswerOnAngryMoods);
  } else if (moods[1] === "happy" && moods[0] === "sad") {
    reactClickMood(sadEmojiElements, happyAnswerOnSadMoods);
  }

  if (moods[1] === "sad" && moods[0] === "happy") {
    reactClickMood(happyEmojiElements, sadAnswerOnHappyMoods);
  } else if (moods[1] === "sad" && moods[0] === "angry") {
    reactClickMood(angryEmojiElements, sadAnswerOnAngryMoods);
  } else if (moods[1] === "sad" && moods[0] === "sad") {
    reactClickMood(sadEmojiElements, sadAnswerOnSadMoods);
  }

  if (moods[1] === "angry" && moods[0] === "happy") {
    reactClickMood(happyEmojiElements, angryAnswerOnHappyMoods);
  } else if (moods[1] === "angry" && moods[0] === "angry") {
    reactClickMood(angryEmojiElements, angryAnswerOnAngryMoods);
  } else if (moods[1] === "angry" && moods[0] === "sad") {
    reactClickMood(sadEmojiElements, angryAnswerOnSadMoods);
  }
}

//* функция, которая отдает ответ, что не знает о чем я говорю, если были введен текст
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
