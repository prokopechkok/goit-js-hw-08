import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('input'),
  messageTextareaEl: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

const localStorageKey = 'feedback-form-state';
let inputDataObj = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

const isEmail = JSON.parse(localStorage.getItem(localStorageKey))?.email;
const isMessage = JSON.parse(localStorage.getItem(localStorageKey))?.message;

if (isEmail) {
  refs.emailInputEl.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).email;
}
if (isMessage) {
  refs.messageTextareaEl.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).message;
}

function onInput(e) {
  e.preventDefault();

  if (e.target.name === 'email') {
    inputDataObj.email = e.target.value;
  } else if (e.target.name === 'message') {
    inputDataObj.message = e.target.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(inputDataObj));
}

function onSubmit(e) {
  e.preventDefault();

  if (refs.emailInputEl.value.trim() && refs.messageTextareaEl.value.trim()) {
    console.log(inputDataObj);
    inputDataObj = {};
    refs.form.reset();
    localStorage.clear();
  } else {
    alert('Please, fill in all fields');
  }
}
