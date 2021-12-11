"use strict"

window.onload = function(){Filtrado_entradas(2); document.getElementById("filtros").value = 2};

function Filtrado_entradas(filtro)
{
    const entradas = [ //1º: Nombre visible de la entrada; 2º: ID de la entrada y nombre del archivo ".htm"; (3º en adelante: etiquetas en el orden de los "value"s de "filtros".); 3º: Lenguaje; 4º: Categoría; 5º: Complejidad. Si una entrada no tiene etiquetas correspondientes a un filtro, debe incluir un string vacío en su lugar.
                    ["Base de datos de clientes", "BD_Clientes", "C", "Bases de datos", "Alta", "(sin clasificar)"],
                    ["Calculín", "Calculin", "HTML5", "Calculadoras", "Baja", "eventListeners"],
                    ["BuscaBombas", "Buscabombas", "HTML5", "Juegos", "Media", "Clases/Composicionalidad/eventListeners"],
                    ["Catalón", "Catalon", "PHP", "Bases de datos", "Alta", "(sin clasificar)"],
                    ["BlackJack", "BlackJack", "Assembler x8086", "Juegos", "Alta", "Manejo de archivos/Generador de números aleatorios/Modo video"],
                    ["CalculAssm", "CalculAssm", "Assembler x8086", "Calculadoras", "Baja", "(sin clasificar)"],
                    ["Batalla Naval", "Batalla_Naval", "HTML5", "Juegos", "Media", "eventListeners/Drag and Drop/Animaciones CSS"],
                    ["Este blog", "MDM_Blog", "HTML5/PHP", "Página web", "Media", "(sin clasificar)"],
                    ["Recorrido del caballo", "Rec_Caballo", "C", "Algoritmos", "Baja", "(sin clasificar)"],
    ]

    const etiquetas = new Set;

    for(let entrada of entradas)
    {
        let etiqs = entrada[filtro].split("/");

        etiqs.forEach((item) => {etiquetas.add(item);});
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
                cont_entradas.insertAdjacentHTML("beforeEnd", "<div class='entradas' onclick='Inserta_entrada(\"publicaciones/" + entr[1] + ".htm\")'><p class='texto entr' id='" + entr[1] + "'>" + entr[0] + "</p><div class='linea entr'></div></div>");
        }
    }
}
