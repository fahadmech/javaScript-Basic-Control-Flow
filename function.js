//function isEven(num) {
//    if(num % 2 === 0) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}

function isEven(num) {
 return num % 2 === 0;
}

function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

function kebabtosnake(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}

//var num = 9;
//function doMath() {
//    num+=1;
//    if(num % 2 == 0) {
//        return true;
//    } else{
//        return false;
//    }
//}
//num += 2;
//doMath()