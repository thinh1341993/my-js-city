import { character, screendata, maparea } from "./data.js";

localStorage.setItem("nowscene", 13);
localStorage.setItem("nowplayer", 0);

let scenescreen = document.getElementById("scenescreen");
let scenecode = document.getElementById("scenecode");
let codequestion = document.getElementById("codequestion");
let moreinfor = document.getElementById("moreinfor");
let next = document.getElementById("next");
let nowscene;
let nowplayer;
function changescene() {
  nowscene = Number(localStorage.getItem("nowscene"));
  nowplayer = Number(localStorage.getItem("nowplayer"));
  screendata[0].input2 = character[nowplayer].name;

  screendata[0].answer = `Nhà của ${character[nowplayer].name}`;
  //   screendata[4].
  if (nowscene !== null) {
    scenescreen.style.backgroundImage = `url(${screendata[nowscene].bg})`;

    if (nowscene >= 13 && nowscene < 23) { scenescreen.innerHTML = scenescreen.innerHTML + `<img src="teacher.png" alt="" id="teacher">`}
      codequestion.innerHTML = `${screendata[nowscene].question}`;
    moreinfor.innerHTML = `Tutorials : <a href="${screendata[nowscene].tutorial}">${screendata[nowscene].tutorial}</a>`;
    let box = `<div id="${screendata[nowscene].divanswer}"></div>`;

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
changescene();
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
    if (nowscene == 5) {
      document.getElementById(
        `${screendata[nowscene].divanswer}`
      ).style.visibility = "visible";
      document
        .getElementById(`${screendata[nowscene].divanswer}`)
        .addEventListener("click", () => {
          location.href = "map.html";
        });
      character[nowplayer].completed.push("house");
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
