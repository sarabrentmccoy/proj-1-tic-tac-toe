

var xWinCount = 0;
var oWinCount = 0;
var tieCount = 0;
var playerX = 'X';
var playerO = 'O';
var player = 'X';
var moves = 0;
var xMoves = 0;
var oMoves = 0;
var turn = 0;


var empty = '';
var board = [empty, empty, empty, empty, empty, empty, empty, empty, empty];


//MESSAGES
//this is how things get communicated to the players
var msg = function(message) {
    $('.message').text(message);
  };


var switchTurns = function() {
    if (turn === 0) {
      //$(this).html('X')
      turn = 1;
      player = playerO;
      msg("O's turn!");
      return xMoves++;
    } else if (turn === 1) {
      //$(this).html('O');
      turn = 0;
      player = playerX;
      msg("X's turn!");
      return oMoves++;
    }
  };


  var resetBoard = function resetBoard() {
  $('#board div').each(function(){
    $(this).html('');
  });
  board.forEach(function(square, index, array){
      array[index] = '';
  });
  moves = 0;
  xMoves = 0;
  oMoves = 0;
  switchTurns();
};

$('.start-button').on('click', resetBoard);

var checkTie = function(square, index, array) {
  if (board.every(!empty){
    return false;
  } else {
    msg("Cat's game!")
    return 'tie';
    }
  }


  $('#board').on('click', function(event){
    if (player === playerX) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerX;
      xMoves++;
      $(squareClickedOn).html(playerX);
    }
    if (player === playerO) {
      var squareClickedOn = event.target;
      var squareClickedId = $(squareClickedOn).attr('id');
      board[squareClickedId] = playerO;
      oMoves++;
      $(squareClickedOn).html(playerO);
    }
    if (!someoneWins()) {
      checkTie();
      switchTurns();
    }
 });


//---------------
// WINNING

 var totalMoves = function() {
    moves = xMoves + oMoves;
    return moves;
  }

// var notEmpty(element, index, array){
//   return element != '';
// }

var someoneWins = function() {
    if (board[0] === board[1] && board[1] === board[2] && board[2] === playerX
      ||board[3] === board[4] && board[4] === board[5] && board[5] === playerX
      ||board[6] === board[7] && board[7] === board[8] && board[8] === playerX
      ||board[0] === board[3] && board[3] === board[6] && board[6] === playerX
      ||board[1] === board[4] && board[4] === board[7] && board[7] === playerX
      ||board[2] === board[5] && board[5] === board[8] && board[8] === playerX
      ||board[0] === board[4] && board[4] === board[8] && board[8] === playerX
      ||board[2] === board[4] && board[4] === board[6] && board[6] === playerX) {
      var winner = playerX;
      msg(winner + ' won that one! Play again?');
      return winner;
      resetBoard();
    } else if (board[0] === board[1] && board[1] === board[2] && board[2] === playerO
      ||board[3] === board[4] && board[4] === board[5] && board[5] === playerO
      ||board[6] === board[7] && board[7] === board[8] && board[8] === playerO
      ||board[0] === board[3] && board[3] === board[6] && board[6] === playerO
      ||board[1] === board[4] && board[4] === board[7] && board[7] === playerO
      ||board[2] === board[5] && board[5] === board[8] && board[8] === playerO
      ||board[0] === board[4] && board[4] === board[8] && board[8] === playerO
      ||board[2] === board[4] && board[4] === board[6] && board[6] === playerO) {
      var winner = playerO;
      msg(winner + ' won that one! Play again?');
      return winner;
      resetBoard();
    // } else if (totalMoves === 9) {
    //   msg("It's a tie!")
    //   return 'tie';
    //   resetBoard();
    } else if (moves === 9) {
      tieGame();
    }
      else {
      return null;
    }

  }

//how wins get tallied
var countingWins = function() {
    if (winner === playerX) {
      xWinCount++;

    } else if (winner === playerO) {
      oWinCount++;

    } else if (moves === 9) {
      tieCount++;

      msg("It's a tie! Play again?");
    }
};

//how tallied wins get updated and reported
var scoreUpdate = function(win) {
  document.getElementById('oScore').html = oWinCount;
  document.getElementById('xScore').html = xWinCount;

  // $('#xScore').text(xWinCount);
  // $('#oScore').text(oWinCount);
  // $('#tieScore').text(tieCount);
};

scoreUpdate();

$(document).ready(function() {
  resetBoard();
})
