const robots = [
  'robot1.png',
  'robot2.png',
  'robot3.png',
  'robot4.png'
];

// 4x4 board with some pre-filled robots, use empty strings for empty cells
let boardData = [
  ['robot1.png', '', '', 'robot3.png'],
  ['', '', '', ''],
  ['robot4.png', '', '', 'robot2.png'],
  ['', '', '', 'robot1.png']
];

let correctAnswers = JSON.parse(JSON.stringify(boardData));

window.onload = function () {
  const board = document.getElementById("board");
  const choices = document.getElementById("choices");

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (boardData[row][col]) {
        let img = document.createElement("img");
        img.src = "images/" + boardData[row][col];
        img.classList.add("robot");
        cell.appendChild(img);
      } else {
        cell.ondragover = e => e.preventDefault();
        cell.ondrop = function (e) {
          const img = document.createElement("img");
          img.src = e.dataTransfer.getData("text");
          img.classList.add("robot");
          this.innerHTML = "";
          this.appendChild(img);
        };
      }
      board.appendChild(cell);
    }
  }

  for (let i = 0; i < robots.length; i++) {
    const img = document.createElement("img");
    img.src = "images/" + robots[i];
    img.classList.add("robot");
    img.draggable = true;
    img.ondragstart = function (e) {
      e.dataTransfer.setData("text", this.src);
    };
    choices.appendChild(img);
  }
};
