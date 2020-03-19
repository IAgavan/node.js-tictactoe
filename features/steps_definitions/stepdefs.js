/* eslint-disable linebreak-style */
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function showMessage(string) {
  console.log(string);
}

Given('пустое поле', () => {
  this.field = '012345678';
});
Given('ходит игрок {string}', (string) => {
  this.player = string;
});
Given('поле {string}', (string) => {
  this.field = string;
});
When('игрок ходит в клетку {string}', (string) => {
  const int = +string;
  const field = this.field.split('');
  field[int] = this.player;
  this.field = field.join('');
});
When('игрок ходит в клетку {int}', (int) => {
  const field = this.field.split('');
  field[int] = this.player;
  this.field = field.join('');
});
Then('ход переходит к {string}', function (string) {
  this.player = string;
});
Then('поле становится {string}', (string) => {
  assert.equal(this.field, string);
});
Then('меняется игрок на {string}', (string) => {
  this.player = string;
});
Then('возвращается ошибка', () => {
  showMessage('выбери другое поле');
});
Then('победил игрок {string}', (string) => {
  this.winner = string;
});
Then('ничья', () => {
  showMessage('ничья');
});
