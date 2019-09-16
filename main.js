var allCards = document.querySelectorAll('.card-img');
var cardPage = document.querySelector('.card-page');
var deck = []; // change this to an instance of the deck class
var picturesArr = ['images/ears.JPG', 'images/ears.JPG', 'images/clouds.JPG', 'images/clouds.JPG', 'images/snow.JPG', 'images/snow.JPG', 'images/hat.JPG', 'images/hat.JPG', 'images/stick.JPG','images/stick.JPG'];
var playGameBtn1 = document.querySelector('.play-game-btn');
var playGameBtn2 = document.querySelector('#play-game-btn2');
var rulePage = document.querySelector('.rule-page');
var startTime = Date.now()

playGameBtn1.addEventListener('click', showRulePage);
playGameBtn2.addEventListener('click', cardPageLoad);

for (var i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', clickCard);
};

function cardPageLoad() {
  showCardPage();
  instantiateCardsAndDeck();
  startTimer();
};

function startTimer() {
  var startTime = Date.now();
}

function calculateElapsedTime() {
  var endTime = Date.now();
  var elapsedTime = endTime - startTime;
  var totalSec = elapsedTime / 1000;
  var totalMin = Math.round(totalSec / 60);
  var totalSec = Math.round(totalSec % 60);
  var elapsedTimeMin = document.querySelector('.elapsed-time-min');
  var elapsedTimeSec = document.querySelector('.elapsed-time-sec');

  console.log(totalMin, totalSec);
  elapsedTimeMin.innerHTML = totalMin;
  elapsedTimeSec.innerHTML = totalSec;
  // innerHTML1 -> totalMin
  // innerHTML2 -> totalSec

}

function cardNotAlreadySelected(selectedCardId) {
  return !deck.selectedCards.some(function(previousCard) { //return boolean value
    return previousCard.id === selectedCardId;
  })
};

function clickCard() {
  var selectedCardElementId = event.target.dataset.id;
  var selectedCard = deck.cards.find(function(card) {
    return selectedCardElementId === card.id;
  })
  var cardPic = selectedCard.matchInfo;
  if (deck.selectedCards.length < 2) {
    if (cardNotAlreadySelected(selectedCardElementId)) {
      deck.selectedCards.push(selectedCard);
    } else {
      removeCardFromSelectedArr(selectedCard);
    }
    toggleImage(cardPic);
    if (deck.selectedCards.length === 2) {
      deck.checkSelectedCards();
      updateGuessedCardsOnDOM();
    }
    if (deck.matches.length === 5) {
      showCongratsPage();
      calculateElapsedTime();
    }
  } else if (!cardNotAlreadySelected(selectedCardElementId)) {
    toggleImage(cardPic);
    removeCardFromSelectedArr(selectedCard);
  }
};

function instantiateCardsAndDeck() {
  var cardsArr = document.querySelectorAll('.card-img');
  var deckArr = [];
  for (var i = 0; i < cardsArr.length; i++) {
    var card = new Card({id: cardsArr[i].dataset.id, matchInfo: picturesArr[i]});
    deckArr.push(card);
  }

  deck = new Deck({cards: deckArr});
  deck.shuffle(deckArr);
};


function showShuffledCards(array) {


  // for each card in deck.shuffled cards, find id
  // replace
}

function removeCardFromSelectedArr(card) {
  var indexToSplice = deck.selectedCards.indexOf(card);
  deck.selectedCards.splice(indexToSplice, 1);
};

function showCardPage() {
  rulePage.classList.add('hide');
  cardPage.classList.remove('hide');
};

function showCongratsPage() {
  var congratsPage = document.querySelector('.congrats-page');
  cardPage.classList.add('hide');
  congratsPage.classList.remove('hide');
};

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

function toggleImage(picture) {
  if (event.target.src.match('images/L.jpg')) {
    event.target.src = picture;
  } else {
    event.target.src = 'images/L.jpg';
  }
};

function updateGuessedCardsOnDOM() {
  if (deck.matchedCards.length === 2) {
    for (var i = 0; i < deck.matchedCards.length; i++) {
      document.querySelector(`[data-id='${deck.matchedCards[i].id}']`).style.visibility='hidden';
    }
    deck.matchedCards = [];
    deck.selectedCards = [];
    var player1Matches = document.querySelector('#player-1-matches');
    player1Matches.innerText = deck.matches.length;
  }
  // KEEP THE NEXT TWO LINES -- WILL AUTOMATE THE CARDS TO SHOW L PICTURE AGAIN WITHOUT USER CLICKING
  // for (var i = 0; i < deck.selectedCards.length; i++) {
  //   document.querySelector(`[data-id='${deck.selectedCards[i].id}']`).src='images/L.jpg';
  // }
};
