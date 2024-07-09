
let keyChallenge= "alura";
let txtEncriptado;
let txtDesEncriptado;

function btnEncriptar(){
    let lblEncriptar = document.getElementById("input-text").value;
    
    if(lblEncriptar.length === 0){
        let elementoHTML = document.getElementById('lblVacio');
        elementoHTML.innerHTML = "Ningún mensaje fue encontrado";
        setTimeout(() => {
            elementoHTML.innerHTML = "";
        }, "2000");
    } else {
        
        txtEncriptado = encrypt(lblEncriptar, keyChallenge);

        let elementoHTML = document.getElementById('decrypt-text')
        elementoHTML.value = txtEncriptado;
    }
}

function btnDesencriptar(){
    let lblEncriptado = document.getElementById("decrypt-text").value;

    if(lblEncriptado.length === 0 || txtEncriptado.length === 0){
        let elementoHTML = document.getElementById('lblVacio');
        elementoHTML.innerHTML = "Ningún mensaje fue encontrado";
        setTimeout(() => {
            elementoHTML.innerHTML = "";
        }, "2000");
    } else {
        txtDesEncriptado = decrypt(txtEncriptado, keyChallenge);
        let elementoHTML = document.querySelector('#decrypt-text')
        elementoHTML.value = txtDesEncriptado;
    }
}

// Función para encriptar el texto
function encrypt(text, key) {
    
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        
        encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
   
    return encrypted;
}

// Función para desencriptar el texto
function decrypt(encryptedText, key) {
    
    let decrypted = '';
    for (let i = 0; i < encryptedText.length; i++) {
        decrypted += String.fromCharCode(encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
}