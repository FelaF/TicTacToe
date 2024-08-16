list = ["X","X","X","O","O","O","O"]


for( i in list){
    list[i] = i + list[i]
}

let newlist = list.filter((i) => i.includes("O"))
console.log(newlist)

let newerlist = newlist.map((x) => x[0])
console.log(newerlist)


let number = '012'
let numberagain = '0123'
console.log(number.includes(numberagain))


let opposite = true
let real = !opposite


let Jamison = ["A", "X", "E"]
let James = !Jamison.includes("B")
console.log(James)