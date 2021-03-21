/*function hi(message){
    console.log(message)
    return "hi"
}
var mess=hi("world")
console.log(mess)
*/
 
/*function add(){
    
    var a = 5
    var b = 6
    var c = a + b 
    return c
}
var addition = add()
console.log(addition)
*/
/*
var hi = (m) => {console.log(m+" world")}
hi("HI")
*/
/*
var a=5
var b=6
var c = a+b 
var result = (c) => {console.log("addition of two nums "+c)}
result(c)
*/
/*
var a=5
var b=6
var c = a+b 
var result = c =>console.log("addition of two nums "+c)
result(c)
*/

var sum = (a,b) => {
    var result = a+b 
    return result
}
var result = sum(5,6)
console.log("addition "+result)