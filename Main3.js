function createGameboard(name){
    let gameboard = [];
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
        choice = Number(prompt(`Where will ${currentPlayer.name} play?`))
        switch(choice){
            case 0:
                gameboard[0] = currentPlayer.marker;
                break;
            case 1:
                gameboard[1] = currentPlayer.marker;
                break;
            case 2:
                gameboard[2] = currentPlayer.marker;
                break;
            case 3:
                gameboard[3] = currentPlayer.marker;
                break;
            case 4:
                gameboard[4] = currentPlayer.marker;
                break;
            case 5:
                gameboard[5] = currentPlayer.marker;
                break;
            case 6:
                gameboard[6] = currentPlayer.marker;
                break;
            case 7:
                gameboard[7] = currentPlayer.marker;
                break
            case 8:
                gameboard[8] = currentPlayer.marker
                break;
        }
        console.log(gameboard[choice])

    }
    return{players, currentPlayer, gameboard, changeCurrentPlayer, getCurrentPlayer, placeMarker}
}
GMB = createGameboard("TicTacToe")
FelaF = createPlayer("FelaF", "X")
Jimmy = createPlayer("Jimmy", "O")
TicTacToe = Game(GMB,FelaF,Jimmy)
TicTacToe.changeCurrentPlayer()
TicTacToe.changeCurrentPlayer()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
TicTacToe.placeMarker()
TicTacToe.changeCurrentPlayer()
console.log(TicTacToe.gameboard)



