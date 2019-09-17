class Deck {
  constructor(obj) {
    this.cards = obj.cards;
    this.matchedCards = []; //holding pen for cards that have been matched, between selected cards and matches
    this.selectedCards = []; //holding pen for selected cards, before they move to matched cards
    this.matches = []; //matches will be a total of 5 arrays, each array being the two matched card objects.  That way, if you ever call .length on deck.matches, it will show how many matches there are.  There will be 5 total matches to end the game.
  }

  shuffle(array) {
    var shuffledCards = [];
    for (var i = 0; i < 10; i++) {
      var randomIndex = Math.floor(Math.random() * this.cards.length);
      shuffledCards.push(array.splice(randomIndex, 1)[0]);
    }
    this.cards = shuffledCards;
  }

  checkSelectedCards() { //1
    if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
      for (var i = 0; i < this.selectedCards.length; i++) {
        this.selectedCards[i].match();
      }
    }
  }

  moveToMatched(card) { //3
    this.matchedCards.push(card);
    if (this.matchedCards.length === 2) {
      var matchedPair = [this.matchedCards];
      this.matches.push(matchedPair);
    }
  }
};
