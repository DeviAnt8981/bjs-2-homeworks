"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1, x2);
  }
  return arr;
}

let diskriminant = solveEquation(2, 9, 2);
console.log(diskriminant);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return "Ошибка ввода. Все значения должны быть числами.";
  }
  percent = percent / 100; 
  let bodyCredit = amount - contribution;
  let monthlyInterestRate = percent / 12;
  let monthlyPayment = bodyCredit * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalPayment = monthlyPayment * countMonths;
  return Math.round(totalPayment * 100) / 100;
}

let res = calculateTotalMortgage(10, 1000, 50000, 12);
console.log(res);