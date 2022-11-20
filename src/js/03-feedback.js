import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const formData = {
  email: '',
  message: '',
};

const onEmailEnter = e => {
  formData.email = e.target.value;
  console.log(formData);
};

function onMessageEnter(e) {
  formData.message = e.target.value;
  console.log(formData);
}

const onLoginFormSubmit = e => {
  e.preventDefault();
  refs.form.reset();
  formData = {
    email: '',
    message: '',
  };
  console.log(formData);
};

refs.form.addEventListener('submit', onLoginFormSubmit);
// refs.form.addEventListener('input', throttle(onTextEnter, 500));
// refs.input.addEventListener('input', throttle(onEmailEnter, 500));
// refs.textarea.addEventListener('input', throttle(onMessageEnter, 500));

// !получить значения из инпута и текстарии;  +
//  !?для этого - слушать форму целиком?? или инпуты по отдельности
// !?запилась из в локалсторедж; посмотреть, как создать массив.
// !? очищать массив Формдата при сабмите
// !применить троттл к событию "инпут"  +

// const onInputTextEnter = (e) => {
//   if (e.currentTarget.value !== '') {
//       refs.output.textContent = e.currentTarget.value;
//   } else {
//       refs.output.textContent = 'Anonymous';
//   }
// }

// 	const formElements = e.currentTarget.elements;
// 	const email = formElements.email.value;
// 	const password = formElements.password.value;

// 	if (email === "" || password === "") {
// 		return alert("All fields of the form must be filled in!!!");
// 	}

// 	const formData = { email, password };
// 	console.log(formData);

// 	form.reset();
// };
