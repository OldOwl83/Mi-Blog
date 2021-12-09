/*
*               DEFINICIÓN DE LA CLASE BUSCABOMBAS

*   La clase Buscabombas es una plantilla para la generación de tableros 
de juego de un clon del Buscaminas. El tablero es devuelto por el constructor 
de la clase como un elemento del DOM tipo "div", personalizable desde el 
punto de vista de sus atributos HTML y de su aspecto gráfico (salvo en lo 
que respecta a sus dimensiones, que mantienen una proporción de 1:2; el 
tamaño, sin embargo, es modificable mediante un método público). El tablero 
en sí no viene con un ID o una CLASE predefinidos, pero los casilleros que 
lo conforman, sí. No debe modificarse el ID de los casilleros, ya que son 
esenciales para el funcionamiento del juego. Además, los casilleros vienen 
con clases predefinidas, útiles para diferenciar el aspecto visual de los 
mismos según su estado en el desarrollo del juego (ver interfaz pública).

*   Desde el punto de vista de la implementación, la definición de esta clase 
intenta mantener bien diferenciados el nivel lógico del juego y el 
mantenimiento de los elementos DOM que permiten la interacción con el jugador; 
definiendo métodos que corresponden a uno u otro nivel, y que sólo se 
comunican entre ellos por parámetros (en los casos en que intervienen en el 
desarrollo del juego; estos métodos "interactivos" son DisparoDOM(), 
DisparoLogico() y ToqueCasilleroDOM()). Los métodos que incluyen "DOM" en el 
nombre pertenecen al segundo nivel; el resto son todos lógicos.

*   Además, por fuera de la propia clase, se definen algunos objetos que 
funcionan como constantes simbólicas tipo ENUM, y un constructor de objetos 
"CasilleroLogico", que sirven como estructuras de datos utilizadas internamente 
por la clase "Buscabombas".


*           INTERFAZ PÚBLICA de la CLASE BUSCABOMBAS

* Constantes simbólicas tipo ENUM:

            TAMANIO_TABLERO_Enum:
                    Define tres tamaños posibles para un tablero de juego de 
                    la clase Buscabombas: .GRANDE, .MEDIANO y .CHICO. Los 
                    valores numéricos correspondientes refieren a la cantidad 
                    de casilleros que componen el tablero, y siempre deben ser
                    valores de la imagen de la función f(x) = 2*x^2
                    
            NIVEL_JUEGO_Enum:
                    Define tres niveles de dificultad para el tablero de juego:
                    .DIFICIL, .INTERMEDIO y .FACIL. Los valores numéricos 
                    correspondientes refieren a la proporción entre bombas y
                    casilleros del tablero, expresada en el rango 0 a 1.
                    
            ESTADO_JUEGO_Enum:
                    Define tres estados posibles para el tablero de juego:
                    .ABIERTO, .GANADO y .PERDIDO. El primero refiere a un estado 
                    de inconclusión del juego, mientras que los dos segundos 
                    son los valores devueltos por el juego cuando concluye.
            
            
* Llamada al constructor: 

            new Buscabombas(TAMANIO_TABLERO_Enum, NIVEL_JUEGO_Enum, CallBack_recibe_resultado): 
                    Devuelve un elemento "div" del DOM que representa un tablero 
                    listo para insertar en el documento HTML y jugar. Al concluir el 
                    juego, el objeto creado devuelve a la función del tercer parámetro 
                    la propiedad pública ".estado" con los valores 
                    "ESTADO_JUEGO_Enum.GANADO" o "ESTADO_JUEGO_Enum.PERDIDO".

* Propiedades (todas deberían tratarse como de sólo lectura):

            .estado = ESTADO_JUEGO_Enum: 
                    Indica si el juego está inconcluso (ABIERTO) o no (GANADO o PERDIDO).
                
            .tableroDOM = elemento DOM: 
                    Esta variable contiene al elemento DOM que oficia de tablero 
                    de juego y sobre el cual se desarrolla todo el proceso. Es un 
                    elemento tipo "div", al que se le puede asignar un ID, una 
                    clase o cualquier otro atributo HTML, salvo el tamaño (width 
                    y height), que debería establecerse mediante el método público
                    "establecerTamTableroDOM()". También puede personalizarse con 
                    estilos CSS (nuevamente, evitando alterar el tamaño), sin 
                    afectar la propiedad "display" ni los modificadores del "grid".
                        
            .contadorBloqueosDOM = elemento DOM:
                    Esta variable contiene un elemento tipo "div" que lleva la 
                    cuenta de la cantidad de casilleros que fueron bloqueados con 
                    el botón derecho del ratón (y que, por tanto, el jugador 
                    presume que contienen bombas). Las únicas propiedades CSS 
                    predefinidas para este objeto son "display" y los modificadores 
                    "grid" para centrar el texto. Todos los demás atributos HTML y 
                    CSS pueden ser personalizados por el usuario.
                
* Métodos:

            .EstablecerTamTableroDOM(pxAncho): 
                    Es la manera regular de modificar el tamaño de ".tableroDOM" 
                    (por defecto tiene de ancho la cantidad de casilleros por fila
                    multiplicado por 30px). Como argumento recibe un número entero 
                    que representa el ancho total del tablero en píxeles.
                        
* Clases de casilleros:

            El juego determina clases básicas para los casilleros DOM que integran
            el tablero DOM. Con los mismos, puede diferenciarse los estilos CSS
            para cada estado de las casillas. Las clases predefinidas son:
            
            - "casillero": 
                    Clase común a todos los casilleros, pensada para establecer
                    propiedades comunes, como bordes o márgenes.
            
            - "oculto":
                    Clase correspondiente a los casilleros que aun no han sido
                    disparados por el jugador. Al inicio, todo los casilleros
                    pertenecen a esta clase.
                    
            - "bloqueado":
                    Clase correspondiente a los casilleros activos marcados por 
                    el jugador con el botón derecho del ratón. Los mismos no pueden
                    ser disparados, aunque sí pueden ser desbloqueados de la misma
                    manera como se bloquearon. Se recomienda diferenciarlos con 
                    un tono del background ligeramente diferente del de "oculto".
                    
            - "tocado":
                    Clase correspondiente a los casilleros disparados por el 
                    jugador. Éstos quedan inactivos, y si tienen casilleros 
                    con bombas alrededor, muestran la suma de los mismos. Se recomienda
                    diferenciarlos de los "ocultos" con un color del background
                    notablemente distinto.
                    
            - "bomba":
                    Clase correspondiente a los casilleros que contienen bomba, 
                    al momento en que el jugador ha disparado sobre una bomba y, 
                    por tanto, ha perdido el juego. Esta clase permite mostrar al
                    jugador los casilleros prohibidos una vez concluido el juego.
                    Previamente, estos casilleros pertenecen a la clase "oculto".
                    
            - Adicionalmente, se recomienda distinguir a los casilleros incluidos
            en el selector CSS ".bloqueado.bomba" para que el jugador pueda advertir
            si bloqueó casilleros incorrectamente, al momento de la derrota.
*/

