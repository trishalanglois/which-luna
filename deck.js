class Deck {
  constructor(obj) {
    this.cards = obj.cards;
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = [];
  }

  shuffle(array) {
    var shuffledCards = [];
    for (var i = 0; i < 10; i++) {
      var randomIndex = Math.floor(Math.random() * this.cards.length);
      shuffledCards.push(array.splice(randomIndex, 1)[0]);
    }
    this.cards = shuffledCards;
  }

  checkSelectedCards() {
    if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
      for (var i = 0; i < this.selectedCards.length; i++) {
        this.selectedCards[i].match();
      }
    } else {
      setTimeout(changeToCardBack, 2000);
    }
  }

  moveToMatched(card) {
    this.matchedCards.push(card);
    if (this.matchedCards.length === 2) {
      var matchedPair = [this.matchedCards];
      this.matches.push(matchedPair);
    }
  }
};
