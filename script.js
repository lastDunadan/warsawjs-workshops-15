/*global console*/
/*global alert*/
/*global document*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var playerClasses = {
    'playerA' : 'red',
    'playerB' : 'blue'
  },
    currentPlayer,
    emptyFields;

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
        alert('Red Wins');
        return;
      }, 100);
    }

    if (boardCheck.includes('blueblueblue')) {
      setTimeout(function () {
        alert('Blue Wins');
        return;
      }, 100);
    }

//    if (row1 === 'redredred' || row2 === 'redredred' || row3 === 'redredred' ||
//        col1 === 'redredred' || col2 === 'redredred' || col3 === 'redredred' ||
//        diag1 === 'redredred' || diag2 === 'redredred') {
//      alert('Red Wins!');
//      return;
//    }
//
//    if (row1 === 'blueblueblue' || row2 === 'blueblueblue' || row3 === 'blueblueblue' ||
//        col1 === 'blueblueblue' || col2 === 'blueblueblue' || col3 === 'blueblueblue' ||
//        diag1 === 'blueblueblue' || diag2 === 'blueblueblue') {
//      alert('Blue Wins!');
//      return;
//    }

    if (emptyFields === 0) {
      setTimeout(function () {
        alert('Tie');
        return;
      }, 100);
    }
  }

  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);

    //Skrocony zapis IF
    //currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';

    emptyFields = emptyFields - 1;

    if (currentPlayer === 'playerA') {
      currentPlayer = 'playerB';
    } else {
      currentPlayer = 'playerA';
    }

    this.removeEventListener('click', fieldClickHandler);
    console.log('Fields left: ' + emptyFields);

    checkWinner();
  }

  function initGame() {
    var fields = document.querySelectorAll('.board > div');

    currentPlayer = 'playerA';
    emptyFields = 9;
    fields.forEach(function (field) {
      field.addEventListener('click', fieldClickHandler);
    });

    //fields.forEach(field (=>) field.addEventListener('click', fieldClickHandler));
  }

  initGame();

});