"use strict";

//Objetos constantes usados como enums y constantes simbólicas
const TAMANIO_TABLERO_Enum = {GRANDE: 450, MEDIANO: 200, CHICO: 98}; //Los tamaños deben ser valores de f(x) = 2x^2, y representan cantidad de casilleros
Object.freeze(TAMANIO_TABLERO_Enum);

const NIVEL_JUEGO_Enum = {DIFICIL: 0.25, INTERMEDIO: 0.2, FACIL: 0.15}; //Porcentaje bombas/casilleros expresado entre 0 y 1
Object.freeze(NIVEL_JUEGO_Enum);

const ESTADO_JUEGO_Enum = {ABIERTO: 1, GANADO: 2, PERDIDO: 3};
Object.freeze(ESTADO_JUEGO_Enum);

//Función constructora de objetos CasilleroLogico
function CasilleroLogico(x, y)
{
    this.pos_x = x;
    this.pos_y = y;
    this.bomba = false;
    this.bombas_rededor = 0;
    this.tocado = false;
}

//Definición de la clase Buscabombas
class Buscabombas
{
	constructor(tam, nivel, RetornoResultado)
	{
        //Declaraciones y definiciones de variables lógicas
		this.tableroLogico = [];
		this.estado = ESTADO_JUEGO_Enum.ABIERTO;

		if(tam == TAMANIO_TABLERO_Enum.GRANDE || tam == TAMANIO_TABLERO_Enum.MEDIANO || tam == TAMANIO_TABLERO_Enum.CHICO)
			this.tam = tam;
		else
			throw "Tamaño de tablero inválido.";

		if(nivel == NIVEL_JUEGO_Enum.DIFICIL || nivel == NIVEL_JUEGO_Enum.INTERMEDIO || nivel == NIVEL_JUEGO_Enum.FACIL)
			this.bombas = Math.trunc(this.tam * nivel)
		else
			throw "Dificultad inválida";
        
        this.contadorTocados = this.tam - this.bombas; //Contador para evaluar el triunfo
        
        //Variables para desambiguar el valor de "this" en las llamadas a las funciones que escuchan eventos
        this.GestorDisparo = this.GestorEventoDisparo.bind(this);
        this.GestorBloqueo = this.BloqueoCasilleroDOM.bind(this);
        
        this.Final = RetornoResultado; //Variable para poder llamar al CallBack pasado por parámetro desde las funciones de culminación del juego
        
        //Llamada a funciones preparatorias del juego
		this.RellenarTableroLogico();

		this.DistribuirBombas();

		this.CalcularBombasRededor();

		this.CrearTableroDOM();

        this.CrearContadorDOM();
	}

