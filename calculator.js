function appendnumber(number) {
    document.getElementById('display').value += number;
}
function appendoperator(operator) {
    let display = document.getElementById('display');
    let currentvalue = display.value;
    let lastchar = currentvalue.slice(-1);

    if(['+','-','*','/'].includes(lastchar)) {
        display.value = currentvalue.slice(0,-1) + operator;
    }
    else{
        display.value += operator;
    }
}
function appenddot() {
    let display = document.getElementById('display');
    let currentvalue = display.value;
    console.log(currentvalue+ "current value");

let lastnumber = currentvalue.split(/[\+\-\*\/]/).pop();
console.log((lastnumber+ "last number"));

    if(!lastnumber.includes('.')) {
        display.value += '.';
        console.log(display.value);   
     }
}
function calculate(){
    let display = document.getElementById("display");
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}
function cleardisplay(){
    let display = document.getElementById("display").value =''
}