function Inserta_entrada(arch_entrada)
{
    const pedido = new XMLHttpRequest();
    const cont_princ = document.getElementById("contenedor_princ");

    pedido.onload = function()
    {
        cont_princ.innerHTML = "";

        if(this.status == 200)
        {
            cont_princ.insertAdjacentHTML("afterBegin", this.responseText);

            switch(arch_entrada)
            {
                case "publicaciones/Buscabombas.htm":

                    Insertar_Buscabombas();
                    break;
            }
        }else if(this.status == 404)
            cont_princ.insertAdjacentHTML("afterBegin", "<h4>Página en construcción (" + encodeURI(arch_entrada) + ")</h4><p>Disculpe las molestias. Ya puede visitar las siguientes entradas: <ul><li>Sobre este blog</li><li>Contacto</li><li>Batalla Naval</li><li>BuscaBombas</li><li>Calculín</li><li>BlackJack</li>");
        else
            cont_princ.insertAdjacentHTML("afterBegin", "<h4>Ocurrió un problema con el servidor. Disculpe las molestias</h4>");
    }

    pedido.open("GET", arch_entrada, true);
    pedido.send();
}
