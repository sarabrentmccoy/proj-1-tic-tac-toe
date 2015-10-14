$(document).ready(function() {
  $('.start-button').html('Start!');
  var newGame = Object.create(GamePrototype);
  newGame.init();
  newGame.playGame();
    var x = 'x';
    var o = 'o';
    blank = '';
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    $('board').add([blank, blank, blank, blank, blank, blank, blank, blank, blank]);
    $( "#reset-game" ).trigger( "click")
});
//useful  maybe
var cellNumber = $('div').data('cell');

//scoreboard
$( "div" ).data( "test", { first: xWins(), last: oWins() } );
$( "span:first" ).text( $( "div" ).data( "test" ).first );
$( "span:last" ).text( $( "div" ).data( "test" ).last );



var winner = [x, o];
if ($('d1').hasClass(winner) || $('d2').hasClass(winner) || $('top').hasClass(winner) || $('center').hasClass(winner) || $('bottom').hasClass(winner) || $('left').hasClass(winner) || $('right').hasClass(winner) || $('middle').hasClass(winner) {
  alert(winner + 'won that one. Press start to play again!')
}

else if (count == 9)
  {
  alert("It's a tie. Press start to play again!")


$('.square').on('click', someCallbackFunction) {

}

$('#reset-game').trigger('click') {

  };

//adding x o value to squares
var turn = function() {
  if (player === x) {
  $('div.square').html(x)
  }
}
$('square').click(function() {
  var value;

  switch ($('.square').index(this)) {
    case 0:
      value = $('.square').data('played');
      break;
    case 1:
      $('.square').data('played', x);
      value = x;
      break;
    case 2:
      $('.square').data('played', o);
      value = o;
      break;
  }
  $ ('')
});

//clearing board

//a turn
