//////////////////////////////
//// Activating strict Mode

'use strict';

///////////////////////////////
//// SELECTING ELEMENTS
const numberInCard = document.querySelector('.number');
const nameInCard = document.querySelector('.name');
const expiryMonthInCard = document.querySelector('.expiry__month');
const expiryYearInCard = document.querySelector('.expiry__year');
const cvcInCard = document.querySelector('.cvc');

const inputName = document.querySelector('.input__name');
const inputNumber = document.querySelector('.input__number');
const inputExpiryMonth = document.querySelector('.input__month');
const inputExpiryYear = document.querySelector('.input__year');
const inputCVC = document.querySelector('.input__cvc');

const msgErrorNumber = document.querySelector('.message__error--number');
const msgErrorExpiry = document.querySelector('.message__error--expiry');
const msgErrorCVC = document.querySelector('.message__error--cvc');

const btnConfirm = document.querySelector('.btn__submit');

const form = document.querySelector('.form');
const submitted = document.querySelector('.submitted');

///////////////////////////////
//// IMPLEMENTING FUNCTIONALITY

const numberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
const dateRegex = /^\d{2}$/;
const cvcRegex = /^\d{3}$/;

inputName.addEventListener('input', function (e) {
  nameInCard.textContent = e.target.value;
});

inputExpiryMonth.addEventListener('input', function (e) {
  if (!e.target.value) return (expiryMonthInCard.textContent = '00');
  if (e.target.value > 12 || e.target.value.length > 2)
    return (e.target.value = e.target.value.slice(0, -1));
  expiryMonthInCard.textContent = Math.trunc(e.target.value);
});

inputExpiryYear.addEventListener('input', function (e) {
  if (!e.target.value) {
    expiryYearInCard.textContent = '00';
    return;
  }

  expiryYearInCard.textContent = e.target.value;
});

inputCVC.addEventListener('input', function (e) {
  if (!e.target.value) return (cvcInCard.textContent = '00');
  cvcInCard.textContent = e.target.value;
});

inputNumber.addEventListener('input', function (e) {
  if (!e.target.value)
    return (numberInCard.textContent = '0000 0000 0000 0000');

  numberInCard.textContent = e.target.value;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!numberRegex.test(inputNumber.value)) {
    inputNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    msgErrorNumber.classList.remove('d__hidden');
  }

  if (numberRegex.test(inputNumber.value)) {
    inputNumber.style.borderColor = 'hsl(278, 68%, 11%)';
    msgErrorNumber.classList.add('d__hidden');
  }
  if (
    !dateRegex.test(inputExpiryMonth.value) ||
    !dateRegex.test(inputExpiryYear.value)
  ) {
    msgErrorExpiry.classList.remove('d__hidden');
  }

  if (!dateRegex.test(inputExpiryMonth.value))
    inputExpiryMonth.style.borderColor = 'hsl(0, 100%, 66%)';
  if (dateRegex.test(inputExpiryMonth.value))
    inputExpiryMonth.style.borderColor = 'hsl(278, 68%, 11%)';

  if (!dateRegex.test(inputExpiryYear.value))
    inputExpiryYear.style.borderColor = 'hsl(0, 100%, 66%)';
  if (dateRegex.test(inputExpiryYear.value))
    inputExpiryYear.style.borderColor = 'hsl(278, 68%, 11%)';

  if (
    dateRegex.test(inputExpiryMonth.value) &&
    dateRegex.test(inputExpiryYear.value)
  ) {
    msgErrorExpiry.classList.add('d__hidden');
  }

  if (!cvcRegex.test(inputCVC.value)) {
    msgErrorCVC.classList.remove('d__hidden');
    inputCVC.style.borderColor = 'hsl(0, 100%, 66%)';
  }

  if (cvcRegex.test(inputCVC.value)) {
    msgErrorCVC.classList.add('d__hidden');
    inputCVC.style.borderColor = 'hsl(278, 68%, 11%)';
  }

  if (
    !inputName.value ||
    !inputNumber.value ||
    !inputExpiryMonth.value ||
    !inputExpiryYear.value ||
    !inputCVC.value
  ) {
    return;
  }

  form.classList.add('d__hidden');
  submitted.classList.remove('d__hidden');
});
