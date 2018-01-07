/*global console*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  function initGame() {
    var fields = document.querySelectorAll('.board > div');
    fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  }

  function fieldClickHandler() {
    this.classList.add('red');
    console.log('Hello', this);
  }

  initGame();

});
