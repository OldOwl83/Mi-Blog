function Inserta_entrada(arch_entrada)
{
    const pedido = new XMLHttpRequest();
    const cont_princ = document.getElementById("contenedor_princ");

    pedido.onload = function()
    {
        cont_princ.innerHTML = "";

        if(!this.responseText.includes("Error 404"))
        {
            cont_princ.insertAdjacentHTML("afterBegin", this.responseText);

            switch(arch_entrada)
            {
                case "publicaciones/Buscabombas.htm":
                    let script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "sitios/BuscaBombas/clase_Buscabombas.js";
                    document.body.appendChild(script);

                    script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "js/insertar_buscabombas.js";
                    document.body.appendChild(script);

                    break;
            }
        }else
            cont_princ.insertAdjacentHTML("afterBegin", "<h4>Página en construcción (" + encodeURI(arch_entrada) + ")</h4><p>Disculpe las molestias. Ya puede visitar las siguientes entradas: <ul><li>Sobre este blog</li><li>Contacto</li><li>Batalla Naval</li><li>BuscaBombas</li><li>Calculín</li><li>BlackJack</li>");
    }

    pedido.open("GET", arch_entrada, true);
    pedido.send();
}
