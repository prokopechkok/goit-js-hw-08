import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('input'),
  messageTextareaEl: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

const localStorageKey = 'feedback-form-state';
const inputDataObj = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

if (JSON.parse(localStorage.getItem(localStorageKey))?.email) {
  refs.emailInputEl.placeholder = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).email;
}
if (JSON.parse(localStorage.getItem(localStorageKey))?.message) {
  refs.messageTextareaEl.placeholder = JSON.parse(
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
  console.log(inputDataObj);
  localStorage.removeItem(localStorageKey);
  refs.form.reset();
  refs.emailInputEl.placeholder = '';
  refs.messageTextareaEl.placeholder = '';
}
