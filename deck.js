class Deck {
  constructor(obj) {
    this.cards = obj.cards;
    this.matchedCards = []; //get matched cards from Card class method match()?
    this.selectedCards = [];
    this.matches = []; //matches will be a total of 5 arrays, each array being the two matched card objects.  That way, if you ever call .length on deck.matches, it will show how many matches there are.  There will be 5 total matches to end the game.
  }
  shuffle() {

  }

  checkSelectedCards() {
    // 1
    // check selected cards matchInfo - if they match, run cards.match
    if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
      for (var i = 0; i < this.selectedCards.length; i++) {
        this.selectedCards[i].match();
      }
    }
  }

  moveToMatched(card) {
    // 3
    // move from cards array to to matchedCards array
    this.matchedCards.push(card);
    if (this.matchedCards.length === 2) {
      var matchedPair = [this.matchedCards];
      this.matches.push(matchedPair);
      // this.matchedCards = [];
      // return matchedPair;
    }

    //hide cards on DOM

  }
}
