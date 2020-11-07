let form = document.getElementById("form");
let character1 = document.getElementById("character1");
let character2 = document.getElementById("character2");
let character3 = document.getElementById("character3");
let character4 = document.getElementById("character4");
let warning = document.getElementById("warning");
let name = document.getElementById("name");
let createCharacter = document.getElementById("createCharacter");
let loadCharacter = document.getElementById("loadCharacter");
let listCharacter = document.getElementById("listCharacter");
let backHome = document.getElementById("backHome");
let backHome1 = document.getElementById("backHome1");
let backoadCharacter = document.getElementById("backoadCharacter");

let activeCharacter = document.getElementById("activeCharacter");
let choiceCharacter = document.getElementById("choiceCharacter");

let newGame = document.getElementById("newGame");
let loadGame = document.getElementById("loadGame");
let create = document.getElementById("create");

let character = JSON.parse(localStorage.getItem("character"));

let active = "";

newGame.addEventListener("click", () => {
  create.style.display = "none";
  createCharacter.style.display = "flex";
});

loadGame.addEventListener("click", (event) => {
  create.style.display = "none";
  loadCharacter.style.display = "inline";
  listCharacter.innerHTML = "";
  for (i = 0; i < character.length; i++) {
    listCharacter.innerHTML += `
        <div id="${i}" class='xx' style="display: flex;flex-direction: column;align-items: center;">
        <div  class="character">
            <img src="${character[i].cimage}" alt="" style="width:100px">
        </div>
        <div style="margin-top: 10px;margin-bottom: 0px;" class="nameCharacter">${character[i].name}</div>
    </div>
        `;
  }
  document.querySelectorAll(".xx").forEach((item, index) => {
    item.addEventListener("click", () => {
      activeCharacter.style.display = "flex";
      loadCharacter.style.display = "none";
      choiceCharacter.innerHTML = `
            <div style="display: flex;flex-direction: column;align-items: center;">
            <div  class="character">
                <img src="${
                  character[item.id].cimage
                }" alt="" style="width:100px">
            </div>
            <div style="margin-top: 10px;margin-bottom: 0px;" class="nameCharacter">${
              character[item.id].name
            }</div>
        </div>
            `;
    });
  });
});

// nút back
backHome.addEventListener("click", () => {
  create.style.display = "flex";
  loadCharacter.style.display = "none";
});
backHome1.addEventListener("click", () => {
  create.style.display = "flex";
  createCharacter.style.display = "none";
});
backoadCharacter.addEventListener("click", () => {
  activeCharacter.style.display = "none";
  loadCharacter.style.display = "flex";
});

//tao nhan vat
character1.addEventListener("click", () => {
  character1.classList.add("characterActive");
  character2.classList.remove("characterActive", "glowing");
  character3.classList.remove("characterActive", "glowing");
  character4.classList.remove("characterActive", "glowing");
  character1.classList.remove("glowing");
  active = "1";
  console.log(active);
});

character2.addEventListener("click", () => {
  character2.classList.add("characterActive");
  character1.classList.remove("characterActive", "glowing");
  character3.classList.remove("characterActive", "glowing");
  character4.classList.remove("characterActive", "glowing");
  character2.classList.remove("glowing");
  active = "2";
  console.log(active);
});

character3.addEventListener("click", () => {
  character3.classList.add("characterActive");
  character2.classList.remove("characterActive", "glowing");
  character1.classList.remove("characterActive", "glowing");
  character4.classList.remove("characterActive", "glowing");
  character3.classList.remove("glowing");
  active = "3";
  console.log(active);
});

character4.addEventListener("click", () => {
  character4.classList.add("characterActive");
  character2.classList.remove("characterActive", "glowing");
  character3.classList.remove("characterActive", "glowing");
  character1.classList.remove("characterActive", "glowing");
  character4.classList.remove("glowing");
  active = "4";
  console.log(active);
});

form.onsubmit = function (event) {
  event.preventDefault();
  let isNameExist = false;
  if (this.name.value !== "") {
    for (i = 0; i < character.length; i++) {
      if (this.name.value === character[i].name) {
        warning.innerHTML = "Tên nhân vật đã tồn tại";
        isNameExist = true;
        break;
      } else if (active === "") {
        character1.classList.add("glowing");
        character2.classList.add("glowing");
        character3.classList.add("glowing");
        character4.classList.add("glowing");
        warning.innerHTML = "Bạn chưa chọn nhân vật";
        isNameExist = true;
        break;
      }
      console.log(character);
    }
    if (!isNameExist) {
      character.push({
        name: this.name.value,
        completed: [],
        cimage: `./c${active}.png`,
        avatar: `./c-${active}.png`,
      });
      localStorage.setItem("nowplayer", character.length - 1);
      localStorage.setItem("character", `${JSON.stringify(character)}`);
      location.href = "map.html";
    }
    console.log(character);
  } else {
    name.classList.add("glowing");
    warning.innerHTML = "Bạn chưa đặt tên cho nhân vật";
  }
};

document.getElementById("entergame").addEventListener("click", () => {
  localStorage.setItem("nowplayer", character.length - 1);
  location.href = "map.html";
});
