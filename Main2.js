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
        Gameboard = Board;
        Players = players;
        return {Gameboard, Players}
    }
    const getGame = () => {
        if (Players.length > 2 || Players.length < 2){
            console.log("Incorrect amount of players for TicTacToe (2). Please setGame again.");
        }
        return {Players, Gameboard}
    }
    const changeCurrentPlayer = () => {
        if(currentPlayer == undefined){
            randomPlayer = (`${Math.floor(Math.random() * 2)}`);
            currentPlayer = Players[randomPlayer];
        }
        else if (currentPlayer == Players[0]){
            currentPlayer = Players[1];
        }
        else if(currentPlayer == Players[1]){
            currentPlayer = Players[0];
        }
    }

    const getCurrentPlayer = () => {
        return currentPlayer.name
    }

    const placeMarker = () => {
        let choice = Number(prompt(`Which position will ${currentPlayer.name} play?`))
        while(choice > 8 || choice < 0){
            console.log(`cannot play this position. Board plays 0-8`)
            choice = Number(prompt(`(again) Which position will ${currentPlayer.name} play?`))
        }
        if(Gameboard.Board[choice] != Players[1].marker && Gameboard.Board[choice] != Players[0].marker){
            Gameboard.Board[choice] = currentPlayer.marker
        }
        else if (Gameboard.Board[choice] == Players[1].marker || Gameboard.Board[choice] == Players[0].marker){
            console.log("This position has already been played. Try again")
            choice = Number(prompt(`(again) Which position will ${currentPlayer.name} play?`))
        }

        }

    

    const checkMarkers = () => {
        let MarkedBoard = []
        for(const i in Gameboard.Board){
            if(Gameboard.Board[i].length == 1){
                MarkedBoard.push(i + Gameboard.Board[i])
            }
        }
        console.log(MarkedBoard)
        P1 = MarkedBoard.filter((i) => i.includes(Players[1].marker))
        P0 = MarkedBoard.filter((i) => i.includes(Players[0].marker))
        Players[0].marks.push(P0)
        Players[1].marks.push(P1)
        P00 = P0.map((i) => i[0]).join("")
        P11 = P1.map((i) => i[0]).join("")
        list = (P00, P11)
        }
        
    }   

    const checkWinner = () => {}

    const resetGame = () => {
        for (const each in Players){
            Players[each].winningCondtion = ["None"]
            Players[each].marks = []
        }

        Gameboard.Board = ["spotZero","spotOne", "spotTwo", "spotThree", "spotFour", 
            "spotFive", "spotSix", "spotSeven","spotEight"]
    }

    return {setGame, Gameboard, Players, getGame, resetGame, placeMarker, checkMarkers, checkWinner, getCurrentPlayer, changeCurrentPlayer}
})();

FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
GB1 = createGameboard()
Game.setGame(GB1,FelaF,Jimmy)
console.log(Game.getGame())
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.checkMarkers()



