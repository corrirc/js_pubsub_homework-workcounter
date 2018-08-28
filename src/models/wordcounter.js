const PubSub = require("../helpers/pubsub.js");

const WordCounter = function(){

};


WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:words-inputted", (event) => {
    const inputtedWords = event.detail;

    const result = this.numberOfWords(inputtedWords);
    PubSub.publish("WordCounter:result", result);
  })
};

WordCounter.prototype.numberOfWords = function(words){
  return words.split(" ").length;
};

module.exports = WordCounter;
