const submitBtn = document.getElementById("submit");
const userText = document.getElementById("user-text");

const happyEmoji = document.querySelectorAll(".happy > li");
const angryEmoji = document.querySelectorAll(".angry > li");
const sadEmoji = document.querySelectorAll(".sad > li");

const containerAnswers = document.getElementById("container-answer");

function sayDontUnderstand() {
  const reg = "^[a-zA-Z0-9_]*$";
  const answer = document.createTextNode("Прости, но я тебя не понимаю");
  submitBtn.onclick = function () {
    if (userText.value !== reg) containerAnswers.append(answer);
    userText.value = "";
  };
}

sayDontUnderstand();
