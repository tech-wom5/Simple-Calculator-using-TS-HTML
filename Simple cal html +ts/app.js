var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var Plus = document.getElementById("Plus");
var Subtract = document.getElementById("Subtract");
var Multiply = document.getElementById("Multiply");
var Divide = document.getElementById("Divide");
var printValue = document.getElementById("output");
function result1() {
    var num3 = parseFloat(num1.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 + num4;
    printValue.textContent = num5.toString();
}
function result2() {
    var num3 = parseFloat(num1.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 - num4;
    printValue.textContent = num5.toString();
}
function result3() {
    var num3 = parseFloat(num1.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 * num4;
    printValue.textContent = num5.toString();
}
function result4() {
    var num3 = parseFloat(num1.value);
    var num4 = parseFloat(num2.value);
    var num5 = num3 / num4;
    printValue.textContent = num5.toString();
}
Plus.addEventListener("click", result1);
Subtract.addEventListener("click", result2);
Multiply.addEventListener("click", result3);
Divide.addEventListener("click", result4);
