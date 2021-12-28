"use strict"

window.onload = function(){Filtrado_entradas(2); document.getElementById("filtros").value = 2};

function Filtrado_entradas(filtro)
{
    const entradas = [ //1º: Nombre visible de la entrada; 2º: ID de la entrada y nombre del archivo ".htm"; (3º en adelante: etiquetas en el orden de los "value"s de "filtros".); 3º: Lenguaje; 4º: Categoría; 5º: Complejidad. Si una entrada no tiene etiquetas correspondientes a un filtro, debe incluir un string vacío en su lugar.
                    ["Este blog", "Mi_blog", "HTML5/PHP", "Página web", "Media", "AJAX/Responsive"],
                    ["logprop", "logprop", "Python", "Calculadoras/Librerías", "Media", "POO/Composicionalidad/Recursión/Expresiones regulares"],
                    ["BuscaBombas", "Buscabombas", "HTML5", "Juegos", "Media", "POO/Composicionalidad/eventListeners"],
                    ["BlackJack", "BlackJack", "Assembler x8086", "Juegos", "Alta", "Manejo de archivos/Generador de números aleatorios/Modo video"],
                    ["C-Gestor", "C-Gestor", "C", "Bases de datos", "Alta", "Aritmética de punteros/Memoria dinámica/Manejo de archivos"],
                    ["Batalla Naval", "Batalla_Naval", "HTML5", "Juegos", "Media", "eventListeners/Drag and Drop"],
                    ["Calculín", "Calculin", "HTML5", "Calculadoras", "Baja", "eventListeners"],
                    ["Catalón", "Catalon", "PHP", "Bases de datos", "Alta", "Sesiones/MySQL/AJAX/POO"],
                    ["CalculAssm", "CalculAssm", "Assembler x8086", "Calculadoras", "Baja", ""],
                    ["Recorrido del caballo", "Rec_Caballo", "C", "Algoritmos", "Baja", ""],
    ]

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
                cont_entradas.insertAdjacentHTML("beforeEnd", "<div class='entradas' onclick='Inserta_entrada(\"publicaciones/" + entr[1] + ".htm\")'><p class='texto entr' id='" + entr[1] + "'>" + entr[0] + "</p><div class='linea entr'></div></div>");
        }
    }
}
