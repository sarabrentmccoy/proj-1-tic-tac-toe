//beginning of starter code
function cells(key) {
    switch(key) {
        case 'a0': return null;
        case 'b1': return null;
        case 'c2': return null;
        case 'd3': return null;
        case 'e4': return null;
        case 'f5': return null;
        case 'g6': return null;
        case 'h7': return null;
        case 'i8': return null;
        default : return null;
    }
}

function getWinner() {
    if (isWinner('x')) {
      return 'x';
    }
    if (isWinner('o')) {
      return 'o';
    }
    return null;
}

function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}
function winsRow(player) {
    return allThree(player, cells('0'), cells('1'), cells('2')) || allThree(player, cells('3'), cells('4'), cells('5')) ||allThree(player, cells('6'), cells('7'), cells('8'));
}
function winsColumn(player) {
    return allThree(player, cells('0'), cells('3'), cells('6')) ||
           allThree(player, cells('1'), cells('4'), cells('7')) ||
           allThree(player, cells('2'), cells('5'), cells('8'));
}
function winsDiagonal(player) {
    return allThree(player, cells('0'), cells('4'), cells('8')) ||
           allThree(player, cells('2'), cells('4'), cells('6'));
}
//end of starter code

//fresh match
var turn === 0;
var moves = 0;

//saying things
var msg = function(message) {
    $('.message').text(message);
  };

//making moves
var makingMoves = function(player) {
  for(i = 0; moves <= 9; i++){
  if (getWinner = null; goodMove(cell()) === true; turn === 0){
      $(this).html('x');
      turn = 1;
      msg("O's turn!");
      return moves;
  };
  else if(getWinner = null; goodMove(cell()) === true; turn === 1){
      $(this).html('o');
      turn = 0;
      msg("X's turn!");
      return moves;
  };
  else if(moves = 9){
    msg("Cat's game!")
  }
}


//when the document has been processed by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){
 // which squuares have been clicked on
 var squares = ['','', '','', '','', '','', '']

 //then get the button telling user to start playing
 //CSS selector # look for id
 $('#main-button').html('Click to Play!');

 $('#board').on('click', function(event){
   //when I do a click event with element with id = board
   //
   console.log("The target of the click event was ", event.target);
   var squareClickedOn = event.target;
   console.log("dkjfdkj");
   var squareClickedId = $(squareClickedOn).data('square');
    console.log("id is ", squareClickedId);
    squares[squareClickedId] = "X";
    $(squareClickedOn).html("X");
 });



