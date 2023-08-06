let computernum = 0;

let fastvalue = [];

let chan = 5;

let button = document.getElementById("but");

let reset = document.getElementById("res");

let userinput = document.getElementById("use");

let chance = document.getElementById("cha");

let updown = document.getElementById("upd");

button.addEventListener("click", play);
reset.addEventListener("click", resetgame);

function randomnumber() {
  computernum = Math.floor(Math.random() * 100) + 1;
}
randomnumber();

function resetgame() {
  randomnumber();
  updown.textContent = "UP or down.";
  button.disabled = false;
  chan = 5;
  cha.textContent = `남은 기회 : ${chan} 회`;
  fastvalue = [];
}

function play() {
  let uservalue = userinput.value;

  let gameover = false;

  if (uservalue <= 0 || uservalue > 100) {
    updown.textContent = "1~100 범위 안의 값을 입력하시오.";
    return "";
  } else if (fastvalue.includes(uservalue)) {
    updown.textContent = "이미 입력했던 값입니다.";
    return "";
  }

  userinput.value = "";

  fastvalue.push(uservalue);

  chan--;

  chance.textContent = `남은 기회 : ${chan} 회`;

  if (computernum == uservalue) {
    updown.textContent = "축하합니다! PC를 살리셨네요.";
    button.disabled = true;
    return;
  } else if (computernum < uservalue) {
    updown.textContent = "DOWN!!!";
  } else {
    updown.textContent = "UP!!!";
  }

  if (chan <= 0) {
    gameover = true;
  }
  if (gameover == true) {
    updown.textContent = "안타깝네요.다시 도전해보세요.";
    button.disabled = true;
  }
}
