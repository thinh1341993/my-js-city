import { screendata, maparea } from "./data.js";
let character = JSON.parse(localStorage.getItem("character"));

// localStorage.setItem("nowscene", 37);
// localStorage.setItem("nowplayer", 1);

let scenescreen = document.getElementById("scenescreen");
let scenecode = document.getElementById("scenecode");
let codequestion = document.getElementById("codequestion");
let moreinfor = document.getElementById("moreinfor");
let next = document.getElementById("next");
let alert = document.getElementById("alert");
let hint = document.getElementById("hint");
hint.addEventListener("click", showhint);

let nowscene;
let nowplayer;
changescene();
let cpos = document.getElementById("cpos");
cpos.src = character[nowplayer].cimage;
function changescene() {
  alert.innerHTML = "";
  nowscene = Number(localStorage.getItem("nowscene"));
  nowplayer = Number(localStorage.getItem("nowplayer"));
  //   screendata[0].input2 = character[nowplayer].name;

  //   screendata[0].answer = `Nhà của ${character[nowplayer].name}`;
  //   screendata[4].
  if (nowscene !== null) {
    console.log(localStorage.getItem("nowscene"));
    scenescreen.style.backgroundImage = `url(${screendata[nowscene].bg})`;

    if (nowscene >= 13 && nowscene < 22) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="teacher.png" alt="" id="teacher">`;
    }
    if (nowscene >= 22 && nowscene < 25) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="friend.png" alt="" id="friend">`;
    }
    if (nowscene == 26) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="oldwomen.png" alt="" id="oldwomen">`;
    }
    if (nowscene >= 28 && nowscene < 31) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="fruit.png" alt="" id="fruit">`;
    }
    if (nowscene >= 31 && nowscene < 36) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="oldman.png" alt="" id="oldman">`;
    }
    if (nowscene >= 36 && nowscene < 38) {
      scenescreen.innerHTML =
        scenescreen.innerHTML + `<img src="parkman.png" alt="" id="parkman">`;
    }

    codequestion.innerHTML = `${screendata[nowscene].question}`;
    moreinfor.innerHTML = `Tutorials : <a href="${screendata[nowscene].tutorial}">${screendata[nowscene].tutorial}</a>`;
    let box = `<div id="${screendata[nowscene].divanswer}" class='dialogs'></div>`;

    scenescreen.innerHTML = scenescreen.innerHTML + `${box}`;
    if (nowscene !== 5) {
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).style.visibility = "visible";
    }

    if (screendata[nowscene].dialognpc !== null) {
      document.getElementById(`npc`).style.visibility = "visible";
      document.getElementById(`npc`).innerHTML = screendata[nowscene].dialognpc;
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).style.visibility = "hidden";
    }
    if (nowscene >= 0 && nowscene < 6) {
      document.getElementById(`npc`).style.visibility = "hidden";
    }
    let input1 = document.getElementById("input1");

    if (screendata[nowscene].ins == 2) {
      let input2 = document.getElementById("input2");
    }
    if (screendata[nowscene].ins == 3) {
      let input2 = document.getElementById("input2");
      let input3 = document.getElementById("input3");
    }
    if (screendata[nowscene].ins == 4) {
      let input2 = document.getElementById("input2");
      let input3 = document.getElementById("input3");
      let input4 = document.getElementById("input4");
    }
    if (screendata[nowscene].ins == 5) {
      let input2 = document.getElementById("input2");
      let input3 = document.getElementById("input3");
      let input4 = document.getElementById("input4");
      let input5 = document.getElementById("input5");
    }
    //   screendata[nowscene].divanswer = document.getElementById(
    //     `${screendata[nowscene].divanswer}`
    //   );
    //   let divanswer = document.getElementById("divanswer");
    //   divanswer.style.left = `${screendata[nowscene].divanswerleft}`;
    //   divanswer.style.top = `${screendata[nowscene].divanswertop}`;
  }
}

let submit = document.getElementById("submit");

submit.addEventListener("click", checkanswer);

function checkanswer() {
  //   console.log(screendata[nowscene].divanswer);
  let check = false;
  if (screendata[nowscene].ins == 1) {
    if (input1.value == screendata[nowscene].input1) {
      check = true;
    }
  } else if (screendata[nowscene].ins == 2) {
    if (
      input1.value == screendata[nowscene].input1 &&
      input2.value == screendata[nowscene].input2
    ) {
      check = true;
    }
  } else if (screendata[nowscene].ins == 3) {
    if (
      input1.value == screendata[nowscene].input1 &&
      input2.value == screendata[nowscene].input2 &&
      input3.value == screendata[nowscene].input3
    ) {
      check = true;
    }
  } else if (screendata[nowscene].ins == 4) {
    if (
      input1.value == screendata[nowscene].input1 &&
      input2.value == screendata[nowscene].input2 &&
      input3.value == screendata[nowscene].input3 &&
      input4.value == screendata[nowscene].input4
    ) {
      check = true;
    }
  } else if (screendata[nowscene].ins == 5) {
    if (
      input1.value == screendata[nowscene].input1 &&
      input2.value == screendata[nowscene].input2 &&
      input3.value == screendata[nowscene].input3 &&
      input4.value == screendata[nowscene].input4 &&
      input5.value == screendata[nowscene].input5
    ) {
      check = true;
    }
  }

  if (check == true) {
    alert.innerHTML = "";
    if (nowscene == 5) {
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).style.visibility = "visible";
      character[nowplayer].completed.push("house");
      localStorage.setItem("character", `${JSON.stringify(character)}`);
      document
        .getElementById(`${screendata[nowscene].divanswer}`)
        .addEventListener("click", () => {
          location.href = "map.html";
        });
    }
    if (screendata[nowscene].dialognpc !== null) {
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).style.visibility = "visible";
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).innerHTML = `${screendata[nowscene].answer}`;
      setTimeout(() => {
        console.log(nowscene);
        if (nowscene == 12) {
          character[nowplayer].completed.push("cafe");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else if (nowscene == 21) {
          character[nowplayer].completed.push("school");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else if (nowscene == 24) {
          character[nowplayer].completed.push("friend");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else if (nowscene == 30) {
          character[nowplayer].completed.push("market");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else if (nowscene == 35) {
          character[nowplayer].completed.push("bookstore");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else if (nowscene == 37) {
          character[nowplayer].completed.push("park");
          localStorage.setItem("character", `${JSON.stringify(character)}`);
          location.href = "map.html";
        } else {
          document.getElementById(
            `${screendata[nowscene].divanswer}`
          ).style.visibility = "hidden";
          localStorage.setItem("nowscene", nowscene + 1);

          changescene();
        }
      }, 1000);
    } else {
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).innerHTML = `${screendata[nowscene].answer}`;
      localStorage.setItem("nowscene", nowscene + 1);
      changescene();
    }
  } else {
    alert.style.color = "red";
    alert.innerHTML = "Đáp án không chính xác!";
  }
}

// next.addEventListener("click", nextquestion);
// function nextquestion() {
//   if (nowscene == 5 || nowscene == 10) {
//     location.href = "map.html";
//   } else {
//     console.log(nowscene);
//     localStorage.setItem("nowscene", nowscene + 1);
//     changescene();
//   }
// }
function showhint() {
  alert.style.color = "blue";
  alert.innerHTML = screendata[nowscene].hint;
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
  document.querySelector(".container").style.filter = "blur(5px)";
}

function helpClose() {
  play(click);
  document.getElementById("help-board").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
}

function backToLoginHandler() {
  play(click);
  //link to login screen
  location.href = "./map.html";
}

// end of buttons

document.getElementById(
  "scene-completed"
).innerHTML = `${character[nowplayer].completed.length}`;

document.getElementById("user-name").innerHTML = `${character[nowplayer].name}`;
document.getElementById("user-avatar").src = `${character[nowplayer].avatar}`;
