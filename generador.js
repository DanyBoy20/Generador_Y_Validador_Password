/* OPCION 1 */

function generadorPassword1( longitud ) {
    var length = (longitud)?(longitud):(10);
    var letras = "abcdefghijklmnopqrstuvwxyz"; // Mayusculas con funcion toUpperCase() 
    var numeros = '0123456789';
    var simbolos = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var caracter = "";
    while( password.length<length ) {
        letras1 = Math.ceil(letras.length * Math.random()*Math.random());
        numeros2 = Math.ceil(numeros.length * Math.random()*Math.random());
        simbolos3 = Math.ceil(simbolos.length * Math.random()*Math.random());
        temp = letras.charAt( letras1 );
        temp = (password.length%2==0)?(temp.toUpperCase()):(temp);
        caracter += temp;
        caracter += numeros.charAt( numeros2 );
        caracter += simbolos.charAt( simbolos3 );
        password = caracter;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,longitud);
}

console.log( generadorPassword1(8) );

/* ---- OPCION 2 */

function generadorPassword2() {
    var longitud = 8,
        caracter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=",
        password = "";
    for (var i = 0, n = caracter.length; i < longitud; ++i) {
        password += caracter.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

console.log( generadorPassword2() );







