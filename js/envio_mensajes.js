function Enviar_mensaje()
{
    let cont_princ = document.getElementById("contenedor_princ");

    let form = new FormData(document.getElementById("form_contacto"));
    let pedido = new XMLHttpRequest();

    pedido.onload = function()
    {
        cont_princ.innerHTML = "";
        cont_princ.insertAdjacentHTML("afterBegin", this.responseText);
    };

    pedido.open("POST", `${ origen_URL }backend/buzon_msg.php`, true);
    pedido.send(form);
}
