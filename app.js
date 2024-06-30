// 1. Inisiasi nilai
let num = 0;

// 2. Manipulasi DOM 
const value = document.querySelector('.value')
const btnDecrease = document.querySelector('.decrease')
const btnIncrease = document.querySelector('.increase')
const btnReset = document.querySelector('.reset')

// 3. Membuat Function update
function updateValue() {
    value.textContent = num;
}

// 4. Membuat event untuk menambah. mengurangi dan mereset
btnDecrease.addEventListener('click', (e) => {
    num--;
    updateValue()
    e.preventDefault()
})

btnIncrease.addEventListener('click', (e) => {
    num++;
    updateValue()
    e.preventDefault()
})

btnReset.addEventListener('click', (e) => {
    num = 0;
    updateValue()
    e.preventDefault()
})