/*function sqr(number) {
    return number*number 
}

var arrnum = [1,2,3,4,5,6,7,8,9]
var result = arrnum.map(sqr)
console.log(result)



function cube(num) {
    return num*num*num
    
}

var arrcube = [1,2,3,4,5,6,7,8,9,]
let result = arrcube.map(cube)
console.log("cube os 1 to 9 numbers " +result)
*/

// filter 

/*
function even(num){
    isEven = false
    if(num%2==0){
        isEven=true
    }
    return isEven
}
 var arr1 = [1,2,3,4,5,6,7,8,9]
 console.log(arr1.filter(even))
 */

 function age(num){
     isRight = false
     if(num >= 18){
         isRight = true
         
     }
     return isRight
 }
 let number = [15,25,32,18,20]
 console.log(number.filter(age))
 console.log("this is right age of voating :" +isRight)