function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  widgetEl: document.querySelector(".widget"),
  colorEl: document.querySelector(".color"),
  chengeColor: document.querySelector(".change-color"),
};

refs.chengeColor.addEventListener("click", () => { 
    
    document.body.style.backgroundColor = getRandomHexColor();    
    refs.colorEl.textContent = document.body.style.backgroundColor;
});

