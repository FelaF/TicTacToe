list = ["X","X","X","O","O","O","O"]


for( i in list){
    list[i] = i + list[i]
}

newlist = list.filter((i) => i.includes("O"))
console.log(newlist)

newerlist = newlist.map((x) => x[0])
console.log(newerlist)


number = '012'
numberagain = '0123'
console.log(number.includes(numberagain))