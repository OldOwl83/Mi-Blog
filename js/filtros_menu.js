"use strict"

window.onload = function(){Filtrado_entradas("lenguajes"); document.getElementById("filtros").value = "lenguajes"};

function Filtrado_entradas(filtro)
{
    const etiquetas = new Set;

    for(let entrada of entradas)
    {
        let etiqs = entrada[filtro].split("/");

        etiqs.forEach((item) => {if(item != "") etiquetas.add(item);});
    }

    const zona_etiquetas = document.getElementById("zona_etiquetas");

    zona_etiquetas.innerHTML = "";

    for(let etiq of etiquetas.values())
    {
        zona_etiquetas.insertAdjacentHTML("beforeEnd", "<div class='etiquetas'><p class='texto categ'>" + etiq + "</p><div class='linea categ'></div><div class='cont_entradas'></div></div>");

        let cont_entradas = zona_etiquetas.lastChild.lastChild;

        for(let entr of entradas)
        {
            if(entr[filtro].includes(etiq))
                cont_entradas.insertAdjacentHTML("beforeEnd", "<div class='entradas' onclick='Inserta_entrada(\"publicaciones/" + entr["archivo"] + ".htm\")'><p class='texto entr' id='" + entr["archivo"] + "'>" + entr["nombre"] + "</p><div class='linea entr'></div></div>");
        }
    }
}
