function createGameboard(){
    let gameboard = ["spotZero","spotOne","spotTwo","spotThree","spotFour","spotFive", 
        "spotSix","spotSeven","spotEight"];
    return {gameboard}
}

function createPlayer(name, marker){
    return{name, marker}
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
        switch(choice){
            case 0:
                gameboard.gameboard[0] = currentPlayer.marker
                break;
            case 1:
                gameboard.gameboard[1] = currentPlayer.marker
                break;
            case 2:
                gameboard.gameboard[2] = currentPlayer.marker
                break;
            case 3:
                gameboard.gameboard[3] = currentPlayer.marker
                break;
            case 4:
                gameboard.gameboard[4] = currentPlayer.marker
                break;
            case 5:
                gameboard.gameboard[5] = currentPlayer.marker
                break;
            case 6:
                gameboard.gameboard[6] = currentPlayer.marker
                break;
            case 7:
                gameboard.gameboard[7] = currentPlayer.marker
                break;
            case 8:
                gameboard.gameboard[8] = currentPlayer.marker

        }
        }

    function markedSpots(Player){
        let marked = [];
        for(const i in gameboard.gameboard){
            if(gameboard.gameboard[i] == Player.marker){
                marked.push(i)
            }
        }
        marked = Array(marked)
        switch(marked){
            case ['0','1','2']:
                console.log(`${Player.name} has marked "three across":${marked}`)
                break;
            case ['2','5','8']:
            case ['1','4','7']:
            case ['0','3','6']:
                console.log(`${Player.name} has marked "three down": ${marked} `)
                break;
            case ['0', '4', '8']:
            case ['2', '4', '6']:
                console.log(`${Player.name} has marked "three along diagonal": ${marked}`)
                break;
        }
        return marked
    }
    return{players, currentPlayer, gameboard, changeCurrentPlayer, getCurrentPlayer, placeMarker, markedSpots}
}
GMB = createGameboard("TicTacToe")
FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
TicTacToe = Game(GMB,FelaF,Jimmy)
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
console.log(TicTacToe.gameboard)
console.log(TicTacToe.markedSpots(FelaF))