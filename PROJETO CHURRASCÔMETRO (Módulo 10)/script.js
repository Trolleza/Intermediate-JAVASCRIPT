// Carne - 400gr pessoa + de 6 horas - 650gr
// Cerveja - 1200ml pessoa + de 6 horas - 2000ml
// Refrig./Água - 1000ml pessoa / 6horas - 1500ml

// Crianças valem por 0,5


const inputAdults = document.getElementById("adults");
const inputKids = document.getElementById("kids");
const inputDuration = document.getElementById("duration");

const result = document.getElementById("result");

function MeatPerP(duration){
    if(duration >= 6){return 650;}
    else{return 400;}}

function BeerPerP(duration){
    if(duration >= 6){return 2000;}
    else{return 1200;}}

function DrinksPerP(duration){
    if(duration >= 6){return 1500;}
    else{return 1000;}}

function calculate(){
    console.log("Calculating...");

    const adults = inputAdults.value;
    const kids = inputKids.value;
    const duration = inputDuration.value;
    const meat = MeatPerP(duration);
    const drinks = DrinksPerP(duration);

    const qtdMeat = meat * adults + (meat/2 * kids);
    const qtdBeer = BeerPerP(duration) * adults;
    const qtdDrinks = drinks * adults + (drinks/2 * kids);
    

    //coloca-se o "+" após o sinal de "=" para
    //deixar entendido que preciso imprimir mais
    //de um innerHTML
    result.innerHTML = `<h2 class="result-info"> You'll need:</h2>`
    
    result.innerHTML += `
        <div class="result-block">
        <img src="./Imagens/Meat.png"/>
        <p>${qtdMeat/1000} Kg of Meat</p></div>`

    result.innerHTML += `
        <div class="result-block">
        <img src="./Imagens/Beer.png"/>
        <p>${Math.ceil(qtdBeer/355)} Cans of Beer</p></div>`

    result.innerHTML += `
        <div class="result-block">
        <img src="./Imagens/Coca.png"/>
        <p>${Math.ceil(qtdDrinks/2000)} Bottles of Soda</p></div>`}
    

