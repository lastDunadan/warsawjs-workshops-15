/*global console*/
/*global alert*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var playerClasses = {
    'playerA' : 'red',
    'playerB' : 'blue'
  },
    currentPlayer,
    emptyFields;

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

    if (emptyFields === 0) {
      alert('Endo fo the Game');
    }

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
