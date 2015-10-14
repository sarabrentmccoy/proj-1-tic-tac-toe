$(document).ready(function() {
  var newGame = Object.create(GamePrototype);
  newGame.init();
  newGame.playGame();
  $('.start-button').html('Start!');
    var x = 'x';
    var o = 'o';
    blank = '';
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    $('board').add([blank, blank, blank, blank, blank, blank, blank, blank, blank]);
});

if(i%2 === 0){
  var startPlayer = x
}
else {
  var startPlayer = o
};

var winner = [x, o];
if ($('d1').hasClass(winner) || $('d2').hasClass(winner) || $('top').hasClass(winner) || $('center').hasClass(winner) || $('bottom').hasClass(winner) || $('left').hasClass(winner) || $('right').hasClass(winner) || $('middle').hasClass(winner) {
  alert(winner + 'won that one. Press start to play again!')
}

else if (count == 9)
  {
  alert('Its a tie. It will restart.')


$( "#some-id" ).on( "click", someCallbackFunction )

$( "#reset-game" ).trigger( "click" );

function getWinner()

function winsRow() {

};

function winsColumn()

function winsDiagonal()
