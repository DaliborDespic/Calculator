const input = document.querySelector('#input');
const buttons = document.querySelectorAll('#buttons');
const buttonEqual = document.querySelector('#buttonEqual');
const buttonCelar = document.querySelector('#buttonClear');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input.value += button.value
    })
})

buttonEqual.addEventListener('click', () => {
    input.value = eval(input.value);
})

buttonCelar.addEventListener('click', () => {
    input.value = '';
})