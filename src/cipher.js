window.cipher = {
  encode: function(offset,string){
  string = string1.value;
  console.log(string)

  offset = parseInt(number1.value);
  let cipherArray = [];
  
  for(let i = 0; i<string.length; i++){
  
     let c_firstAsciiCode = string.charCodeAt(i);
     let c_secondAsciiCode = (c_firstAsciiCode-65+offset)%26+65;
     let c_newString = String.fromCharCode(c_secondAsciiCode);
     cipherArray.push(c_newString);
  }
      return result1.innerHTML = cipherArray.join('')

  },


  decode: function(offset,string){
  string = string2.value;
  console.log(string);

  offset = parseInt(number2.value);

  let decipherArray = [];
  
  for(let i = 0; i<string.length; i++){
  
     let d_firstAsciiCode = string.charCodeAt(i);
     let d_secondAsciiCode = d_firstAsciiCode-offset%26;
     let d_newString = String.fromCharCode(d_secondAsciiCode);
     decipherArray.push(d_newString);
  }
      return result2.innerHTML = decipherArray.join('')
  }}






