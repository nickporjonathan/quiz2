// Timer for quiz
var counter = 10;
var countdown = function () {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log("Times Up!");
    clearInterval(startCountdown);
  }
};

var startCountdown = setInterval(countdown, 1000);

// this funciton is for the button + when the user presses enter it will submit the form

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
