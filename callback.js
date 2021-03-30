/*console.log("start")
function login(username,password){
          returndata = function(){
              console.log("return data will published")
              console.log("username: "+username)
              return 
          }
          setTimeout(returndata,1000)
          console.log("password:" +password)
              return "r1"
          
}
var isValidate = login("shisher",356)
console.log(isValidate)
console.log("End")
*/

/*
console.log("plz enter ur username and password" )
function login(username,password){
    returndata = function(){
        console.log("ur password is right "+password)
        return
    }
    setTimeout(returndata,1000)
    console.log("username is correct "+username)
    return "now u will go to password section"

}
var isValidate = login("robin",456)
console.log(isValidate)
console.log("end")
*/

/*
console.log("checking ur all document section")
function personaldeatails(Name,idpassword,hallticketno){
    checkoutdeatils = function(){
        console.log(idpassword)
        return hallticketno
    }
    setTimeout(checkoutdeatils,1000)
        return Name , hallticketno
    
}
var examdeatils = personaldeatails("jack",452,"lo506170")
console.log(examdeatils)
console.log("end")


console.log("start practicing")
function cricket(bat,ball,pitch){
    output = function(){
        console.log(ball)
        console.log(pitch)
    }
    setTimeout(output,1000)
    return bat
}
var kit = cricket(5.4,1.2,29)
console.log(kit)
console.log("end session")
*/
console.log("start g")
var g = 10
console.log("g: "+g)
function login(){
    returndata = function(){
        console.log("in callback function")
        ++g
        console.log("g: "+g)
    }
    setTimeout(returndata,1000)
    //console.log("in settimeout fuc")
    return ++g
}
var result = login()
++g
console.log(result)
console.log(g)
console.log("end g ")