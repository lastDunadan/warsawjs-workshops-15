/*global console*/
/*global alert*/
/*global setTimeout*/
/*global document*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var playerClasses = {
    'CzerwoneKolko' : 'red',
    'NiebieskiKrzyzyk' : 'blue'
  },
    scores = {
      'CzerwoneKolko' : 0,
      'NiebieskiKrzyzyk' : 0
    },
    resetButton = document.getElementById('reset-score'),
    currentPlayer,
    emptyFields;

  function displayScore(player) {
    var score = document.getElementById(`${player}-score`);
    score.innerHTML = `${scores[player]}`;
  }

  function updateScore(player) {
    scores[player] = scores[player] + 1;
  }

  resetButton.addEventListener('click', function () {
    scores['CzerwoneKolko'] = 0;
    scores['NiebieskiKrzyzyk'] = 0;

    displayScore('CzerwoneKolko');
    displayScore('NiebieskiKrzyzyk');
  });

  function roundInfo() {
    var round = document.getElementById('round-info');
    round.innerHTML = 'Teraz się rusza ' + currentPlayer;
  }

  function checkWinner() {

    var fields = document.querySelectorAll('.board > div'),

      row1 = fields[0].className + fields[1].className + fields[2].className,
      row2 = fields[3].className + fields[4].className + fields[5].className,
      row3 = fields[6].className + fields[7].className + fields[8].className,

      col1 = fields[0].className + fields[3].className + fields[6].className,
      col2 = fields[1].className + fields[4].className + fields[7].className,
      col3 = fields[2].className + fields[5].className + fields[8].className,

      diag1 = fields[0].className + fields[4].className + fields[8].className,
      diag2 = fields[6].className + fields[4].className + fields[2].className,

      boardCheck = [
        row1, row2, row3,
        col1, col2, col3,
        diag1, diag2
      ];

    if (boardCheck.includes('redredred')) {
      setTimeout(function () {
        alert('Czerwone kołko wygrywa runde!');
        updateScore('CzerwoneKolko');
        initGame();
      }, 100);
      return;
    }

    if (boardCheck.includes('blueblueblue')) {
      setTimeout(function () {
        alert('Niebieski krzyżyk wygrywa runde!');
        updateScore('NiebieskiKrzyzyk');
        initGame();
      }, 100);
      return;
    }

    if (emptyFields === 0) {
      setTimeout(function () {
        alert('Remis');
      }, 100);
      return;
    }
  }

  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);

    emptyFields = emptyFields - 1;

    if (currentPlayer === 'CzerwoneKolko') {
      currentPlayer = 'NiebieskiKrzyzyk';
    } else {
      currentPlayer = 'CzerwoneKolko';
    }

    this.removeEventListener('click', fieldClickHandler);

    checkWinner();
    roundInfo();
  }

  function initGame() {
    var fields = document.querySelectorAll('.board > div');

    currentPlayer = 'CzerwoneKolko';
    emptyFields = 9;
    fields.forEach(function (field) {
      field.addEventListener('click', fieldClickHandler);
    });
    fields.forEach(function (field) {
      field.removeAttribute('class');
    });

    roundInfo();
    displayScore('CzerwoneKolko');
    displayScore('NiebieskiKrzyzyk');

  }

  initGame();

});
