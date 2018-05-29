//Primero obtengo el input text y el input button a través de dos variables diferentes
let string1 = document.getElementById("textToCipherAndDecipher");
let offsetNumber = document.getElementById("number");

let button1 = document.getElementById("cipherButton");
let button2 = document.getElementById("decipherButton");

//Ahora obtenemos el identificador para la respuesta del mensaje cifrado y descifrado
let result1 = document.getElementById("cipherResult");
button1.addEventListener("click", cipher.encode); 
let result2 = document.getElementById("decipherResult")
button2.addEventListener("click", cipher.decode); 






