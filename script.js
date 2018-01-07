/*global console*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  function initGame() {
    var fields = document.querySelectorAll('.board > div');
    fields.forEach(field => field.addEventListener('click', fieldClickHandler));
  }

  function fieldClickHandler() {
    classList.add('background-color:red', this);
    console.log('Hello', this);
  }

  initGame();

});
