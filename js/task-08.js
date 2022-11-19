const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const outputForm = {
    email: email.value,
    password: password.value,
  };

  console.log(outputForm);

  /* console.log(`Login: ${email.value}, Password: ${password.value}`); */
  event.currentTarget.reset();
}

/* const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", fieldsCheck);
function fieldsCheck(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email.length === 0 || password.length === 0) {
    alert("Заповнені не всі поля! Доповніть, інформацію, будь-ласка");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset(); */