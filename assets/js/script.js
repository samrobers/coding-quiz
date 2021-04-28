// we need a header called view high score in the top left corner
//
//the middle of the start screen will have a Code quiz header

// a button under the code quiz header saying start quiz

//5 ordered lists of 4 with question header to create the quiz from. with a boolean response when clicked on

//a score tracker
//at the end a input line to put name chosen to save the highscore

//an interaction that only puts a set of the code on the screen at once, when the answer is chosen it refreshes the page to the next question

var startBtn = document.querySelector("#startBtn");
var introSection = document.querySelector(".intro-section");
var mainSection = document.querySelector(".main-section");
var timer = document.querySelector("#timer");
var choiceBtn = document.querySelectorAll(".choiceBtn");
var saveBtn = document.querySelector("#saveBtn");
var myClock;
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
startBtn.addEventListener("click", startGame);
saveBtn.addEventListener("click", saveInitials);
var secondsLeft = 75;

function saveInitials() {
  var initials = document.querySelector("#initials").value;
  highScore.push({ initials: initials, highScore: secondsLeft });
  localStorage.setItem("highScore", JSON.stringify(highScore));
}

function startGame() {
  introSection.classList.add("hide");
  mainSection.classList.remove("hide");

  for (var i = 0; i < choiceBtn.length; i++) {
    choiceBtn[i].addEventListener("click", nextQuestion);
  }
  myClock = setInterval(startTimer, 1000);
}

function nextQuestion() {
  var currentArticle = this.getAttribute("data-article");
  var nextArticle = this.getAttribute("data-nextArticle");
  document.querySelector("." + currentArticle).classList.add("hide");
  if (nextArticle !== "end") {
    document.querySelector("." + nextArticle).classList.remove("hide");
  }

  if (nextArticle === "end") {
    clearInterval(myClock);
    document.querySelector(".initials-section").classList.remove("hide");
  }
}

function startTimer() {
  secondsLeft = secondsLeft - 1;
  timer.textContent = secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(myClock);
  }
}
