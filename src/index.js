//Primero obtengo el input text y el input button a través de dos variables diferentes


let c_button = document.getElementById("cipherButton");

c_button.addEventListener("click", function (){
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("textToCipherDecipher").value.toUpperCase();
    let encode = document.getElementById("cipherResult");
    encode.innerHTML = cipher.encode(offset,string);
}); 

let d_button = document.getElementById("decipherButton");

d_button.addEventListener("click", function (){
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("textToCipherDecipher").value.toUpperCase();
    let decode = document.getElementById('decipherResult');
    decode.innerHTML = cipher.decode(offset,string);
}); 





