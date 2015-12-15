
var playerX = 'X';
var playerO = 'O';
var player = 'X';
var moves = 0;
var turn = 0;


var empty = '';
var board = [empty, empty, empty, empty, empty, empty, empty, empty, empty];


//MESSAGES
//this is how things get communicated to the players
var msg = function(message) {
    $('#message').text(message);
};


var resetBoard = function resetBoard() {
  $('#board div').each(function(){
    $(this).html('');
  });
  board.forEach(function(square, index, array){
      array[index] = '';
  });
  moves = 0;
  switchTurns();
};

$('.start-button').on('click', resetBoard);


var switchTurns = function() {
    if (turn === 0) {
      turn = 1;
      player = playerO;
      msg("O's turn!");
    } else if (turn === 1) {
      turn = 0;
      player = playerX;
      msg("X's turn!");
    }
};

// var checkTie = function(square, index, array) {
//   if (board.every(!empty){
//     return false;
//   } else {
//     msg("Cat's game!")
//     return 'tie';
//     }
//   }


$('#board').on('click', function(event){
    if (player === playerX) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerX;
      $(squareClickedOn).html(playerX);
      switchTurns();
      someoneWins();
    } else if (player === playerO) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerO;
      $(squareClickedOn).html(playerO);
      switchTurns();
      someoneWins();
      
    };
    if (moves < 8) {
      moves++;
    } else {
      msg("TIE!")
    }
    console.log(moves);
});


//---------------
// WINNING

// var notEmpty(element, index, array){
//   return element != '';
// }

var someoneWins = function() {
  if ((board[0] === board[1] && board[1] === board[2] && board[2] === playerX)
      ||(board[3] === board[4] && board[4] === board[5] && board[5] === playerX)
      ||(board[6] === board[7] && board[7] === board[8] && board[8] === playerX)
      ||(board[0] === board[3] && board[3] === board[6] && board[6] === playerX)
      ||(board[1] === board[4] && board[4] === board[7] && board[7] === playerX)
      ||(board[2] === board[5] && board[5] === board[8] && board[8] === playerX)
      ||(board[0] === board[4] && board[4] === board[8] && board[8] === playerX)
      ||(board[2] === board[4] && board[4] === board[6] && board[6] === playerX)) {
      var winner = playerX;
      console.log("winner = X");
      resetBoard();
      msg("X WON!");
      return true;

  } else if ((board[0] === board[1] && board[1] === board[2] && board[2] === playerO)
      ||(board[3] === board[4] && board[4] === board[5] && board[5] === playerO)
      ||(board[6] === board[7] && board[7] === board[8] && board[8] === playerO)
      ||(board[0] === board[3] && board[3] === board[6] && board[6] === playerO)
      ||(board[1] === board[4] && board[4] === board[7] && board[7] === playerO)
      ||(board[2] === board[5] && board[5] === board[8] && board[8] === playerO)
      ||(board[0] === board[4] && board[4] === board[8] && board[8] === playerO)
      ||(board[2] === board[4] && board[4] === board[6] && board[6] === playerO)) {
      var winner = playerO;
      console.log("winner = O");
      resetBoard();
      msg("O WON!");
      return true;
  // } else if (){
  //     resetBoard();
  //     msg("TIE!");
  //     return true;
  } else {
    return false;
  };
    // for(var index = 0; index < 3; index++) {
    //   board.eq(3*index).text() === board.eq(3*index + 1).text() && board.eq(3*index).text() === board.eq(3*index +2) && board.eq(3*index).text() === player && board.eq(3*index).text() !== '') {
    //   return true;
    // };
};
// var tieGame = function() {
//   if (moves === 9 && someoneWins === false){
//       resetBoard();
//       msg("It's a tie!");
//       console.log("TIE!")
      
//       return true;
//   } else {
//       return false;
//   };

// };

// var checkForWinner = function() {
//   if someoneWins() {
//     resetBoard();
//     return winner = player;
//   };
// };

// var addWins = function() {
//   checkForWinner();
//   if (winner === playerX) {
//     return xWinCount++;
//   }
//   else if (winner === playerO) {
//     return oWinCount++;
//   }
//   else {
//     return null;
//   };
// }


    

//how wins get tallied
// var countingWins = function() {
//     if (winner === playerX) {
//       xWinCount++;

//     } else if (winner === playerO) {
//       oWinCount++;

//     } else if (moves === 9) {
//       tieCount++;

//       msg("It's a tie! Play again?");
//     }
// };

//how tallied wins get updated and reported
// var scoreUpdate = function(win) {
//   document.getElementById('oScore').html = oWinCount;
//   document.getElementById('xScore').html = xWinCount;

  // $('#xScore').text(xWinCount);
  // $('#oScore').text(oWinCount);
  // $('#tieScore').text(tieCount);}


$(document).ready(function() {
  resetBoard();
});
