"use strict"

var tab_cont = document.getElementById("tablero_cont");
var tablero;
var cartel = document.getElementById("cartel_resul");

function Crear_tablero()
{
    cartel.style.visibility = "hidden";
    
    if(tablero)
    {
        tablero.tableroDOM.remove();
        tablero.contadorBloqueosDOM.remove();
        cartel.textContent = "";
    }
    
    let tam = document.getElementById("tams").value;
    let tamTablero;
    let niv = document.getElementById("niv").value;
    
    switch(tam)
    {
        case "chico":
            tam = TAMANIO_TABLERO_Enum.CHICO;
            tamTablero = 440;
            break;
            
        case "mediano":
            tam = TAMANIO_TABLERO_Enum.MEDIANO;
            tamTablero = 660;
            break;
            
        case "grande":
            tam = TAMANIO_TABLERO_Enum.GRANDE;
            tamTablero = 920;
            break;
    }
    
    switch(niv)
    {
        case "facil":
            niv = NIVEL_JUEGO_Enum.FACIL;
            break;
            
        case "intermedio":
            niv = NIVEL_JUEGO_Enum.INTERMEDIO;
            break;
            
        case "dificil":
            niv = NIVEL_JUEGO_Enum.DIFICIL;
            break;
    }
    
    tablero = new Buscabombas(tam, niv, Resultado);
    
    tablero.tableroDOM.id = "tablero";
    tablero.EstablecerTamTableroDOM(tamTablero);
    tab_cont.appendChild(tablero.tableroDOM);
    
    tablero.contadorBloqueosDOM.id = "contador";
    tab_cont.appendChild(tablero.contadorBloqueosDOM);
}

function Resultado(resultado)
{
    if(resultado == ESTADO_JUEGO_Enum.GANADO)
        cartel.textContent = "Ganaste";
    else
        cartel.textContent = "Perdiste";
    
    cartel.style.visibility = "visible";
}