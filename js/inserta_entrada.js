function Inserta_entrada(arch_entrada)
{
    let pedido = new XMLHttpRequest();
    let cont_princ = document.getElementById("contenedor_princ");

    pedido.onload = function()
    {
        cont_princ.innerHTML = "";
        cont_princ.insertAdjacentHTML("afterBegin", this.responseText);
    }

    pedido.open("GET", arch_entrada, true);
    pedido.send();
}
