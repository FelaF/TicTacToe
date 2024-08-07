function createGameboard(){
    let gameboard = ["spotZero","spotOne","spotTwo","spotThree","spotFour","spotFive", 
        "spotSix","spotSeven","spotEight"];
    return {gameboard}
}

function createPlayer(name, marker){
    let winningCondtion = "None";
    let marks = ""
    return{name, marker, winningCondtion, marks}
}
function Game(gameboard, ...Players){
    let players = Players
    let currentPlayer;
    function changeCurrentPlayer(){
        if(((players.length) == 2) && currentPlayer == undefined){
            randomPlayer = (`${Math.floor(Math.random() * 2)}`);
            currentPlayer = Players[randomPlayer];
        }
        else if(players.length < 2){
            console.log (`need more players to play`);
        }
        else if(players.length > 2){
            console.log(`Too many players`);
        }
        else if(((players.length) == 2) && currentPlayer == Players[0]){
            currentPlayer = Players[1];
        }
        else if(((players.length) == 2) && currentPlayer == Players[1]){
            currentPlayer = Players[0];
        } 
    console.log(currentPlayer.name)
    }
    function getCurrentPlayer(){
        return currentPlayer
    }
    function placeMarker(){
        let choice = Number(prompt(`What will ${currentPlayer.name} play?`))
        if (currentPlayer.winningCondtion == "None"){
            switch(choice){
                case 0:
                    gameboard.gameboard[0] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 0`)
                    break;
                case 1:
                    gameboard.gameboard[1] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 1`)
                    break;
                case 2:
                    gameboard.gameboard[2] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 2`)
                    break;
                case 3:
                    gameboard.gameboard[3] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 3`)
                    break;
                case 4:
                    gameboard.gameboard[4] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 4`)
                    break;
                case 5:
                    gameboard.gameboard[5] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 5`)
                    break;
                case 6:
                    gameboard.gameboard[6] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 6`)
                    break;
                case 7:
                    gameboard.gameboard[7] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 7`)
                    break;
                case 8:
                    gameboard.gameboard[8] = currentPlayer.marker
                    console.log(`${currentPlayer.name} placed ${currentPlayer.marker} at position 8`)
    
            }
        }
        else{
            console.log(`It appears someone has already won. Cannot place anymore markers.`)
        }
        }

    function markedSpots(Player){
        let marked = [];
        for(const i in gameboard.gameboard){
            if(gameboard.gameboard[i] == Player.marker){
                marked.push(i)
            }
        }
        switch(marked.join('')){
            case '012':
            case '345':
            case '678':
                console.log(`three across`)
                Player.winningCondtion = "Three Across"
                break;
            case '036':
            case '147':
            case '258':
                console.log(`three down`)
                Player.winningCondtion = "Three Vertical"
                break;
            case '048':
            case '246':
                console.log(`three along the diagonal`)
                Player.winningCondtion = "Three Diagonal"
        }
        return marked
    }
    function checkforWinner(){
        for(each in Players){
            each.marks = markedSpots(each)
        }
        if(Players[0].winningCondtion != "None" && Players[1].winningCondtion != "None"){
            console.log(`two winners`)
        }
        else if(Players[0].winningCondtion != "None"){
            console.log(`Winner: ${Players[0].name} ${Players[0].winningCondtion}`)
        }
        else if(Players[1].winningCondtion != "None"){
            console.log(`Winner: ${Players[1].name} ${Players[1].winningCondtion}`)
        }
    }
    return{players, currentPlayer, gameboard, changeCurrentPlayer, getCurrentPlayer, placeMarker, markedSpots, checkforWinner}
}
GMB = createGameboard("TicTacToe")
FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
TicTacToe = Game(GMB,FelaF,Jimmy)
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.checkforWinner()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.checkforWinner()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.checkforWinner()
console.log(TicTacToe.gameboard)
console.log(TicTacToe.markedSpots(FelaF))
TicTacToe.checkforWinner(FelaF)