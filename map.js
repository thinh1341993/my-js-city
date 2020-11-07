// const { character } = require("./data");

let character = JSON.parse(localStorage.getItem("character"));
let nowplayer = Number(localStorage.getItem("nowplayer"));
console.log(character[nowplayer]);

var target = {
  house: 0,
  cafe: 6,
  school: 13,
  friends: 22,
  market: 25,
  bookstore: 31,
  park: 36,
};

var userName = character[nowplayer].name;
var userAvatar = character[nowplayer].avatar;
// var progress = `${character[nowplayer].completed.length}`;
var progress = 5;
document.getElementById("scene-completed").textContent = progress;
document.getElementById("user-name").textContent = userName;
document.getElementById("user-avatar").src = userAvatar;

var $place = document.querySelectorAll(".place");

$place.forEach((item) => {
  item.addEventListener("click", placeHandler);
});

var currentPos = {
  x: 144,
  y: 513,
};

document.getElementById("character").src = `${character[nowplayer].avatar}`;
console.log(document.getElementById("character").style.left);
function placeHandler(event) {
  play(click);
  play(soundtrack);

  let left = document.getElementById(event.target.id).offsetLeft;
  let top = document.getElementById(event.target.id).offsetTop;
  let width = document.getElementById(event.target.id).offsetWidth;
  let height = document.getElementById(event.target.id).offsetHeight;
  console.log({ left: left, top: top });

  let newX = left + width / 2 - 55;
  let newY = top + height + 20;
  let step = 20;
  // let speed = Math.sqrt(Math.pow((newX-currentPos.x),2)+Math.pow((newY-currentPos.y),2))/step;

  for (let i = 1; i <= 20; i++) {
    let speedX = Math.abs((newX - currentPos.x) / step);
    let speedY = Math.abs((newY - currentPos.y) / step);

    let direcX = 1;
    let direcY = 1;
    if (newX - currentPos.x >= 0) {
      direcX = 2;
    } else {
      direcX = 1;
    }
    if (newY - currentPos.y >= 0) {
      direcY = 2;
    } else {
      direcY = 1;
    }
    setTimeout(() => {
      currentPos.x = currentPos.x + speedX * Math.pow(-1, direcX);
      currentPos.y = currentPos.y + speedY * Math.pow(-1, direcY);

      document.getElementById("character").style.left = currentPos.x + "px";
      document.getElementById("character").style.top = currentPos.y + "px";
    }, 15 * i);
  }

  // move to current place
  setTimeout(() => {
    localStorage.setItem("nowscene", target[event.target.id]);
    location.href = "./scene.html";
  }, 500);
}

// sound effects
var click = document.getElementById("click-sound");
var soundtrack = document.getElementById("soundtrack");

soundtrack.loop = true;
var isSoundOn = true;

function play(sound) {
  if (isSoundOn) {
    sound.play();
  } else {
    sound.pause();
  }
}

// end of sound effects

// buttons

document.getElementById("sound").addEventListener("click", soundHandler);
document.getElementById("help").addEventListener("click", helpHandler);
document
  .getElementById("back-to-login")
  .addEventListener("click", backToLoginHandler);
document.getElementById("help-close").addEventListener("click", helpClose);

function soundHandler() {
  play(click);
  if (isSoundOn) {
    document.getElementById("sound").src = "./soundoff.png";
  } else {
    document.getElementById("sound").src = "./soundon.png";
  }
  isSoundOn = !isSoundOn;
  play(soundtrack);
}

function helpHandler() {
  play(click);
  document.getElementById("help-board").style.display = "flex";
  document.getElementById("map").style.filter = "blur(5px)";
}

function helpClose() {
  play(click);
  document.getElementById("help-board").style.display = "none";
  document.getElementById("map").style.filter = "blur(0px)";
}

function backToLoginHandler() {
  play(click);
  //link to login screen
  location.href = "./index.html";
}

// end of buttons
document.getElementById("scene-completed").innerHTML =
  character[nowplayer].completed.length;
