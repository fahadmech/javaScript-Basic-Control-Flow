//version 1
//var answer = prompt("Are We There Yet?"); 
//while(answer !=="yes" && answer !=="yeah") {
//    var answer = prompt("Are We There Yet?");
//}
//alert("yay.. we made it!!!");

//version 2
var answer = prompt("Are We There Yet?"); 
while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are We There Yet?");
}
alert("yay.. we made it!!!");

