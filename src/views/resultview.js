const PubSub = require ('../helpers/pubsub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("WordCounter:result", (event) => {
      const count = event.detail;
      this.updateView(count);
  })
};

ResultView.prototype.updateView = function (count) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `${count}`;
};

module.exports = ResultView;
