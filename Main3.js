function createPlayer(name, marker){
    let playing = false
    function changePlaying(){
        playing = !playing;
    }
    function getPlaying(){
        return playing;
    }
    function placeMarker(spot){
        spot.push(marker);
    }
    


    return{name, marker, playing, changePlaying, getPlaying, placeMarker}

}
function createGameBoard(){
    let spotOne = [];
    let spotTwo = [];
    let spotThree = [];
    let spotFour = [];
    let spotFive = [];
    let spotSix = [];
    let spotSeven = [];
    let spotEight = [];
    let spotNine = [];
    let spots = [spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight,spotNine];
    return {spots,spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight,spotNine};
}

function Game(gameBoard, ...Players){
    let playerList = Players
    let currentPlayer;
    let player;
    function changeCurrentPlayer(){
        if(((playerList.length) == 2) && currentPlayer === undefined){
            randomPlayer = (`${Math.floor(Math.random() * 2)}`)
            Players[randomPlayer].changePlaying()
            currentPlayer = Players[randomPlayer]
        }
        else if(playerList.length < 2){
            console.log (`need more players to play`);
        }
        else if(playerList.length > 2){
            console.log(`Too many players`);
        }
        else if(((playerList.length) == 2) && currentPlayer == Players[0]){
            currentPlayer = Players[1];
        }
        else if(((playerList.length) == 2) && currentPlayer == Players[1]){
            currentPlayer = Players[0];

    }
    player = currentPlayer.name
    console.log(`${player}`)
    }
    function getCurrentPlayer(){
        return currentPlayer;
    }
    function placeMarker(){
        choice = prompt(`Where will ${currentPlayer.name} play?`)
        switch(choice){
            case 1:
                if(gameBoard.spotOne.length)
                gameBoard.spotOne.push(currentPlayer.marker)
                console.log(`Adding ${currentPlayer.marker} to spot ${choice}`)
              break;  
            case 2:
                gameBoard.spotTwo.push(c)
                break;
            case 3:
                break;
        }
    }
    return{currentPlayer, changeCurrentPlayer, gameBoard, getCurrentPlayer, placeMarker}
}

const FelaF = createPlayer("FelaF", "X")
console.log(FelaF.playing)
FelaF.changePlaying()
console.log(FelaF.getPlaying())
FelaF.changePlaying()
console.log(FelaF.getPlaying())
const Jimmy = createPlayer("Jimmy", "O")
const GM1 = createGameBoard()
console.log(GM1.spots)
const TicTacToe = Game(GM1,FelaF,Jimmy)
TicTacToe.changeCurrentPlayer()
console.log(TicTacToe.getCurrentPlayer())
TicTacToe.changeCurrentPlayer()
console.log(TicTacToe.getCurrentPlayer())
TicTacToe.changeCurrentPlayer()
console.log(TicTacToe.getCurrentPlayer())