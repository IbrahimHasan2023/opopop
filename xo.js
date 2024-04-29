let title = document.querySelector(".title");
let turn = "x";

function easy(n1, n2, n3) {
  title.innerHTML = `${squares[n1]} winner`;

  document.getElementById("item" + n1).style.background = "#000";
  document.getElementById("item" + n2).style.background = "#000";
  document.getElementById("item" + n3).style.background = "#000";

  setInterval(function () {
    title.innerHTML += ".";
  }, 800);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

let squares = [];
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    easy(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    easy(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    easy(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    easy(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    easy(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    easy(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    easy(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    easy(3, 5, 7);
  } else if (
    squares[1] != "" &&
    squares[2] != "" &&
    squares[3] != "" &&
    squares[4] != "" &&
    squares[5] != "" &&
    squares[6] != "" &&
    squares[7] != "" &&
    squares[8] != "" &&
    squares[9] != ""
  ) {
    setInterval(function () {
      title.innerHTML += ".";
    }, 800);
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "o";
    title.innerHTML = "turn o";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "turn x";
  }
  winner();
}
