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
var myClock;
startBtn.addEventListener("click", startGame);

var secondsLeft = 75;
function startGame() {
  introSection.classList.add("hide");
  mainSection.classList.remove("hide");
  myClock = setInterval(startTimer, 1000);
}

function startTimer() {
  secondsLeft = secondsLeft - 1;
  timer.textContent = secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(myClock);
  }
}
