// Alerta de reglas
alert("No deben ser usados mayúsculas, vocales con tilde, ni caracteres especiales");


// Capturar datos iniciales de ingreso del usuario y finales de resultado
var textoInicial = document.querySelector("#input-texto");
var mensajeFinal = document.querySelector("#msg");
textoInicial.focus();


// Verificar datos iniciales de ingreso del usuario
function verificarDatos(texto) {
    var myRegex = /[^a-zñ\s]/g;
    var result = myRegex.test(texto);

    if (result) {
        alert("No se permiten mayúsculas, vocales con tilde, ni caracteres especiales");
        textoInicial.focus();
        return false;
    }
    else {
        return true;
    }
};


// Capturar y transformar datos iniciales para procesamiento
function capturarDatos() {
    var minusculaInicial = textoInicial.value.toLowerCase();
    var valorInicial = JSON.stringify(minusculaInicial);
    return valorInicial;
};


// Retornar datos del resultado de la encriptación o desencriptación
function retornarDatos(textoFinal) {
    mensajeFinal.value = JSON.parse(textoFinal);
};


// ENCRIPTACIÓN
var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var verificar = verificarDatos(textoInicial.value);
    
    if (verificar) {
        var mensaje = capturarDatos();

        // Lógica de encriptación
        var nuevoTextoe = mensaje.replaceAll("e","enter");
        var nuevoTextoi = nuevoTextoe.replaceAll("i","imes");
        var nuevoTextoo = nuevoTextoi.replaceAll("o","ober");
        var nuevoTextoa = nuevoTextoo.replaceAll("a","ai");
        var nuevoTextoEncrip = nuevoTextoa.replaceAll("u","ufat");

        retornarDatos(nuevoTextoEncrip);
    }    
});


// DESENCRIPTACIÓN
var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var verificar = verificarDatos(textoInicial.value);
    
    if (verificar) {
        var mensaje = capturarDatos();

        // Lógica de Desencriptación
        var nuevoTextoEnter = mensaje.replaceAll("enter","e");
        var nuevoTextoImes = nuevoTextoEnter.replaceAll("imes","i");
        var nuevoTextoOber = nuevoTextoImes.replaceAll("ober","o");
        var nuevoTextoAi = nuevoTextoOber.replaceAll("ai","a");
        var nuevoTextoDesencrip = nuevoTextoAi.replaceAll("ufat","u");
    
        retornarDatos(nuevoTextoDesencrip); 
    }
});


// BOTÓN LIMPIEZA
var botonLimpieza = document.querySelector("#btn-limpieza");

botonLimpieza.addEventListener("click",function(){
    textoInicial.value = "";
    mensajeFinal.value = "";
    textoInicial.focus();
});


// BOTÓN COPIAR
var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click",function(){
    navigator.clipboard.writeText(mensajeFinal.value);
});
