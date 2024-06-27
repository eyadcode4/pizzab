import promptSync from 'prompt-sync';
const prompt = promptSync();

let harina = '600 g Harina de fuerza';
let sal = '1 cucharadita de sal fina';
let levadura = '30 gramos de levadura fresca';
let agua = '2.5 tazas de agua tibia';
let aceite = '2 cucharadas soperas de aceite de oliva';
let masa = 'masa';
let tomate = 'Salsa de tomate';
let queso = 'Mozzarella';
let peperoni = 'peperoni';
let jamon = 'jamon';
let berenjena = 'berenjena';
let quesoAzul = 'queso cabrales';
let acitunas = "4 Aceitunas Negras"

/*use const porque la lista seran la misma por pizza*/
const pizzasDisponibles = {
    peperoni: [tomate, queso, peperoni],
    margarita: [tomate, queso, quesoAzul],
    vegetal: [tomate, queso, berenjena, acitunas]
};

function app() {
    const pizzaDeseada = prompt('Elige tu pizza (margarita, vegetal, peperoni) ').toLowerCase();

    if (!pizzasDisponibles[pizzaDeseada]) {
        console.log(` ${pizzaDeseada} no esta disponible en este momento`);
        return;
    }

    let listaIngredientes = pizzasDisponibles[pizzaDeseada];

    console.log(`Pizza ${pizzaDeseada} en preparación`);
    pesarIngredientes(harina + ",", sal + ",", levadura + ",", agua + ",", aceite);
    aguaLevadura();
    addAceite();
    addHarina();
    addSal();
    hacerMasa();
    descansar();
    cortar();
    darForma();
    fourProporcions();
    bases();
    Reposo();
    formaMasa();
    addTomate();
    addMozzarella();
    addPeporone();
    addAceitunas();
    hornoOn();
    anadirIngredientes(listaIngredientes);
    hornear();
    pizzaLista();
  
    function pesarIngredientes(ing1, ing2, ing3, ing4, ing5) {
        console.log("preparar ingredientes:", ing1, ing2, ing3, ing4, ing5);
    }
   
    function aguaLevadura(){
        console.log("mezclar "+ levadura +" con " + agua);
    }
    function addAceite(){
        console.log("anadir " + aceite );
    }
    function addHarina(){
        console.log("anadir " + harina );
    }
    
    function addSal(){
        console.log("añadir "+ sal);
    }
    function hacerMasa(){
        console.log("amasar bien hasta que deje de ser pegajosa");
    }
    function descansar(){
        console.log("tapar la masa y dejarla descansar 60 min");
    }
    function cortar(){
        console.log("corta la masa en 4 partes");
    }
    function darForma(){
        console.log("darle forma a la masa para 4 pizzas");
    }
    function fourProporcions(){
        console.log("4 porciones obtenidas");
    }
    function bases(){
        console.log("base para 1 pizza");
    }
    function Reposo(){
        console.log(" Dejar la base para 1 pizza reposar durante 45 min ");
    }
    function formaMasa(){
        console.log("Base con forma circular obtenida");
    }
    function addTomate(){
        console.log("añadido Salsa de tomate");
    }
    function addMozzarella(){
        console.log("añadido Mozzarella");
    }
    function addPeporone(){
        console.log("añadido Pepperoni");
    }
    function addAceitunas(){
        console.log("añadidas 4 Aceitunas Negras");
    }
    
    function hornoOn(){
        console.log("calentamos el horno a 400ºC");
    }
        
    function anadirIngredientes(listaIngredientes){
        for (let x = 0; x < listaIngredientes.length; x++) {
            console.log("Poner " + listaIngredientes[x]);
        }
    }
    function hornear(){
        console.log("Horneando la pizza durante 10 min");
    }
    function pizzaLista(){
        console.log("Pizza Lista para entregarla al cliente");
    }
}

app();