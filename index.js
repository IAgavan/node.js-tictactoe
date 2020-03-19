/* eslint-disable linebreak-style */
const readlineSync = require('readline-sync');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player = 'x';

let field = `012
345
678`;
field = field.split('').filter((e) => e !== '\n')
console.log(field);

function changeTurn() {
  player = player === 'x' ? 'o' : 'x';
}

function checkWinner() {
  return winConditions.some((condition) => condition.every((index) => field[index] === player));
}
function checkDraw() {
  return field.every((e) => e === 'x' || e === 'o');
}

function makeChoise() {
  let choise = readlineSync.question(`Hey, ${player}! Make your turn: choose field(0-8) `);
  while (+choise < 0 || +choise > 8 || isNaN(+choise || field[+choise] === choise)) {
    choise = readlineSync.question(`Hey, ${player}! Make your correct choise: `);
  }
  field[+choise] = player;
  console.log(field);
}

// game loop
while (true) {
  makeChoise();
  if (checkWinner()) {
    console.log(`${player} wins`);
    break;
  } else if (checkDraw()) {
    console.log('Draw');
    break;
  }
  changeTurn();
}
