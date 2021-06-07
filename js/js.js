var btnNumeros = document.getElementsByName("btnNumero");
var principalscreen = document.getElementById("principal-screen"); 
var operadorHistorial =document.getElementById("operadorHistorial");
var signooperacion=document.getElementById("signo-operacion");
var btnIgual= document.getElementById("btnIgual");

var operadorHistorial = document.getElementById("operadorHistorial");
var numeroAHistorial = document.getElementById("numeroAHistorial");
var numeroBHistorial = document.getElementById("numeroBHistorial");
const lsOutput=document.getElementById("lsOutput");


var numero1=0;
var numero2=0;
var result=0;

var num1=0;
var num2=0;
var resultado=0;


for(let i=0;i<btnNumeros.length;i++){
    btnNumeros[i].addEventListener("click",function(){
        principalscreen.value =principalscreen.value + btnNumeros[i].value;
    });
}

function validation(){
    if(principalscreen.value == ""){
        principalscreen.focus();
    }else if(numeroAHistorial.innerHTML!="" & operadorHistorial.innerHTML!="" && numeroBHistorial.innerHTML==""){
    btnIgual.focus();
    }
    else{
        num1=principalscreen.value;
        numeroAHistorial.innerHTML=num1;
        numeroBHistorial.innerHTML="";
        principalscreen.value ="";
    }
}

function suma(){
    operadorHistorial.innerHTML="+";
    signooperacion.innerHTML="+";
    validation()
}
function resta(){
    operadorHistorial.innerHTML="-";
    signooperacion.innerHTML="-";
    validation()
}
function multiplicacion(){
    operadorHistorial.innerHTML="x";
    signooperacion.innerHTML="x";
    validation()
}
function division(){
    operadorHistorial.innerHTML="/";
    signooperacion.innerHTML="/";
    validation()
}

function operaciones(){
    var num2= principalscreen.value;
    numeroBHistorial.innerHTML=num2;

    switch(signooperacion.innerHTML){
        case "+":
            resultado= parseFloat(num1)+parseFloat(num2);
        break;

        case "-":
            resultado= parseFloat(num1)-parseFloat(num2);
        break;

        case "x":
            resultado= parseFloat(num1)*parseFloat(num2);
        break;

        case "/":
            resultado= parseFloat(num1)/parseFloat(num2);
        break;
    }
    signooperacion.innerHTML="=";
    principalscreen.value=resultado;

    numero1= num1;
    numero2=num2;
    result=resultado;

    localStorage.setItem("Primer numero",num1);
    localStorage.setItem("Resultado",result);
    localStorage.setItem("Segundo numero",num2);

for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
    lsOutput.innerHTML += `${key}: ${value} <br/>`;
}
}

function resultadofinal(){
   if(lsOutput.innerHTML!=""){
        lsOutput.innerHTML="";
    }
    // Con el if de arriba se borra automaticamente cuando el valor es cambiado
    //Sin el if se queda los numeros y su resultado 
    if(principalscreen.value !="" && signooperacion.innerHTML!="" && signooperacion.innerHTML!="="){
        operaciones();
    }else{
        principalscreen.focus();
    }   
}

function reinicio(){
    num1=0;
    num2=0;
    resultado=0;
    principalscreen.value="";
    signooperacion.innerHTML="";
    operadorHistorial.innerHTML="";
    numeroAHistorial.innerHTML="";
    numeroBHistorial.innerHTML="";
    lsOutput.innerHTML="";
}
