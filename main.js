var playGameBtn = document.querySelector('.play-game-btn');

playGameBtn.addEventListener('click', showRulePage);
// window.addEventListener('load', hideRulePage);



function showRulePage() {
  // var rulesPage = document.querySelector('.rule-page');
  console.log('test');
  var welcomePage = document.querySelector('.first-page');
  var rulePage = document.querySelector('.rule-page');

  var player1name = document.querySelector('.player1-name-input');
  var player1nameDisplay = document.querySelector('.player1-name');
  var errorMsg = document.querySelector('.hide-msg');
  if (player1name.value.length) {
    welcomePage.classList.add('hide');
    rulePage.classList.remove('hide');
    player1nameDisplay.innerHTML = player1name.value.toUpperCase();
  } else {
    errorMsg.style.display = 'block';
  }
};
