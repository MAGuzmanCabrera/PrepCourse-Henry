function aprendiendoReturn(nombre){
console.log(nombre);
return nombre;
}

aprendiendoReturn("Miguel")

function otraFuncion(){
    return ("El nombre retornado por la funcion 'aprendiendoReturn' es: " + 
    aprendiendoReturn("Miguel")
    );
}

otraFuncion()