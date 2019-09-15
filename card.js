class Card {
  constructor(obj) {
    this.matchInfo = obj.matchInfo; //img src
    this.matched = false;
    this.id = obj.id;

  }
  match() {
    // 2
    // change matched to true
    this.matched = true;
    // run deck.moveToMatched
    deck.moveToMatched(this);
  }
}
