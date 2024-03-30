const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const Plus = document.getElementById("Plus") as HTMLButtonElement;
const Subtract = document.getElementById("Subtract") as HTMLButtonElement;
const Multiply = document.getElementById("Multiply") as HTMLButtonElement;
const Divide = document.getElementById("Divide") as HTMLButtonElement;
const printValue = document.getElementById("output") as HTMLOutputElement;

function result1():void{
const num3 = parseFloat(num1.value);
const num4 = parseFloat(num2.value);
const num5 = num3 + num4;
printValue.textContent = num5.toString();
}

function result2():void{
const num3 = parseFloat(num1.value);
 const num4 = parseFloat(num2.value);
 const num5 = num3 - num4;
printValue.textContent = num5.toString();
}

 function result3():void{
 const num3 = parseFloat(num1.value);
const num4 = parseFloat(num2.value);
 const num5 = num3 * num4;
 printValue.textContent = num5.toString();
 }

 function result4():void{
const num3 = parseFloat(num1.value);
 const num4 = parseFloat(num2.value);
 const num5 = num3  / num4;
 printValue.textContent = num5.toString();
 }


Plus .addEventListener("click",result1);
Subtract .addEventListener("click",result2);
Multiply. addEventListener("click",result3);
 Divide.addEventListener("click",result4);
            
            
        
        
    
    





