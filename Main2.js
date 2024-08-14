function createGameboard(){
    let Board = ["spotZero","spotOne", "spotTwo", "spotThree", "spotFour", 
        "spotFive", "spotSix", "spotSeven","spotEight"]
    return {Board}
}
function createPlayer(name, marker){
    let winningCondtion = "None"
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
        let MarkerAmount = 0
        let choice = Number(prompt(`Which position will ${currentPlayer.name} play?`))
        while(choice > 8 || choice < 0){
            console.log(`cannot play this position. Board plays 0-8`)
            choice = Number(prompt(`(again) Which position will ${currentPlayer.name} play?`))
        }
        if(Gameboard.Board[choice] != Players[1].marker && Gameboard.Board[choice] != Players[0].marker){
            Gameboard.Board[choice] = currentPlayer.marker
            MarkerAmount ++ 
        }
        else if (Gameboard.Board[choice] == Players[1].marker || Gameboard.Board[choice] == Players[0].marker){
            console.log("This position has already been played. Try again")
            choice = Number(prompt(`(again) Which position will ${currentPlayer.name} play?`))
        }
        return{MarkerAmount}

        }
    const getPlayers = () => {
        return Players
    }

    

    const checkMarkers = () => {
        let MarkedBoard = []
        Vertical = ["036","147","258"]
        Diagonal = ["048","246"]
        Horizontal = ["012", "345", "678"]
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
        wincodeP0 = P0.map((i) => i[0]).join("")
        wincodeP1 = P1.map((i) => i[0]).join("")
        wincodes = [String(wincodeP0), String(wincodeP1)]
            if ( (wincodeP0.includes(Vertical[0])) || (wincodeP0.includes(Vertical[1])) || (wincodeP0.includes(Vertical[2]))){
                console.log("Vertical Win!")
                Players[0].winningCondtion = "Vertical"
            }
            else if ( (wincodeP0.includes(Horizontal[0])) || (wincodeP0.includes(Horizontal[1])) || (wincodeP0.includes(Horizontal[2]))){
                console.log("Horizontal Win!")
                Players[0].winningCondtion = "Horizontal"

            }
            else if ( (wincodeP0.includes(Diagonal[0])) || (wincodeP0.includes(Diagonal[1]))){
                console.log("Diagonal Win!")
                Players[0].winningCondtion = "Diagonal"
            }

            if ( (wincodeP1.includes(Vertical[0])) || (wincodeP1.includes(Vertical[1])) || (wincodeP1.includes(Vertical[2]))){
                console.log("Vertical Win!")
                Players[1].winningCondtion = "Vertical"
            }
            else if ( (wincodeP1.includes(Horizontal[0])) || (wincodeP1.includes(Horizontal[1])) || (wincodeP1.includes(Horizontal[2]))){
                console.log("Horizontal Win!")
                Players[1].winningCondtion = "Horizontal"
            }
            else if ( (wincodeP1.includes(Diagonal[0])) || (wincodeP1.includes(Diagonal[1]))){
                console.log("Diagonal Win!")
                Players[1].winningCondtion = "Diagonal"
            }


    
    }

    const checkWinner = () => {
        if( (Players[0].winningCondtion != "None") && (Players[1].winningCondtion != "None")){
            console.log("Tie. No winner")
        }
        else if(Players[0].winningCondtion != "None"){
            console.log(`${Players[0].name} is the Winner with a ${Players[0].winningCondtion} win!`)
        }
        else if(Players[1].winningCondtion != "None"){
            console.log(`${Players[1].name} is the Winner with a ${Players[1].winningCondtion} win!`)
        }
    }
    

    const resetGame = () => {
        for (const each in Players){
            Players[each].winningCondtion = ["None"]
            Players[each].marks = []
        }
        currentPlayer = undefined
        P1 = undefined
        P0 = undefined
        wincodeP0 = undefined
        wincodeP1 = undefined

        Gameboard.Board = ["spotZero","spotOne", "spotTwo", "spotThree", "spotFour", 
            "spotFive", "spotSix", "spotSeven","spotEight"]
        console.log("NEWGAME")
    }

    return {setGame, getPlayers, Gameboard, Players, getGame, resetGame, placeMarker, checkMarkers, checkWinner, getCurrentPlayer, changeCurrentPlayer}
})();

FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
GB1 = createGameboard()
Game.setGame(GB1,FelaF,Jimmy)

/* Game.changeCurrentPlayer()
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
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.changeCurrentPlayer()
Game.placeMarker()
Game.checkMarkers() */

function gameDOM(){
    const boardCells = document.querySelectorAll(".container button")
    const playerCreationButtons = document.querySelectorAll(".Players > button")
    const playerCreation = document.querySelector(".PlayerDialog")
    const Players = document.querySelectorAll("article")
    const confirmBtn = document.querySelector("#Confirm")
    const selectEl = playerCreation.querySelector("select")
    const playerName = playerCreation.querySelector("#PName")
    const PlayerDisplayD = document.getElementById("PNamelabel")

    boardCells.forEach((cell)=>{
        cell.addEventListener("click", ()=>{
            
            console.log(`cell ${cell.id}`);
        })
    })
    playerCreationButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            BID = button.id
            PlayerDisplayD.innerHTML = `What is Player ${button.id}'s name?`
            playerCreation.showModal()
            return BID
        })
    })
    confirmBtn.addEventListener("click", (event)=>{
        event.preventDefault()
        let newplayer = createPlayer(playerName.value, selectEl.value)
        let Player1 = Players[0]
        let Player2 = Players[1]
        Players.forEach(() =>{
            if(BID == 1){
                Player1.innerHTML = `${newplayer.name} has ${newplayer.marker}`
            }
            else if (BID == 2){
                Player2.innerHTML = `${newplayer.name} has ${newplayer.marker}`
            }
        })
        console.log(Player1, Player2)
    })
}
gameDOM()




