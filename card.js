class Card {
  constructor(obj) {
    this.matchInfo = obj.matchInfo; //img src
    this.matched = false;
    this.id = obj.id;

  }
  match() { //2
    this.matched = true;
    deck.moveToMatched(this);
  }
}
