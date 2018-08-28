const PubSub = require ('../helpers/pubsub.js');

const InputView = function() {

};

InputView.prototype.bindEvents = function(){
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('input', () => {
    const inputtedWords = event.target.value;
    console.log(inputtedWords);
    PubSub.publish('InputView:words-inputted', inputtedWords);
  })
};

module.exports = InputView;
