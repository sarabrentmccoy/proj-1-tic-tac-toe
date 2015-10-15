//starting it up


//determining player/turn
    //if player === X when function turn() is executed, player === O
    //if player === 0 when function turn() is executed, player === X

//determining winner
  // when all three squares belonging to an array I've put in getWinner all evelaute to the same value (x, o), th eplayer behind that value wins; the game is over.
  //USED TO BE when all three squares belonging to a class all evaluate to the same value (x, o), the player behind that value WINS; that game is over.
    //else if squares_filled = 9, it's a tie
      //create a squares-filled counter, added to w each click of a square.

//telling us about winner
//storing a win in the scoreboard
//disabling the board
//resetting the board




//---------------
//STARTING IT UP
//only when we refresh
var xWinCount = 0;
var oWinCount = 0;
var tieCount = 0;

//when we press start these are things that are/become true
var playerX = 'X';
var playerO = 'O';
var turn === 0;
var player = {playerX, playerO};

$('start-button').click(function {
var winner = '';
};




//---------------
//SETTING UP SQUARES
//and this is what the squares look like

var empty = '';
var board = [[empty, empty, empty, empty, empty, empty, empty, empty, empty]];

//wait should I make three arrays, one w starter empty and one for each player that collects each player's moves? like this?
// var mergeConfig = function mergeConfig (hash, otherHash) {
//     var result = {};

//     for (var key in hash) {
//         if( hash.hasOwnProperty( key ) ) {
//             result[key] = hash[key];
//         }
//     }

//     for (var otherKey in otherHash) {
//         if( otherHash.hasOwnProperty( otherKey ) ) {
//             result[otherKey] = otherHash[otherKey];
//         }
//     }




//---------------
//MESSAGES
//this is how things get communicated to the players
var msg = function(message) {
    $('.message').text(message);
  };




//---------------
//TURNS
//How can I use .one to make sure things haven't been assigned yet? Or should I just make an if statement like 'if this spot is still vacant, you can assign a value to it, else you can't'
var newGame = function() {}
  // if winner hasn't been determined yet, like if(winner = ''){
  $('square').one('click', function(event){
    if (turn === 0) {
      $(this).html('X')
      turn = 1;
      moves++
      msg("O's turn!");
    } else if {
      $(this).html('O');g
      turn = 0;
      moves++
      msg("X's turn!");
    }
  });

  $('#board').on('click', function(event){
    if (player === playerX){
      //console.log("The target of the click event was ", event.target);
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).data('square');
      squares[squareClickedId] = 'X';
      $(squareClickedOn).html('X');
    }
    if (player === playerO) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).data('square');
      squares[squareClickedId] = 'X';
      $(squareClickedOn).html('X');
    }
 });

//do we not need to tell it to switch users elsewhere? Would that be easier? Like
//determining player/turn
  // var switchTurns = function() {
  //   if (player === X){
  //     player = O;
  //   } else {
  //     player = X;
  //   };
  //   msg(player + "'s turn!");
  // };
//and this is how someone wins




//---------------
//WINNING
var getRoundWinner function() {

  if (board[[0,1,2]||[3,4,5]||[6,7,8]||[0,3,6]||[1,4,7]||[2,5,8]||[0,4,8]||[2,4,6]] === player){
      var winner = player;
      msg(player + ' won that one! Play again?');

      //how wins get tallied
      if(winner=playerX) {
        xWinCount++
      }
      else if(winner=playerO){
        oWinCount++
      }
    } else if (moves===9){
        tieCount++
        msg("It's a tie! Play again?")
    }
}

//how tallied wins get updated and reported
var scoreUpdate = function(win) {
  $(.'X').text(xWinCount);
  $(.'O').text(oWinCount);
  $(.'tie').text(tieCount);
}



// var addToScore function(val) {
//     var qty = document.getElementById('qty').value;
//     var new_qty = parseInt(qty,10) + val;

//     if (new_qty < 0) {
//         new_qty = 0;
//     }

//     document.getElementById('qty').value = new_qty;
//     return new_qty;
// }




$(document).ready(function() {
  newGame();
})

}






