const billInputEl = document.getElementById('bill');
const allButtonTipEl = document.querySelectorAll('.choose-tip_button');
const customTipEl = document.getElementById('choose-tip_custom');
const numberPeopleInput = document.getElementById('people');
const resultTipAmountEl = document.getElementById('resultTipAmount');
const resultTotalEl = document.getElementById('resultTotal');
const resultResetEl = document.getElementById('resultReset');

let tip;
let bill;
let people;

function getBillInput(e) {
  bill = +e.target.value;
  resultTipAmount() ;
}

function getButtonTip(el) {
  el.preventDefault();
  customTipEl.value = "";
  const buttonTarget = el.target;
  const idTip = +buttonTarget.id;

  allButtonTipEl.forEach(button => button.className = 'choose-tip_button');
  if(buttonTarget.className == 'choose-tip_button') {
    buttonTarget.className = 'choose-tip_button active';
  } 

  switch(idTip) {
    case 1:
      tip = 5 / 100;
      break;
    case 2:
      tip = 10 / 100;
      break;
    case 3:
      tip = 15 / 100;
      break;
    case 4:
      tip = 20 / 100;
      break;
    case 5:
      tip = 25 / 100;
      break;
  }
  resultTipAmount();
}

function getTipEl(e) {
  allButtonTipEl.forEach(button => button.className = 'choose-tip_button');
  tip = +e.target.value / 100;
  resultTipAmount();
}

function getNumberPeople(e) {
  people = +e.target.value;
  if(people <= 0) {
    numberPeopleInput.parentElement.classList.add('warn');
  }else {
    numberPeopleInput.parentElement.classList.remove('warn');
  }
  resultTipAmount(); 
}

function resultReset() {
  tip = undefined;
  bill = undefined;
  people = undefined;

  resultTipAmountEl.textContent = "0.00";
  resultTotalEl.textContent = "0.00";
  numberPeopleInput.value = "";
  billInputEl.value = "";
  customTipEl.value = "";
  allButtonTipEl.forEach(button => button.className = 'choose-tip_button');
  numberPeopleInput.parentElement.classList.remove('warn');
}

function calculateTipAmount(bill, tip, people) {
  let resultTipAmount =  (bill * tip) / people;
  if(!isNaN(resultTipAmount) && resultTipAmount !== Infinity) return resultTipAmount.toFixed(2);
}

function calculateTotalTipPerson(bill, tip, people) {
  let resultTotal = ((bill * tip) + bill) / people;
  if(!isNaN(resultTotal) && resultTotal !== Infinity) return resultTotal.toFixed(2);
}

function resultTipAmount() {
  if(bill !== undefined && tip !== undefined && people !== undefined) {
    resultTipAmountEl.textContent = calculateTipAmount(bill, tip, people);
    resultTotalEl.textContent = calculateTotalTipPerson(bill, tip, people);
  }
}

billInputEl.addEventListener("input", getBillInput);
allButtonTipEl.forEach(button => button.addEventListener('click', getButtonTip));
customTipEl.addEventListener('input', getTipEl);
numberPeopleInput.addEventListener('input', getNumberPeople);
resultResetEl.addEventListener('click', resultReset);

window.addEventListener('DOMContentLoaded', resultReset);
