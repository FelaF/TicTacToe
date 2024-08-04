function createGameBoard(){
    let spotOne = []
    let spotTwo = []
    let spotThree = []
    let spotFour = []
    let spotFive = []
    let spotSix = []
    let spotSeven = []
    let spotEight = []
    let spotNine = []
    let spots = [spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight,spotNine]
    return {spots,spotOne,spotTwo,spotThree,spotFour,spotFive,spotSix,spotSeven,spotEight,spotNine}
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.Playing = false
    this.sayMarker = function(){
        console.log(`my marker is ${this.marker}`);
    };
    this.markPosition = function(gameBoard,spot){
        
        switch(spot){
            case 1:
                if((gameBoard.spotOne.length) == 0){
                    gameBoard.spotOne.push(this.marker)
                    
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotOne.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 2:
                if((gameBoard.spotTwo.length) == 0){
                    gameBoard.spotTwo.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotTwo.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 3:
                if((gameBoard.spotThree.length) == 0){
                    gameBoard.spotThree.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotThree.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 4:
                if((gameBoard.spotFour.length) == 0){
                    gameBoard.spotFour.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotFour.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 5:
                if((gameBoard.spotFive.length) == 0){
                    gameBoard.spotFive.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotFive.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 6:
                if((gameBoard.spotSix.length) == 0){
                    gameBoard.spotSix.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotSix.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 7:
                if((gameBoard.spotSeven.length) == 0){
                    gameBoard.spotSeven.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotSeven.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 8:
                if((gameBoard.spotEight.length) == 0){
                    gameBoard.spotEight.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotEight.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
            case 9:
                if((gameBoard.spotNine.length) == 0){
                    gameBoard.spotNine.push(this.marker)
                    console.log(`marking position #${spot} with ${this.marker}`)
                }
                else if((gameBoard.spotNine.length > 0)){
                    console.log(`Cannot mark the same spot twice in Tic Tac Toe`)
                }
                console.log(gameBoard.spots)
                break;
        }

    }
}
function Game(Gameboard, ...Players){
    this.players = Players
    this.currentPlays = 0
    this.Game = Gameboard
    this.currentPlayer = function(){
        randomNumber = (`${Math.floor(Math.random() * 2)}`)
        return Players[randomNumber].name
    }
    while(this.currentPlays < 10){
        ++this.currentPlays
        cheese = this.currentPlayer()
        Play = prompt(`Where shall ${cheese} Play?`)
        cheese.markPosition(this.Game,Play)
    }
   
}

const FelaF = new Player("FelaF","X")
const Jimmy = new Player("Jimmy", "O")
const James = new Player("James", "X")
Gameboard1 = createGameBoard()
FelaF.markPosition(Gameboard1, 7)
console.log(FelaF.name)
Jimmy.markPosition(Gameboard1, 7)
const G1 = new Game(Gameboard1, Jimmy, FelaF)
console.log(G1.currentPlayer())

