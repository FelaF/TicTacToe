function createPlayer(name, marker){
    let playing = false
    function changePlaying(){
        playing = !playing;
    }
    function getPlaying(){
        return playing;
    }
    


    return{name, marker, playing, changePlaying, getPlaying}

}
function createGameBoard(){
    let spotZero = [];
    let spotOne = [];
    let spotTwo = [];
    let spotThree = [];
    let spotFour = [];
    let spotFive = [];
    let spotSix = [];
    let spotSeven = [];
    let spotEight = [];
    let spots = [spotZero,spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight];
    let filledSpots = []
    return {spots,filledSpots,spotZero,spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight};
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
        let choice = Number(prompt(`Where will ${currentPlayer.name} play?`))
        console.log(currentPlayer.marker)
        console.log(gameBoard.spots.length)
        switch(choice){
            case 0:
                if((gameBoard.spotZero.length) == 0){
                    gameBoard.spotZero.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotZero.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 1:
                if((gameBoard.spotOne.length) == 0){
                    gameBoard.spotOne.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotOne.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 2:
                if((gameBoard.spotTwo.length) == 0){
                    gameBoard.spotTwo.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotTwo.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 3:
                if((gameBoard.spotThree.length) == 0){
                    gameBoard.spotThree.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotThree.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 4:
                if((gameBoard.spotFour.length) == 0){
                    gameBoard.spotFour.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotFour.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 5:
                if((gameBoard.spotFive.length) == 0){
                    gameBoard.spotFive.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotFive.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 6:
                if((gameBoard.spotSix.length) == 0){
                    gameBoard.spotSix.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotSix.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 7:
                if((gameBoard.spotSeven.length) == 0){
                    gameBoard.spotSeven.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotSeven.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 8:
                if((gameBoard.spotEight.length) == 0){
                    gameBoard.spotEight.push(currentPlayer.marker)
                    console.log(`marking position #${choice} with ${currentPlayer.marker}`)
                }
                else if((gameBoard.spotEight.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
    }
    }
    function hasTheseSpots(Player){
        let Spotlist = gameBoard.spots.filter((spot) => spot[0] == Player.marker)
        return Spotlist
    }
    return{currentPlayer, changeCurrentPlayer, gameBoard, getCurrentPlayer, placeMarker, hasTheseSpots}
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
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
console.log(TicTacToe.hasTheseSpots(FelaF))
