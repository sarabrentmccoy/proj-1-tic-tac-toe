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
//only when we refresh -- do these go in doc ready?
var xWinCount = 0;
var oWinCount = 0;
var tieCount = 0;

//when we press start these are things that are/become true
var playerX = 'X';
var playerO = 'O';
var player = 'X';
var moves = 0;
var turn = 0;




//---------------
//SETTING UP SQUARES
//and this is what the squares look like

var empty = '';
var board = [empty, empty, empty, empty, empty, empty, empty, empty, empty];

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

var resetBoard = function resetBoard() {
  $('#board div').each(function(){
    $(this).html('');
  });
  board.forEach(function(square, index, array){
      array[index] = '';
    });
};

$('.start-button').on('click', resetBoard);





//---------------
//MESSAGES
//this is how things get communicated to the players
var msg = function(message) {
    $('.message').text(message);
  };




//---------------
//TURNS
//do i need this?


//How can I use .one to make sure things haven't been assigned yet? Or should I just make an if statement like 'if this spot is still vacant, you can assign a value to it, else you can't'

  // if winner hasn't been determined yet, like if(winner = ''){
var switchTurns = function() {
    if (turn === 0) {
      //$(this).html('X')
      turn = 1;
      moves++
      player = playerO;
      msg("O's turn!");
    } else if (turn === 1) {
      //$(this).html('O');
      turn = 0;
      moves++
      player = playerX;
      msg("X's turn!");
    }
  };

  $('#board').on('click', function(event){
    if (player === playerX) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerX;
      $(squareClickedOn).html(playerX);
    }
    if (player === playerO) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerO;
      $(squareClickedOn).html(playerO);
    }
    if (!someoneWins()) {
      switchTurns();
    };
 });





//---------------
// WINNING

var someoneWins = function() {
    if (board[0] === board[1] && board[1] === board[2] && board[2] === player
      ||board[3] === board[4] && board[4] === board[5] && board[5] === player
      ||board[6] === board[7] && board[7] === board[8] && board[8] === player
      ||board[0] === board[3] && board[3] === board[6] && board[6] === player
      ||board[1] === board[4] && board[4] === board[7] && board[7] === player
      ||board[2] === board[5] && board[5] === board[8] && board[8] === player
      ||board[0] === board[4] && board[4] === board[8] && board[8] === player
      ||board[2] === board[4] && board[4] === board[6] && board[6] === player) {
      var winner = player;
      msg(player + ' won that one! Play again?');
      return winner;
    } else if (moves === 9) {
      msg("It's a tie!")
      return 'tie';
    } else {
      return null;
    }
    newGame();
  }

var getRoundWinner = function() {



      //how wins get tallied
  var countingWins = function() {
    if (winner = playerX) {
      xWinCount++
    } else if (winner=playerO) {
      oWinCount++
    } else if (moves === 9) {
      tieCount++
      msg("It's a tie! Play again?")
    }
};

//how tallied wins get updated and reported
var scoreUpdate = function(win) {
  $('.X').text(xWinCount);
  $('.O').text(oWinCount);
  $('.tie').text(tieCount);
};



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






