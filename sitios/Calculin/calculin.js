"use strict"

//Variables globales

var acumulado;
var operacion; //Guarda el operador previo al actual.
var reingreso; //Controla que no se presione operadores dos veces seguidas, y que cuando se introducen dígitos luego de un operador, el visor se reinicie.

var visor = document.getElementById("visor");

Reset();

document.body.addEventListener("keydown", Escuchar_teclas, false);

//Funciones

function Reset()
{
    acumulado = 0;
    //operando = 0;
    operacion = "=";//Inicia con el igual, para que no arroje error la función "Operaciones" en caso de presionar el "=" como primer operador.
    reingreso = false; //Controla que no se presione operadores dos veces seguidas, y que cuando se introducen dígitos luego de un operador, el visor se reinicie.

    visor.value = acumulado;
}

function Ingreso_numero(num)
{
    if(reingreso) //Reinicia el visor si se acaba de salir de la función "Operaciones".
    {
        if(visor.value != "-") //Ingreso de número negativo
            visor.value = 0;
        else if(operacion == "-") //Si se ingresó un negativo siendo la operación anterior la resta, debe cambiarse el próximo operador, para que no reste dos veces.
            operacion = "+";

        reingreso = false;
    }

    //Condiciones para concatenar dígitos en el visor, con especial foco en el comienzo del ingreso de datos.

    if(visor.value == "0")
    {
        if(num == ".")
            visor.value = "0" + num;
        else
            visor.value = num;
    }else
        visor.value += num;
}

function Operaciones(oper)
{
    if(reingreso == false || operacion == "=") //Controla el ingreso consecutivo de operadores.
    {
        let operando = Number(visor.value); //Lectura de lo ingresado en el visor.

        if(oper == "=" || operacion != "=") //Si se pidió el resultado o había una operacion pendiente, se procede a acumular el operando ingresado en el visor.
        {
            switch(operacion){
                case "+":
                    acumulado += operando;
                    break;
                case "-":
                    acumulado -= operando;
                    break;
                case "*":
                    acumulado *= operando;
                    break;
                case "/":
                    acumulado /= operando;
                    break;
                default:
                    acumulado = operando;
            }

            operacion = oper; //Se conserva el nuevo operador.

        }else //En cambio, si no hay operadores previos registrados, sólo se registra el operador ingresado
        {
            switch(oper)
            {
                case "+":
                    operacion = "+";
                    break;
                case "-":
                    operacion = "-";
                    break;
                case "*":
                    operacion = "*";
                    break;
                case "/":
                    operacion = "/";
                    break;
                default:;
            }

            acumulado = operando; //Se conserva el ingreso del visor.
        }

        reingreso = true; //Flag de registro de operador

        if(visor.value == "0" && oper == "-") //Si se ingresó un "-" con el visor en cero, se está introduciendo un numero negativo
            visor.value = "-";
        else //Si no, se debe ingresar el acumulado al visor.
            visor.value = acumulado <= 999999999999 ? acumulado : acumulado.toExponential(12);
    }else
    {
        if(oper == "-") //Si se ingresó un "-" inmediatamente después de otro operador, se está pidiendo un número negativo, y no otra operación.
            visor.value = "-";
        else
            operacion = oper;
    }
}

function Escuchar_teclas(e)
{
    e.preventDefault();

    switch(e.key)
    {
        case "+":
            Operaciones("+");
            break;
        case "-":
            Operaciones("-");
            break;
        case "*":
            Operaciones("*");
            break;
        case "/":
            Operaciones("/");
            break;
        case "Enter":
            Operaciones("=");
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            Ingreso_numero(e.key)
            break;
        case "Escape":
        case "Backspace":
            Reset();
            break;
        default:
            console.log("Tecla inválida");
    }
}
