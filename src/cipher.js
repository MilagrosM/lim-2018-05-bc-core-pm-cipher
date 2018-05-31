window.cipher = {
  encode: function(offset,string){
  
  let cipherArray = [];
  
  for(let i = 0; i<string.length; i++){
     let c_firstAsciiCode = string.charCodeAt(i);
     let c_secondAsciiCode;
     let c_newString;
    if(c_firstAsciiCode >= 65 && c_firstAsciiCode <= 90){
      c_secondAsciiCode = (c_firstAsciiCode - 65 + offset) % 26 + 65;
      c_newString = String.fromCharCode(c_secondAsciiCode);
      cipherArray.push(c_newString);
      } else {
      c_secondAsciiCode = c_firstAsciiCode;
      c_newString = String.fromCharCode(c_secondAsciiCode);
      cipherArray.push(c_newString);
     }     
  }
  return cipherArray.join('');
  },


  decode: function(offset,string){
 

  let decipherArray = [];
  
  for(let i = 0; i<string.length; i++){
  
     let d_firstAsciiCode = string.charCodeAt(i);
     let d_secondAsciiCode;
     let d_newString;
     if(d_firstAsciiCode >= 65 && d_firstAsciiCode <= 90){
        d_secondAsciiCode = (d_firstAsciiCode + 65 - offset) % 26 + 65;
        d_newString = String.fromCharCode(d_secondAsciiCode);
        decipherArray.push(d_newString);
     } else {
        d_secondAsciiCode = d_firstAsciiCode;
        d_newString = String.fromCharCode(d_secondAsciiCode);
        decipherArray.push(d_newString);
     }
  }
      return decipherArray.join('')
  }}



 





