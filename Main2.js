function createGameboard(){
    let Board = ["spotZero","spotOne", "spotTwo", "spotThree", "spotFour", 
        "spotFive", "spotSix", "spotSeven","spotEight"]
    return {Board}
}
function createPlayer(name, marker){
    let winningCondtion = ["None"]
    let marks = []
    return{name, marker, winningCondtion, marks}
}
const Game = (function () {
    let Gameboard, Players, currentPlayer, markers;

    const setGame = (Board, ...players) => {
        Gameboard = Board
        Players = players
        return {Gameboard, Players}
    }
    const getGame = () => {
        if (Players.length > 2 || Players.length < 2){
            console.log("Incorrect amount of players for TicTacToe (2). Please setGame again.")
        }
        return {Players, Gameboard}
    }
    const changeCurrentPlayer = () => {}
    const getCurrentPlayer = () => {}
    const placeMarker = () => {}
    const checkMarkers = () => {}
    const checkWinner = () => {}
    const resetGame = () => {
        for (const each in Players){
            Players[each].winningCondtion = ["None"]
            Players[each].marks = []
        }
    
        Gameboard.Board = ["spotZero","spotOne", "spotTwo", "spotThree", "spotFour", 
            "spotFive", "spotSix", "spotSeven","spotEight"]
    }

    return {setGame, Gameboard, Players, getGame}
})();

FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
GB1 = createGameboard()
Game.setGame(GB1,FelaF,Jimmy)
console.log(Game.getGame())

