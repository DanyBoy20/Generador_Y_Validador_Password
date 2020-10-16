const form = document.getElementById("form");
const texto = document.getElementById("datos");

/** EXPRESION REGULAR - VALORES
Al menos 6 caracteres, pero no mas de 8 (?=.{6,8}$)
Al menos una letra minuscula (?=.*[a-z])
Al menos una letra mayuscula (?=.*[A-Z])
Al menos un numero (?=.*[0-9])
Al menos caracter especial / simbolo (?=.*\W)
 */
var expresion = /^(?=.{6,8}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!expresion.test(texto.value)){
        alert("ERROR");
        return false;
    }else{
        form.submit();
    }       
});





