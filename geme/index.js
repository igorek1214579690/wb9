const divUser = document.querySelector('.user')
const divTry = document.querySelector('.game-try')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')
const btnTry = document.getElementById('to-try')
const btnGame = document.getElementById('to-game')
const inputTry = document.getElementById('try')

const rock = document.getElementsByName('rock')
const tualet = document.getElementsByName('tualet')
const jock = document.getElementsByName('jock')
btnTry.setAttribute('disabled', true)





const disableName = () => {
    console.log(inputName.value);
    if(inputName.value.length < 2) {
        btnTry.setAttribute ('disabled',true)
    } else {
        btnTry.removeAttribute('disabled')

    }
}
    
inputName.addEventListener('input', disableName)
