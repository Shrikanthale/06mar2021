/*function isEven(x){
    if(x%2==0){
        console.log("it is even")
    }
    else{
        console.log("it is odd")
    }
}

function printarr(arr){
    console.log(arr)
}
module.exports.isEven=isEven
module.exports.printarr=printarr


function add(a,b){
    var c = a+b
    console.log(c)
}

var add1 = (x,y) => {
    var z =x+y
    console.log(z)
}
//add1()
module.exports.add=add
module.exports.add1=add1
*/

var additon = (a,b) => {
    var c = a+b
    console.log("add : "+c)
}

var subtraction = (x,y) => {
    var z = x-y
    console.log("sub : "+z)
}

var multiplication = (p,q) => {
    var r = p*q
    console.log("mul : "+r)
}

var division = (j,k) => {
    var l = j/k
    console.log("div : "+l)
} 

module.exports.additon=additon
module.exports.subtraction=subtraction
module.exports.multiplication=multiplication
module.exports.division=division