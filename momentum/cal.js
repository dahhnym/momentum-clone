// const a = document.getElementById('num1');
// const b = document.getElementById('num2');

// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const divide = document.getElementById('divide');

// plus.addEventListener('click', function(a,b){
//   document.createElement("h3");
//   const h3 = document.querySelector("h3");
//   h3.innerText(a+b);
// });


const calculator = {
  plus : function(a,b){
    return a+b;
  },
  minus : function(a,b){
    return a-b;
  },
  times : function(a,b){
    return a*b;
  },
  divide : function(a,b){
    return a/b;
  },
  power : function(a,b){
    return a**b;
  },
}

const num1 = 6;
const num2 = 3;

const plusResult = calculator.plus(num1,num2);        // 9
const minusResult = calculator.minus(num1,num2);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult,minusResult);
const powerResult = calculator.power(2, plusResult);
console.log("plusResult: "+plusResult);
console.log("minusResult: "+minusResult);
console.log("timesResult: "+timesResult);
console.log("divideResult: "+divideResult);
console.log("powerResult: "+powerResult);


// const myAge = 30;
// function calculateKrAge(age){
//   return age+1;
// }

// const krAge = calculateKrAge(myAge);

// console.log("한국나이: "+krAge);


const age = parseInt(prompt("How old are you?", "ex.15"));

console.log("isNaN: "+isNaN(age));