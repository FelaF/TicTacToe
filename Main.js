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


function Game(...Players){
    this.PlayerAmount = Players.length 
    let playerlist = ""
    this.Players = function(){
        for(Person in Players){
            playerlist = (`${Players[Person].name} has ${Players[Person].marker}`)
            console.log(playerlist)
        }
    }
    if(this.PlayerAmount == 2){
        console.log(`Game may Begin`)
    }
    else{
        console.log(`Tic Tac Toe requires two players to Begin`)
    }
    this.Players = function(){
        if((Players.length) == 2){
            let Player1 = Players[0]
            let Player2 = Players[1]
            console.log(`${Player1.name} is Player 1 and Player 2 is ${Player2.name}`)
        }

    
    }
    this.LastMove = function(Player.markPosition){

    }
}


const FelaF = new Player("FelaF","X")
const Jimmy = new Player("Jimmy", "O")
const James = new Player("James", "X")

let Game1 = new Game(FelaF,Jimmy)
console.log(Game1.PlayerAmount)
console.log(Game1.Players())
const gameBoard1 = createGameBoard()
console.log(gameBoard1.spotNine)
FelaF.markPosition(gameBoard1, 9)
console.log(gameBoard1.spots)
