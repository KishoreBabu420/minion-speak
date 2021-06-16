'use strict';

let btnTranslate = document.getElementById('btn-translate');

let userInput = document.getElementById('user-input');

//functions

const clickHandler = function () {
  const textToTranslate = userInput.value;
  console.log(textToTranslate);
};

btnTranslate.addEventListener('click', clickHandler);
