
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector("#name-output");

/* inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;
});

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
  if (!refs.output.textContent) {
    return (refs.output.textContent = 'Anonymous');
  }
} */



inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
  if (!refs.output.textContent) {
    refs.output.textContent = "Anonymous";
  }
} 


