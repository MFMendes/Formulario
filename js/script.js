const checkInputs = document.querySelectorAll('input[type="checkbox"]');
const btnSend = document.querySelector('.btn-send');

const verifyCheckInputs = () => {
    for(let i=0; i <= checkInputs.length; i++){
        let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;

        if(checked == 0) {
            console.log('erro')
            return false;
        }
        else {
            console.log(checked)
            return true;
        }
    }
}

btnSend.addEventListener('click', () => verifyCheckInputs());
