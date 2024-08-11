function createGameboard(){
    let gameboard = ["spotZero","spotOne","spotTwo","spotThree","spotFour","spotFive", 
        "spotSix","spotSeven","spotEight"];
    return {gameboard}
}

function createPlayer(name, marker){
    let winningCondtion = "None";
    let marks = []
    return{name, marker, winningCondtion, marks}
}

const Game = (function (gameboard, ...Players){
    let players = Players
    let markers = [Players[0].marker, Players[1].marker]
    let currentPlayer;
    const getCurrentPlayer = () => {
        return currentPlayer
    }
    const changeCurrentPlayer = () => {
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
    }
    const markedSpots = () => {
        let marked = [];
        for(const i in gameboard.gameboard){
            if(gameboard.gameboard[i] == Player.marker){
                marked.push(i)
            }
        }

        if ( (marked.includes('0') && marked.includes('1') && marked.includes('2')) 
            || (marked.includes('3') && marked.includes('4') && marked.includes('5')) 
            || (marked.includes('6') && marked.includes('7') && marked.includes('8'))){
                console.log("Three Across")
                Player.winningCondtion = "Three Across"
            }
        else if( (marked.includes('0') && marked.includes('3') && marked.includes('6')) 
            || (marked.includes('1') && marked.includes('4') && marked.includes('7')) 
            || (marked.includes('2') && marked.includes('5') && marked.includes('8'))){
                console.log("Three Vertical")
                Player.winningCondtion = "Three Vertical"
            }
        else if( (marked.includes('0') && marked.includes('4') && marked.includes('8')) 
            || (marked.includes('2') && marked.includes('4') && marked.includes('6'))){
            console.log("Three Diagonal")
            Player.winningCondtion = "Three Diagonal"
        }
        return marked
    }
    const placeMarker = () => {
        let choice = Number(prompt(`What will ${currentPlayer.name} play?`))
        if(gameboard.gameboard[choice] == markers[0]){
            console.log(`cannot replace marker in same position.`)
            choice = Number(prompt(`(again) What will ${currentPlayer.name} play?`))
        }
        else if(gameboard.gameboard[choice] == markers[1]){
            console.log(`cannot replace marker in same position.`)
            choice = Number(prompt(`(again) What will ${currentPlayer.name} play?`))
        }
        currentPlayer.marks = markedSpots(currentPlayer)
        if (Players[0].winningCondtion == "None" && Players[1].winningCondtion == "None"){
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
    const checkforWinner = () => {
        for(each in Players){
            markedSpots(each)
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
    const resetGame = () => {
        Players[0].marks = []
        Players[1].marks = []
        Players[0].winningCondtion = "None"
        Players[1].winningCondtion = "None"
        currentPlayer = undefined
        console.log(`**NEW GAME OF TIC-TAC-TOE STARTING**`)
    }
    return{players, currentPlayer, gameboard, markers, resetGame, changeCurrentPlayer, getCurrentPlayer, placeMarker, markedSpots, checkforWinner}

})()


const GMB = createGameboard()
const FelaF = createPlayer("FelaF", "X")
const Jimmy = createPlayer("Jimmy", "O")
Game(GMB,FelaF,Jimmy)