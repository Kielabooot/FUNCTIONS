function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function double(num1, num2, callback){
    return 2 * callback(num1, num2);
}

document.write(double(3,7, multiply));