    //Creación de los casilleros lógicos en el tablero lógico
	RellenarTableroLogico()
	{
		for(let i = 0; i < this.tam; i++)
			this.tableroLogico.push(new CasilleroLogico(Math.trunc(i / Math.trunc(Math.sqrt(this.tam * 2))), i % Math.trunc(Math.sqrt(this.tam * 2))));
	}

    //Reparto aleatorio de la cantidad de bombas determinada por el NIVEL_JUEGO
	DistribuirBombas()
	{
		let contador = 0;
		let nro_random;

		do
		{
			nro_random = Math.trunc(Math.random() * this.tam);

			if(!(this.tableroLogico[nro_random].bomba))
			{
				this.tableroLogico[nro_random].bomba = true;
				contador++;
			}

		}while(contador < this.bombas);
	}

    //Cada casillero lógico guarda la cantidad de bombas que tiene alrededor
	CalcularBombasRededor()
	{
		let contador, i, j;

		for(let casillero of this.tableroLogico)
		{
			contador = 0;

			for(casillero.pos_x == 0 ? i = 0 : i = -1; casillero.pos_x == Math.trunc((this.tam - 1) / Math.trunc(Math.sqrt(this.tam * 2))) ? i <= 0 : i <= 1; i++)
				for(casillero.pos_y == 0 ? j = 0 : j = -1; casillero.pos_y == (this.tam - 1) % Math.trunc(Math.sqrt(this.tam * 2)) ? j <= 0 : j <= 1; j++)
					if(this.tableroLogico[(casillero.pos_x + i) * Math.trunc(Math.sqrt(this.tam * 2)) + casillero.pos_y + j].bomba && (i != 0 || j != 0))
						contador++;

			casillero.bombas_rededor = contador;
		}
	}

