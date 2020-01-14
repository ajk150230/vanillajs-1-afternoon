// var xPositions = [];

// function play(){
//     let playerX = 'X'
//     document.getElementById(player).innerHTML += playerX
    // xPositions.push(player)
    // xPositions.sort();
    // console.log(xPositions)
    // return xPositions
    
// }
// console.log(xPositions)
var board = [];

function play (positionID)
{
    
    let playerSpan = document.getElementById( 'player' )
    let clickedElement = document.getElementById( positionID )
    if (playerSpan.innerText === 'X')
    { 
        playerSpan.innerText = 'O'
        clickedElement.innerText ='X'
        board[positionID] = 'X'
    }
    else
    {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[positionID] = 'O'
    }

const topleft = board[0]; 
const topcenter = board[1];
const topright = board[2];
const middleleft = board[3];
const middlecenter = board[4];
const middleright = board[5];
const bottomleft = board[6];
const bottomcenter = board[7];
const bottomright = board[8];

if (topleft !== undefined && topleft === topcenter && topleft === topright) {
    alert(`${topleft} is the winner`);
    return;
  }
if (topleft !== undefined && topleft === middleleft && topleft === bottomleft) {
    alert(`${topleft} is the winner`);
    return;
  }
if (topleft !== undefined && topleft === middlecenter && topleft === bottomright) {
    alert(`${topleft} is the winner`);
    return;
  }
if (middleleft !== undefined && middleleft === middlecenter && middleleft === middleright) {
    alert(`${middleleft} is the winner`);
    return;
  }
if (bottomleft !== undefined && bottomleft === bottomcenter && bottomleft === bottomright) {
    alert(`${bottomleft} is the winner`);
    return;
  }
if (topcenter !== undefined && topcenter === middlecenter && topcenter === bottomcenter) {
    alert(`${topcenter}  is the winner`);
    return;
  }
if (topright !== undefined && topright === middleright && topright === bottomright) {
    alert(`${topright} is the winner`);
    return;
  }
if (bottomleft !== undefined && bottomleft === middlecenter && bottomleft === topright) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("What a TIE!!!!, Cat's game");
  }
}


