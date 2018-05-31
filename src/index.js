//Primero obtengo el input text y el input button a través de dos variables diferentes

let d_button = document.getElementById("decipherButton");

d_button.addEventListener("click", function (){
    let offset = parseInt(document.getElementById("offset1").value);
    let string = document.getElementById("textToDecipher").value.toUpperCase();
    let decode = document.getElementById('decipherResult');
    let show = document.getElementById('block_2')
    let hide = document.getElementById('block_1')
    decode.innerHTML = cipher.decode(offset,string);
    if(decode) {
        show.style.display = 'block';
        hide.style.display = 'none';
        }
}); 

let con_button = document.getElementById('confirmButton');
con_button.addEventListener('click', function () {
    let show1 = document.getElementById('block_3');
    let hide1 = document.getElementById('block_1');
    let hide2 = document.getElementById('block_2');
        show1.style.display = 'block';
        hide1.style.diplay = 'none';
        hide2.style.display = 'none';
    
})


let c_button = document.getElementById("cipherButton");

c_button.addEventListener("click", function (){
    let offset = parseInt(document.getElementById("offset2").value);
    let string = document.getElementById("textToCipher").value.toUpperCase();
    let encode = document.getElementById("cipherResult");
    encode.innerHTML = cipher.encode(offset,string);
}); 

let m_button = document.getElementById('sendMessage');
m_button.addEventListener('click', function (){
    alert('Tu mensaje fue enviado, te esperamos!')
})


