var count = 0;

$('.tile').on('click', runGame);

function runGame() {

  toggleTiles($(this));

  incrementCounter();

  checkIfWon();

}

function toggleTiles($tile) {
  $tile.toggleClass('on');

  if( $tile.prev().length ) {
    $tile.prev('.tile').toggleClass('on');
  }

  if( $tile.next().length ) {
    $tile.next('.tile').toggleClass('on');
  }
}

function incrementCounter() {
  count = (count + 1);
  setCounter();
}

function setCounter() {
  $('.counter').text(count);
}

function checkIfWon() {
  if( $('.on').length === 7 ) {
    alert('You won!!!\n\nIt took ' + count + ' moves!');

    resetGame();
  }
}

function resetGame() {
  $('.tile').removeClass('on');
  $('.resets').addClass('on');

  setCounter(0);

  count = 0;
}