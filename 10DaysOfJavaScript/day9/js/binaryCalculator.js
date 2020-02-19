const zeroButton = document.getElementById('btn0');
const oneButton = document.getElementById('btn1');
const clrButton = document.getElementById('btnClr');
const eqlButton = document.getElementById('btnEql');
const sumButton = document.getElementById('btnSum');
const subButton = document.getElementById('btnSub');
const mulButton = document.getElementById('btnMul');
const divButton = document.getElementById('btnDiv');
const field = document.getElementById('res');

[zeroButton, oneButton, sumButton, subButton, mulButton, divButton].forEach(button => {
  button.addEventListener('click', ()=> {
    field.innerHTML+=button.innerHTML;
  });
}); 

clrButton.addEventListener('click', () => {
  field.innerHTML = '';
});

eqlButton.addEventListener('click', () => {
  let operands = ['+', '-', '/', '*'];
  let operandCalc;
  operands.forEach(operand => {
    let regExp = new RegExp(`\\${operand}`);
    if (regExp.test(field.innerHTML)){
      operandCalc = operand;
    }
  });
  
  let [num1Base2, num2Base2] = field.innerHTML.split(`${operandCalc}`);
  num1Base10 = Number(parseInt(num1Base2, 2).toString(10));
  num2Base10 = Number(parseInt(num2Base2, 2).toString(10));
  let base10Str = `${num1Base10}${operandCalc}${num2Base10}`;
  let base10Result = eval(base10Str);
  field.innerHTML = parseInt(base10Result, 10).toString(2);
});
