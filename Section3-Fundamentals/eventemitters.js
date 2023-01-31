const EventEmitter = require("events");
const subject = new EventEmitter();

// same event for subject observer 1
subject.on("race win", () => {
  console.log("Congrats you won");
});

// same event for subject observer 2
subject.on("race win", () => {
  console.log("How the hell you win");
});

subject.on("race", (res) => {
  if (res === "win") {
    console.log("You won");
  }
});

subject.on("race", (res) => {
  if (res == "lost") {
    console.log("Oh You lost");
  }
});

subject.emit("race win");

subject.emit("race", "win"); //first is event and second is argument that passed in callback function

subject.emit("race", "lost");
