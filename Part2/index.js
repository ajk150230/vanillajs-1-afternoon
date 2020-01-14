let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCard(){
    let card = document.getElementById(idInput.value) ;
    card.style.color = colorInput.value;
}

function resetColor(){
    return;
}