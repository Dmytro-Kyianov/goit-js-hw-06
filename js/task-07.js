const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')


inputEl.addEventListener('input', onInputElFontSizeChange);
function onInputElFontSizeChange(event) {
    const currentFontSize = Number(event.currentTarget.value);
    spanEl.style.fontSize = `${currentFontSize}px`;
}

