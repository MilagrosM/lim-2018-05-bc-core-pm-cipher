window.cipher = {
// Función de cifrado
  encode: function(offset,string){
    // Se declara un array que almacenara los nuevos caracteres cifrados
    let cipherArray = [];
    // Se utiliza el for para hacer recorrido por toda la cadena ingresada  
      for(let i = 0; i<string.length; i++) {
        // Se obtiene el código ASCII para cada caracter de la cadena
        let c_firstAsciiCode = string.charCodeAt(i);
        let c_secondAsciiCode;
        let c_newString;
        // Se utiliza la estructura if para establecer una condición donde se aplicará el algoritmo de cifrado
        if (c_firstAsciiCode >= 65 && c_firstAsciiCode <= 90) {
          c_secondAsciiCode = (c_firstAsciiCode - 65 + offset) % 26 + 65;
          //Se obtiene los nuevos caracteres y se mandan al array
          c_newString = String.fromCharCode(c_secondAsciiCode);
          cipherArray.push(c_newString);
        } else {
          //Se establece una igualdad para los espacios en blanco
          c_secondAsciiCode = c_firstAsciiCode;
          c_newString = String.fromCharCode(c_secondAsciiCode);
          cipherArray.push(c_newString);
        }     
      }
  return cipherArray.join('');
  },

// Función de descifrado, similar a la de encode.
  decode: function(offset,string) {
    let decipherArray = [];
  
      for(let i = 0; i<string.length; i++) {
        let d_firstAsciiCode = string.charCodeAt(i);
        let d_secondAsciiCode;
        let d_newString;
        if (d_firstAsciiCode >= 65 && d_firstAsciiCode <= 90) {
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




 





