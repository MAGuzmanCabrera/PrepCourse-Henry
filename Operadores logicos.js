//operador &&
function mayorYmenor (num){
    if (num>5 && num<10) console.log (true);
    else console.log (false);
}

mayorYmenor(2);
mayorYmenor(8);

function mayorYmenorYpar (num){
    if (num>5 && num<10 &&num%2===0) console.log (true);
    else console.log (false);
}

mayorYmenorYpar(6);
mayorYmenorYpar(8);

//Operado or, ||
function operadorOr(str){
    if (str==="Henry"||str.length>3) console.log(true);
    else console.log(false);
}

operadorOr("Javascript");
operadorOr("Aria")
operadorOr("Henry")

//Operador Not
function negacion(permiso){
    if(permiso) console.log("Tiene permiso");
}
negacion(true);

function negacion2(permiso){
    if(!permiso) console.log("Tiene permiso2");
}
negacion2(false);

// funciones complejas
function condionalcombinada(num){
    if(num>7 && num%2!==0||num===15) console.log(true);
    else console.log (false);
}
condionalcombinada(8);
condionalcombinada(9);
condionalcombinada(15);