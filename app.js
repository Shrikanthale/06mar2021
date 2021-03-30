/*var http = require("http")
function myfun(request,response){
     console.log("my got started here")
     response.writeHead(200,{"content-type" : "text\plain"})
     response.write("hello world")
     response.end()
}
http.createServer(myfun).listen(1998)
*/

/*var http =require("http")
function count(request,response){
    console.log("creating app")
    response.writeHead(200,{"content-type":"text\plain"})
    response.write("1 ,2 , 3 , 4 , 5")
}
http.createServer(count).listen(1198)
*/
var http = require("http")
function number(request,response){
    console.log("run our application")
    response.writeHead(200,{"content-type":"text\plain"})
    response.end()
}
http.createServer(number).listen(1111)