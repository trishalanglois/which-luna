var playGameBtn1 = document.querySelector('.play-game-btn');
var playGameBtn2 = document.querySelector('#play-game-btn2');
var rulePage = document.querySelector('.rule-page');
// var cardContainer = document.querySelector('#card-container');
var picturesArr = ['images/ears.JPG', 'images/ears.JPG', 'images/clouds.JPG', 'images/clouds.JPG', 'images/snow.JPG', 'images/snow.JPG', 'images/hat.JPG', 'images/hat.JPG', 'images/stick.JPG','images/stick.JPG'];
var clickCardCount = 0;
var deck = [];
var allCards = document.querySelectorAll('.card-img');

playGameBtn1.addEventListener('click', showRulePage);
playGameBtn2.addEventListener('click', cardPageLoad);
// cardContainer.addEventListener('click', showPicture);

for (var i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', showPicture);
}

function cardPageLoad() {
  showCardPage();
  instantiateCardsAndDeck();
}

function showRulePage() {
  var welcomePage = document.querySelector('.first-page');
  var player1name = document.querySelector('.player1-name-input');
  var player1nameDisplay = document.querySelectorAll('.player1-name');
  var errorMsg = document.querySelector('.hide-msg');
  if (player1name.value.length) {
    welcomePage.classList.add('hide');
    rulePage.classList.remove('hide');
    for (var i = 0; i < player1nameDisplay.length; i++) {
      player1nameDisplay[i].innerHTML = player1name.value.toUpperCase();
    }
  } else {
    errorMsg.style.display = 'block';
  }
};

function showCardPage() {
  var cardPage = document.querySelector('.card-page');
  rulePage.classList.add('hide');
  cardPage.classList.remove('hide');
};

function instantiateCardsAndDeck() {
  var cardsArr = document.querySelectorAll('.card-img');
  var deckArr = [];
  for (var i = 0; i < cardsArr.length; i++) {
    var card = new Card({id: cardsArr[i].dataset.id, matchInfo: randomizedPicture()});
    deckArr.push(card);
  }
  deck = new Deck({cards: deckArr});
  console.log(deck);
};

function randomizedPicture() {
  var randomIndex = Math.floor(Math.random() * picturesArr.length);
  var cardPic = picturesArr[randomIndex];
  picturesArr.splice(randomIndex, 1);
  return cardPic;
};

function showPicture() {
  var selectedCardElementId = event.target.dataset.id;
  var selectedCard = deck.cards.find(function(card) {
    return selectedCardElementId === card.id;
  })
  var cardPic = selectedCard.matchInfo;
  if (clickCardCount < 2) {
    event.target.src = cardPic;
  }
  clickCardCount += 1;
};
