//Primero obtengo el input text y el input button a través de dos variables diferentes
let string1 = document.getElementById("textToCipher");
let offsetNumber1 = document.getElementById("number1");
let button1 = document.getElementById("cipherButton");
//Ahora obtenemos el identificador para la respuesta del mensaje cifrado
let result1 = document.getElementById("cipherResult");

//Ahora indico que función quiero que se corra al realizar el click en el boton
button1.addEventListener("click", cipher.encode); 


let string2 = document.getElementById("textToDecipher");
let offsetNumber2 = document.getElementById("number2")
let button2 = document.getElementById("decipherButton");
let result2 = document.getElementById("decipherResult")

button2.addEventListener("click", cipher.decode); 
