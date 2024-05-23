const harina = 1;
const sal = 0.025;
const aguaTibia = 0.6;
const aceite = 0.02; 
const LevaduraFresca = 0.03;  
const bakeTime = 10;
let pizza = ""
/* puede hacer los en un array*/
const ingredients = ["salsa  de tomate", "mazurela", "atun" ]

function mixingridiente(){
    console.log( "add harina " + harina + "add levadura  mas " + LevaduraFresca + "add agua" + aguaTibia + "add sal" + sal + "add aceite " + aceite);
}
function knead(){
    console.log(" knead all ingredients")
}
function makeDough()
{
    mixingridiente();
    const result = knead();
    return result
}
function makePizza()
{
    const base = makeDough();
    console.log(base);
    console.log("dejar la " + base + "reposar durante 90 min");
    giveCirclarShape();
    addIngredients(ingredients);
    bakeTime();
}
function app() {
    makePizza();
    deliverOrder(pizza)
}
app()




