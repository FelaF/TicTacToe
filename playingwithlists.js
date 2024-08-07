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