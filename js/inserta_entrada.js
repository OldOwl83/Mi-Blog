function Inserta_entrada(arch_entrada)
{
    const pedido = new XMLHttpRequest();
    const cont_princ = document.getElementById("contenedor_princ");

    pedido.onload = function()
    {
        cont_princ.innerHTML = "";

                // if(!this.responseXML.includes("Error 404"))
            cont_princ.appendChild(this.responseXML.getElementsByClassName("cont_publicaciones")[0]);

        // else
        //     cont_princ.insertAdjacentHTML("afterBegin", "<h4>Página en construcción (" + encodeURI(arch_entrada) + ")</h4><p>Disculpe las molestias. Ya puede visitar las siguientes entradas: <ul><li>Sobre este blog</li><li>Contacto</li><li>Batalla Naval</li><li>BuscaBombas</li><li>Calculín</li><li>BlackJack</li>");
    }

    pedido.open("GET", arch_entrada, true);
    pedido.responseType = "document";
    pedido.overrideMimeType("text/html");
    pedido.send();
}
