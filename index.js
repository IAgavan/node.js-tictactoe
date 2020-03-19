const readlineSync = require('readline-sync');

let field = `012
345
678`;
console.log(field);

const player = 'x';
let choise = readlineSync.question('Make your turn: choose field(0-8) ');
while (+choise < 0 || +choise > 8 || isNaN(+choise)) {
  choise = readlineSync.question('Make correct choise(0-8) ');
}
field = field.split('');
if (+choise > 5) {
  field[+choise + 2] = player;
} else if (+choise > 2) {
  field[+choise + 1] = player;
} else field[+choise] = player;

field = field.join('');
console.log(field);