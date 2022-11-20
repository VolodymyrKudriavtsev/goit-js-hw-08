import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const localStorageData = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

const updateLoginForm = () => {
  if (localStorage['feedback-form-state']) {
    form.elements[0].value = localStorageData.email;
    form.elements[1].value = localStorageData.message;
  } else {
    form.elements[0].value = '';
    form.elements[1].value = '';
  }
};
updateLoginForm();

const onLoginFormEnter = e => {
  if (e.target.nodeName === 'INPUT') {
    formData.email = e.target.value;
  } else {
    formData.message = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onLoginFormSubmit = e => {
  e.preventDefault();
  form.reset();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
};

form.addEventListener('submit', onLoginFormSubmit);
form.addEventListener('input', throttle(onLoginFormEnter, 500));
