var playGameBtn1 = document.querySelector('.play-game-btn');
var playGameBtn2 = document.querySelector('#play-game-btn2');
var rulePage = document.querySelector('.rule-page');
var cardContainer = document.querySelector('#card-container');
var picturesArr = ['images/ears.JPG', 'images/ears.JPG', 'images/clouds.JPG', 'images/clouds.JPG', 'images/snow.JPG', 'images/snow.JPG', 'images/hat.JPG', 'images/hat.JPG', 'images/stick.JPG','images/stick.JPG'];
var clickCardCount = 0;

playGameBtn1.addEventListener('click', showRulePage);
playGameBtn2.addEventListener('click', showCardPage);
cardContainer.addEventListener('click', showPicture);



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
  // instantiate cards
};

function showPicture(event) {
  var randomIndex = Math.floor(Math.random() * picturesArr.length);
  var cardPic = picturesArr[randomIndex];
  if (clickCardCount < 2) {
    picturesArr.splice(randomIndex, 1);
    event.target.src = cardPic;
  }


  // change card property to selected

  // if card property is selected, change back to picture
  clickCardCount += 1;
};

function hidePicture() {

}