    //Creación del tablero como elemento del DOM. Crea la propiedad pública "tableroDOM".
	CrearTableroDOM()
	{
		this.tableroDOM = document.createElement("div");

		this.tableroDOM.style.display = "grid";

		this.tableroDOM.style.gridTemplateColumns = "repeat(" + this.tam / Math.trunc(Math.sqrt(this.tam / 2)) + ", 1fr";

		for(let casillero of this.tableroLogico) //Creación de los casilleros como elementos del DOM.
		{
			let casDOM = document.createElement("div");
			casDOM.id = "_" + casillero.pos_x + "_" + casillero.pos_y; //Formación del ID de cada casillero
			casDOM.className = "casillero oculto";
            
            if(casillero.bomba)
                casDOM.classList.add("b"); //La clase "b" permite identificar internamente a los casilleros DOM con bomba, mientras pertenezcan a la clase "oculto". Esta marca evita tener que generar un nuevo ciclo sobre los casilleros al momento de la derrota, frente a la necesidad de subsumirlos bajo la clase "bomba".

            //Propiedades para centrar el número de bombas alrededor dentro del casillero DOM
            casDOM.style.display = "grid";
            casDOM.style.alignItems = "center";
            casDOM.style.textAlign = "center";

            //Escucha de eventos
			casDOM.addEventListener("click", this.GestorDisparo, false);
			casDOM.addEventListener("contextmenu", this.GestorBloqueo, false);

			this.tableroDOM.appendChild(casDOM); //Incorporación de cada casillero al tablero DOM
		}

        this.EstablecerTamTableroDOM((Math.trunc(Math.sqrt(this.tam * 2))) * 30); //Tamaño por defecto
	}

    //Método público para modificar el tamaño del tablero DOM
	EstablecerTamTableroDOM(pxAncho)
	{
		let casDOM = this.tableroDOM.childNodes;

        for(let casillero of casDOM)
            {
                casillero.style.boxSizing = "border-box";
                casillero.style.width = (pxAncho / (this.tam / Math.trunc(Math.sqrt(this.tam / 2)))) + "px";
                casillero.style.height = (pxAncho / (this.tam / Math.trunc(Math.sqrt(this.tam / 2)))) + "px";

                casillero.style.fontSize = (pxAncho / (this.tam / Math.trunc(Math.sqrt(this.tam / 2)))) * 0.55 + "px";
            }

        this.tableroDOM.style.width = pxAncho + "px";
	}

    //Generador del contador DOM de casilleros del DOM bloqueados
    CrearContadorDOM()
    {
        this.contadorBloqLogico = this.bombas;

        this.contadorBloqueosDOM = document.createElement("div");

        //Propiedades para centrar la cuenta
        this.contadorBloqueosDOM.style.display = "grid";
        this.contadorBloqueosDOM.style.alignItems = "center";
        this.contadorBloqueosDOM.style.textAlign = "center";

        this.contadorBloqueosDOM.textContent = this.contadorBloqLogico;
    }

    //Función puente para liberar al parámetro de DisparoDOM() de la necesidad de estar vinculado a un evento, ya que esa función es llamada también por el disparo lógico sin estar asociado a una escucha.
    GestorEventoDisparo(e)
    {
        this.DisparoDOM(e.target);
    }

    //Método de reacción del tablero del DOM a la interacción del usuario con el botón izquierdo del ratón.
    DisparoDOM(casilleroDOM)
    {
		if(casilleroDOM.className.includes("bloqueado") || casilleroDOM.className.includes("tocado"))
			return; //Si el casillero disparado está bloqueado o ya fue disparado previamente, no corresponde proseguir. Si bien los casilleros disparados previamente no están más a la escucha de este evento, pueden ser testeados por un casillero "blanco" alrededor suyo.

        //Desactivación de los casilleros disparados
        casilleroDOM.removeEventListener("click", this.GestorDisparo, false);
        casilleroDOM.removeEventListener("contextmenu", this.GestorBloqueo, false);
        casilleroDOM.addEventListener("contextmenu", function(e){e.preventDefault();}, false);

        //Se pasa la coordenada del disparo al desarrollo lógico.
		let coord = casilleroDOM.id.split("_");

        this.DisparoLogico(this.tableroLogico[Number(coord[1]) * Math.trunc(Math.sqrt(this.tam * 2)) + Number(coord[2])]);
    }

