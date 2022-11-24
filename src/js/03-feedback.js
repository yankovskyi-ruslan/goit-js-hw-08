import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const inputValues = {};

if (localStorage.getItem('feedback-form-state')) {
    const parcedValues = JSON.parse(localStorage.getItem('feedback-form-state'));

    feedbackFormEl.elements.email.value = parcedValues.email;
    feedbackFormEl.elements.message.value = parcedValues.message;
}

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
    localStorage.removeItem('feedback-form-state');
    feedbackFormEl.reset();
    console.log(inputValues);
}

feedbackFormEl.addEventListener('submit', onFormSubmit);
feedbackFormEl.addEventListener('input', throttle(onInputHandler, 500));
