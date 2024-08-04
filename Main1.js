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
    function changeCurrentPlayer(){
        if(((playerList.length) == 2) && currentPlayer === undefined){
            randomPlayer = (`${Math.floor(Math.random() * 2)}`)
            Players[randomPlayer].changePlaying()
            currentPlayer = Players[randomPlayer].name
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
            currentPlayer = Players;
    }
    }
    function getCurrentPlayer(){
        return currentPlayer;
    }
    return{currentPlayer, changeCurrentPlayer, gameBoard, getCurrentPlayer}
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
