const mainForm = document.getElementById("main__form");


const cardName = document.getElementById("cardHolder__name");
const inputName = document.getElementById("input__name");

const cardNumber = document.getElementById("cardHolder__number");
const inputNumber = document.getElementById("input__number");

const cardDate = document.getElementById("cardHolder__date");
const cardDate2 = document.getElementById("cardHolder__date2");
const inputDateMonth = document.getElementById("input__date__month");
const inputDateYear = document.getElementById("input__date__year");

const cardCvc = document.getElementById("cardHolder__cvc");
const inputCvc = document.getElementById("input__cvc");

inputName.addEventListener("keyup", ()=>{
    cardName.innerText = inputName.value;
});

inputNumber.addEventListener("keyup", ()=>{
    cardNumber.innerText = inputNumber.value;
});

inputDateMonth.addEventListener("keyup", ()=>{
    cardDate.innerText = inputDateMonth.value + "/";
});

inputDateYear.addEventListener("keyup", ()=>{
    cardDate2.innerText = inputDateYear.value;
});

inputCvc.addEventListener("keyup", ()=>{
    cardCvc.innerText = inputCvc.value;
});

function confirmButton() {
    mainForm.innerHTML = "<h1 class='thankyou'>Obrigado !</h1>" +
    "<img class='icon__complete' id='icon__complete' src='images/icon-complete.svg'></img>" + 
    "<h3 class='thankyou__info'>Nós adicionamos os detalhes do seu cartão.</h3>";

}   

