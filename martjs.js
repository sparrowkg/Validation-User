const input = document.querySelector('.input')
const errorBox = document.querySelector('.error-input')
const errorBox2 = document.querySelector('.error-user')
const radios = document.querySelectorAll('input[type="radio"]')
const btn = document.querySelector('button')
const success = document.querySelector('.success')

input.addEventListener('input', () => {
    errorBox.textContent = ''
})
radios.forEach((radio) => {
    radio.addEventListener('input', () => {
        errorBox2.textContent = '';
    })
})
btn.addEventListener('click', (e) => {
    let status = 0
    if (input.value.length < 5) {
        errorBox.textContent = 'Имя слишком короткое'
    } else if (input.value[0] === input.value[0].toUpperCase() && !(input.value[0] >= 'a' && input.value[0] <= 'z') && !(input.value[0] >= '0' && input.value[0] <= '9')) {
        errorBox.textContent = 'Имя должно начинаться с маленькой буквы или цифры'
    }  else {
        errorBox.textContent = ''
        status += 1
    }
    let selectedRadio = null
    radios.forEach((radio) => {
        if (radio.checked) {
            selectedRadio = radio
            status += 1
        } else if (!selectedRadio) {
            errorBox2.textContent = 'Обязательно нужно сделать выбор'
        } else errorBox2.textContent = ''
    })
    for (i = 0; i <= status; i++) {
        (status === 2) ? success.textContent = 'Авторизация успешна!' : success.textContent = ''
    }
})
