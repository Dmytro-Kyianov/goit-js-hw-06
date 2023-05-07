const refs = {
  countValue: document.querySelector("#value"),
  btnDecrementEl: document.querySelector('[data-action="decrement"]'),
  btnIncrementEl: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;
refs.btnDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  refs.countValue.textContent = counterValue;
});
refs.btnIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  refs.countValue.textContent = counterValue;
});