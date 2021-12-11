function Insertar_Buscabombas()
{
    let tablero = new Buscabombas(TAMANIO_TABLERO_Enum.MEDIANO, NIVEL_JUEGO_Enum.FACIL, function(){});
    let cont_tablero = document.getElementById("tablero_BuscaBombas");

    tablero.tableroDOM.id = "tablero";
    tablero.EstablecerTamTableroDOM(window.innerWidth / 2.3);
    cont_tablero.appendChild(tablero.tableroDOM);

    tablero.contadorBloqueosDOM.id = "contador";
    cont_tablero.appendChild(tablero.contadorBloqueosDOM);
}
