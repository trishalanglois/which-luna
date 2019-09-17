class Card {
  constructor(obj) {
    this.matchInfo = obj.matchInfo;
    this.matched = false;
    this.id = obj.id;

  }
  match() { 
    this.matched = true;
    deck.moveToMatched(this);
  }
}
