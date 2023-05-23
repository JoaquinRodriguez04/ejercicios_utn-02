// Guía de ejercicios

/*
1. Crea un array que contenga el nombre de cinco colores escritos como strings.
*/

const arrayOfColors = ["rojo","negro","blanco","azul","white"]



/*
2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
*/

// recorriendo el array para obtener el tercer elemento

function returnWhite(arrayOfColors){
    let thirdValue = []

    for (let i = 0; i < arrayOfColors.length; i++){
        if(i === 2){
            thirdValue = arrayOfColors[i];
        };
    }

    return thirdValue
}

let color = returnWhite(arrayOfColors)

// nos retorna el tercer valor del array: en este caso es blanco
console.log(color)

// obteniendo el tercer elemento del array utilzando el indice

let thirdValue = arrayOfColors[2]

// nos retorna el tercer valor del array: en este caso es blanco
console.log(thirdValue)

/*
3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1. 
*/

console.log(arrayOfColors[0][0])



/*
4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random().
*/

//todo: la funcion Math.random() nos devuelve un numeo aleatorio ente 0 y 1 (especificamente entre 0 y 0.9999) y math.floor() nos redondea el numero hacia abao, osea entero.

let numberRandom = Math.floor(Math.random() * 99) + 1;

console.log(numberRandom);



/*
5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
*/

const numbers =[1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

/*
6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
*/

function numberRandom2(){
    const arraynumberRandom = [];
    for(let i = 0; i < 20; i++){
        const random = Math.floor(Math.random() * 100);

        arraynumberRandom.push(random);
    }

    return arraynumberRandom;
}

const valueNumberRandom2 =  numberRandom2();

console.log(valueNumberRandom2)

/*
7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola.
*/

const copyValueNumberRandom2 = valueNumberRandom2;

console.log(copyValueNumberRandom2);


/*
8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.
*/


/*
9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html.
*/

// variables
const form = document.getElementById('conversionForm');
const amount = parseFloat(document.getElementById('amount').value);
const currency = document.getElementById('currency').value;
const result = document.getElementById('result');

// Función para convertir de dólares a pesos
function dollarsToPesos(amount) {
    const exchangeRate = amount * 300;
    return exchangeRate;
};
  
// Función para convertir de pesos a dólares
function pesosToDollars(amount) {
    const exchangeRate = amount / 300;
    return exchangeRate;
};

// Evento submit del formulario
form.addEventListener('submit', convert);


// funcion del evento
function convert(event){
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    
    if (currency === "usd") {
        const resultDollarsToPesos = dollarsToPesos(amount);
        result.textContent = `USD = ${resultDollarsToPesos.toFixed(2)} ARS`;

    } else if (currency === "ars") {
        const resultPesosToDollars = pesosToDollars(amount);
        result.textContent = `ARS = ${resultPesosToDollars.toFixed(2)} USD`;
    };
    
    return result;
};


/*
10. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
son 86 grados fahrenheit.
*/

// variables
const form2 = document.getElementById("conversionDegress");
const Degress = parseFloat(document.getElementById("Degress").value);
const selectDegress = document.getElementById("selectDegress").value;
const result2 = document.getElementById("result2");

// Función para convertir de centígrados a fahrenheit
function centígradosToFahrenheit(Degress) {
    const result = (Degress * 9/5) + 32;
    return result;
};
  
// Función para convertir de fahrenheit a centígrados
function fahrenheitToCentígrados(Degress) {
    const result = (Degress - 32) * 5/9;
    return result;
};

// Evento submit del formulario
form2.addEventListener('submit', convertDegress);

// funcion del evento
function convertDegress(event){
    event.preventDefault();
    
    const Degress = parseFloat(document.getElementById("Degress").value);
    const selectDegress = document.getElementById("selectDegress").value;
    
    if (selectDegress === "centígrados") {
        const resultCentígradosToFahrenheit = centígradosToFahrenheit(Degress);
        result2.textContent = `°C = ${resultCentígradosToFahrenheit} °F`;

    } else if (selectDegress === "fahrenheit") {
        const resultFahrenheitToCentígrados = fahrenheitToCentígrados(Degress);
        result2.textContent = `°F = ${resultFahrenheitToCentígrados} °C`;
    };
    
    return result2;
};


/*
12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
podremos especificar las características de la caja.
*/

const btnSend = document.getElementById("btnSend");

// Evento submit del formulario
btnSend.addEventListener('click', sendBox);

function sendBox(event){
    event.preventDefault();

    const nameCustomer = document.getElementById("nameCustomer").value;
    const typeBox = document.getElementById("selectTypeBox").value;
    const sixebox = document.querySelector('input[name="group"]:checked + label').textContent;
    const commentCustomer = document.getElementById("comment").value;
    const containerInfo = document.getElementById("containerInfo");

    let content = `<p>Nombre del cliente: ${nameCustomer}</p>
                   <p>Tipo de caja: ${typeBox}</p>
                   <p>Dimensiones de la caja: ${sixebox}</p> 
                   <p>Comentarios: ${commentCustomer}</p>`;

    containerInfo.innerHTML = content;

    return containerInfo;
};


/*
A través de un formulario, el usuario debe introducir un número secreto que estará
entre 0 y 5.
El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
juego.
Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
*/

const formGame = document.getElementById("formGame");

formGame.addEventListener("submit",playGame);

function playGame(event){
    event.preventDefault();
    
    let secretNumber = Math.floor(Math.random() * 6);
    const numberUser = parseInt(document.getElementById("guessNumber").value);

    if(numberUser === secretNumber){
        matchresult("¡Felicidades! ¡Has ganado!");
    } else if(numberUser < 0 || numberUser > 5 ){
        matchresult("El número debe estar entre 0 y 5.");
    } else{
        matchresult(`¡Fallaste! El número secreto era ${secretNumber}.`);
    };

};

function matchresult(message) {
    const resultGame = document.getElementById("resultGame");
    resultGame.textContent = message;
}


/*
Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
desordenada a medida que se agregan.
*/

// variables
const btnSendNames = document.getElementById("btnSendNames");

// evento
btnSendNames.addEventListener("click",addName);

// function
function addName(event){
    event.preventDefault();

    let name = document.getElementById("names").value;
    let namesList = document.getElementById("namesList");

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    
    namesList.appendChild(li);
    
};

  