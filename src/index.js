// Eventos del DOM
// Se obtiene el id del botón de cifrado para luego establecer un escuchador de eventos que al hacer click, lanza la función de cifrado
let c_button = document.getElementById('cipherButton');
c_button.addEventListener('click', function () {
    let offset = parseInt(document.getElementById('offset').value);
    let string = document.getElementById('textToCipherDecipher').value.toUpperCase();
    let encode = document.getElementById('cipherResult');
    encode.innerHTML = cipher.encode(offset,string);
}); 

// Se obtiene el id del botón de descifrado para luego establecer un escuchador de eventos que al hacer click, lanza la función de descifrado
let d_button = document.getElementById('decipherButton');
d_button.addEventListener('click', function () {
    let offset = parseInt(document.getElementById('offset').value);
    let string = document.getElementById('textToCipherDecipher').value.toUpperCase();
    let decode = document.getElementById('decipherResult');
    decode.innerHTML = cipher.decode(offset,string);
}); 

// Botón para conocer un poco más sobre cifrado cesar
let know_button = document.getElementById('knowButton');
let block1 = document.getElementById('block_1');
let block2 = document.getElementById('block_2');
know_button.addEventListener('click',function () {
    block1.style.display = 'none';
    block2.style.display = 'block'; 
});

// Botón para regresar
let back_button = document.getElementById('backButton');
back_button.addEventListener('click',function () {
    block1.style.display = 'block';
    block2.style.display = 'none'; 
})
