const gameTitle = document.querySelector('.gameAnn');
const gameArea = document.querySelectorAll('.gameArea');
let playerNow = 1;
let drawCircle = '<div class="circle"></>'
let drawCross = '<div class="cross">&times;</>'
let winCons = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let gameOver = false;
let playerOneNums = []
let playerTwoNums = []
let winner = 0;
let drawNumbers = []
const resetGame = ()=>{
    gameTitle.innerHTML = 'Start The Game';
    gameOver = false;
    drawNumbers = [];
    playerOneNums = [];
    playerTwoNums = [];
    winner = 0;
    playerNow = 1;
    gameArea.forEach(area=>{
        area.innerHTML = '';
    })
}
const checkIfWin = (allNum, player)=>{
    winCons.forEach(cons=>{
        if(allNum.includes(cons[0]) && allNum.includes(cons[1]) && allNum.includes(cons[2])){
            winner = parseInt(player);
            gameTitle.innerHTML = `Player ${player} Wins`;
            gameOver = true;
            setTimeout(()=>{
                resetGame();
                return
            },5000);
        }
    })
}
gameArea.forEach(area=>{
    area.addEventListener('click',e =>{
      if(!gameOver && drawNumbers.length <= 9){
        if(!drawNumbers.includes(parseInt(e.target.id))){
            if(playerNow == 1){
                area.innerHTML = drawCircle;
                drawNumbers.push(parseInt(e.target.id));
                playerOneNums.push(parseInt(e.target.id));
                playerNow = 2;
                if(playerOneNums.length > 2){
                    checkIfWin(playerOneNums, 1)
                }
            }else{
                area.innerHTML = drawCross;
                drawNumbers.push(parseInt(e.target.id));
                playerTwoNums.push(parseInt(e.target.id));
                if(playerTwoNums.length > 2){
                    checkIfWin(playerTwoNums, 2)
                }
                playerNow = 1;
            }
        }
        
    }
    if(drawNumbers.length > 8 && !gameOver && winner == 0){
        gameOver = true;
        if(gameOver && winner == 0){
            gameTitle.innerHTML = 'Draw Game';
            setTimeout(()=>{
                resetGame();
            }, 5000)
        }
    }
    })
})