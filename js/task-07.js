const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInputElFontSizeChange);
function onInputElFontSizeChange() {
    const currentFontSize = Number(inputEl.value);
    spanEl.style.fontSize = `${currentFontSize}px`;
}

