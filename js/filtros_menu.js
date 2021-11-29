"use strict"

let filtro = document.getElementById("filtros");
filtro.addEventListener("change", Filtrado_entradas, false);

Filtrado_entradas();

function Filtrado_entradas()
{
    const etiquetas = { //El nombre de las propiedades debe ser igual a los "values" de las <option> de #filtros.
                    Lenguajes: [2, "C/C++", "HTML5", "Assembler x8086", "PHP"],
                    Categoria: [3, "Bases de datos", "Juegos", "Calculadoras", "Página web"],
                    Complejidad: [4, "Alta", "Media", "Baja"],
    }

    const entradas = [
                    ["Base de datos de clientes", "BD_Clientes", "C/C++", "Bases de datos", "Alta"],
                    ["Calculadora de tablas de verdad", "Tablas_Verdad", "C/C++", "Calculadoras", "Alta"],
                    ["Calculín", "Calculin", "HTML5", "Calculadoras", "Media"],
                    ["Buscabombas", "Buscabombas", "HTML5", "Juegos", "Media"],
                    ["Catalón", "Catalon", "PHP", "Bases de datos", "Alta"],
                    ["BlackJack", "BlackJack", "Assembler x8086", "Juegos", "Alta"],
                    ["CalculAssm", "CalculAssm", "Assembler x8086", "Calculadoras", "Baja"],
                    ["Batalla Naval", "Batalla_Naval", "HTML5", "Juegos", "Media"],
                    ["Este blog", "MDM_Blog", "HTML5/PHP", "Página web", "Media"]
    ]

    const zona_etiquetas = document.getElementById("zona_etiquetas");

    zona_etiquetas.innerHTML = "";

    for(let etiq of etiquetas[filtro.value])
    {
        if(!(isNaN(Number(etiq))))
            continue;

        zona_etiquetas.insertAdjacentHTML("beforeEnd", "<div class='etiquetas'><p class='texto categ'>" + etiq + "</p><div class='linea categ'></div><div class='cont_entradas'></div></div>");

        let cont_entradas = zona_etiquetas.lastChild.lastChild;

        for(let entr of entradas)
        {
            if(entr[etiquetas[filtro.value][0]].includes(etiq))
                cont_entradas.insertAdjacentHTML("beforeEnd", "<div class='entradas' onclick='Inserta_entrada(\"publicaciones/" + entr[1] + ".htm\")'><p class='texto entr' id='" + entr[1] + "'>" + entr[0] + "</p><div class='linea entr'></div></div>");
        }
    }
}
