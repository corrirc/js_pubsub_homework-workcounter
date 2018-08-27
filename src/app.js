const InputView = require("./views/inputview.js");
const ResultView = require('./views/resultview.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
