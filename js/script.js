const verifyCheckInputs = () => {
    const checkInputs = document.querySelectorAll('input[type="checkbox"]');
    for (let i=0; i <= checkInputs.length; i++){
        
        let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (checked == 0) {
            alert('Selecione ao menos um stick');
            return false;
        }
        return true
    }
}

const btnIncrement = document.querySelector('.btn-plus');
const btnDecrement = document.querySelector('.btn-minus');
const quantity = document.querySelector('.quantity');

btnIncrement.addEventListener('click', () => {
    quantity.value++;
})

btnDecrement.addEventListener('click', () => {
    quantity.value--;

    if (quantity.value < 0) {
        quantity.value = 0;
    }
})

const verifyEmptyFields = () => {
    if (quantity.value == 0) {
        quantity.classList.add('error');
        return false;
    } 
    else {
        quantity.classList.remove('error');
        return true;
    }
}

const clearAllFields = () => {
    const checkbox = document.querySelectorAll('.form-check-input'); 
    const textArea = document.querySelector('.text-area');   
    for (let i of checkbox) {
        if (i.checked) {
            i.checked = !i.checked;
        }
    }
    quantity.value = 0;
    textArea.value = '';
}

// Button "Enviar"
const btnSend = document.querySelector('.btn-send');

// Message
const message = document.querySelector('.message');
btnSend.addEventListener('click', () => {
    if (verifyCheckInputs() && verifyEmptyFields()) {
        message.classList.add('visible');
        clearAllFields();
    }
});