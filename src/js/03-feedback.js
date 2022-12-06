import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
let inputValues = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

    feedbackFormEl.elements.email.value = inputValues.email || '';
    feedbackFormEl.elements.message.value = inputValues.message || '';

function onInputHandler(evt) {
    if (evt.target.nodeName === 'INPUT') {
        inputValues.email = evt.target.value;
    }
    else if (evt.target.nodeName === 'TEXTAREA') {
        inputValues.message = evt.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(inputValues);
    localStorage.removeItem('feedback-form-state');
    feedbackFormEl.reset();
    inputValues = {};
}

feedbackFormEl.addEventListener('input', throttle(onInputHandler, 500));
feedbackFormEl.addEventListener('submit', onFormSubmit);