    //Método principal de desarrollo del juego en el nivel lógico, llamado siempre por el cambio de estado de un casillero del DOM.
    DisparoLogico(casilleroLogico)
	{
		if(casilleroLogico.bomba) //Si hay bomba, explota.
        {
			this.Explosion();

            return;
        }
        
        casilleroLogico.tocado = true; //Cambio de estado de la casilla lógica
        this.ToqueCasilleroDOM(casilleroLogico); //Llamada al cambio de estado de la casilla DOM
        
        if(this.EvaluarTriunfo()) //Pregunta si hay triunfo
            return;

        if(!casilleroLogico.bombas_rededor) //Si es un casillero "blanco", se dispara automáticamente sobre todos los casilleros alrededor.
		{
			let i, j;

			for(casilleroLogico.pos_x == 0 ? i = 0 : i = -1; casilleroLogico.pos_x == Math.trunc((this.tam - 1) / Math.trunc(Math.sqrt(this.tam * 2))) ? i <= 0 : i <= 1; i++)
				for(casilleroLogico.pos_y == 0 ? j = 0 : j = -1; casilleroLogico.pos_y == (this.tam - 1) % Math.trunc(Math.sqrt(this.tam * 2)) ? j <= 0 : j <= 1; j++)
					if(i != 0 || j != 0)
						this.DisparoDOM(document.getElementById("_" + (casilleroLogico.pos_x + i) + "_" + (casilleroLogico.pos_y + j)));
		}
	}

    //Modificación del estado de un casillero DOM
    ToqueCasilleroDOM(casilleroLogico)
    {
        let casilleroDOM = document.getElementById("_" + (casilleroLogico.pos_x) + "_" + (casilleroLogico.pos_y));

        casilleroDOM.className = "casillero tocado";

        if(casilleroLogico.bombas_rededor) //Las casillas con bombas alrededor despliegan su cantidad.
            casilleroDOM.textContent = casilleroLogico.bombas_rededor;
    }

    //Método para el cambio de estado bloqueado/desbloqueado de las casillas, y mantenimiento del contador de bloqueados
	BloqueoCasilleroDOM(e)
	{
        e.preventDefault();

        if(e.target.className.includes("oculto"))
            this.contadorBloqueosDOM.textContent = --this.contadorBloqLogico;
        else if(e.target.className.includes("bloqueado"))
            this.contadorBloqueosDOM.textContent = ++this.contadorBloqLogico;
        else
            return false;

        e.target.classList.toggle("oculto");
        e.target.classList.toggle("bloqueado");
	}

    //Evaluación de triunfo; lleva una cuenta de las casillas disparadas con éxito
    EvaluarTriunfo()
    {
        if(!(--this.contadorTocados))
        {
            this.DesactivacionTableroDOM();

            this.Final(this.estado = ESTADO_JUEGO_Enum.GANADO); //Se devuelve el nuevo estado del juego al CallBack pasado al constructor por parámetros.
        }
    }
    
    //Gestión de la derrota
	Explosion()
	{
		this.DesactivacionTableroDOM(true);
        
        this.Final(this.estado = ESTADO_JUEGO_Enum.PERDIDO); //Se devuelve el nuevo estado del juego al CallBack pasado al constructor por parámetros.
	}
    
    //Cancelación de las escuchas de eventos de todas las casillas para dejar al tablero muerto. Si el argumento declara la derrota, se le asigna la clase "bomba" a los casilleros con bomba, para su tratamiento de estilo.
    DesactivacionTableroDOM(derrota = false)
    {
        let casillerosDOM = document.getElementsByClassName("casillero");
        
        for(let casillero of casillerosDOM)
        {
            casillero.removeEventListener("click", this.GestorDisparo, false);
            casillero.removeEventListener("contextmenu", this.GestorBloqueo, false);
            casillero.addEventListener("contextmenu", function(e){e.preventDefault();}, false);
            
            if(derrota && casillero.classList.contains("b"))
                casillero.classList.add("bomba");
        }
    }
}