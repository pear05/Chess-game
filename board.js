var board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
  })
  
  $('#startBtn').on('click', board.start)
  $('#clearBtn').on('click', board.clear)

  // Get the chess board element
const board = document.querySelector('.board');

// Add a click event listener to the board
board.addEventListener('click', (event) => {
  // Get the square that was clicked
  const square = event.target;

  // Check if the square is empty
  if (square.innerHTML === '') {
    // Move the piece to the empty square
    square.innerHTML = '<img src="chess-piece.png">';
  }
});