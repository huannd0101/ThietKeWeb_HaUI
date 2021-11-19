import cal from './classCal.js'
var x = document.nhap.a;
var y = document.nhap.b;

var valueX;
var valueY;
x.addEventListener("change", () => {
    if(x.value){
        valueX = parseInt(x.value);
        console.log(valueX);
    }
    
})

y.addEventListener("change", () => {
    if(y.value){
        valueY = parseInt(y.value);
    }
})


var calc = new cal(valueX,valueY);

let tong1 = document.getElementById("tong");

tong1.addEventListener("click",() => {
    calc.log();
});