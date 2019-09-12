var playGameBtn = document.querySelector('#play-game-btn');


playGameBtn.addEventListener('click', showName);

function showName() {
  var player1name = document.querySelector('.player1-name-input');
  var player1nameDisplay = document.querySelector('.player1-name');
  var errorMsg = document.querySelector('.hide-msg');
  if (player1name.value.length) {
    player1nameDisplay.innerHTML = player1name.value.toUpperCase();
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
};
