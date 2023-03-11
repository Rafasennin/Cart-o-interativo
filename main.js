
const cardName = document.getElementById("cardHolder__name");
const inputName = document.getElementById("input__name");

const cardNumber = document.getElementById("cardHolder__number");
const inputNumber = document.getElementById("input__number");

inputName.addEventListener("keyup", ()=>{
    cardName.innerText = inputName.value;
});

inputNumber.addEventListener("keyup", ()=>{
    cardNumber.innerText = inputNumber.value;
});