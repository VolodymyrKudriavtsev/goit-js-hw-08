import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formData = {};

const localStorageData = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

console.log(localStorage);

const updateLoginForm = () => {
  if (localStorage['feedback-form-state']) {
    form.elements[0].value = localStorageData.email;
    form.elements[1].value = localStorageData.message;
  }
};
updateLoginForm();

const onLoginFormInput = e => {
  formData.email = form.elements[0].value;
  formData.message = form.elements[1].value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onLoginFormSubmit = e => {
  e.preventDefault();
  if (form.elements[0].value === '' || form.elements[1] === '') {
    return alert('All fields of the form must be filled in!!!');
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
};

form.addEventListener('submit', onLoginFormSubmit);
form.addEventListener('input', throttle(onLoginFormInput, 500));
