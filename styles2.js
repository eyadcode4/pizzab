import PromptSync from "prompt-sync";

const ingredients = ["harina", "sal", "aguaTibia", "aceite", " LevaduraFresca " ]
const toping = ["salsa  de tomate", "mazurela", "atun" ]
const pizzaType = [{name: "peperoni", ingredientsTopping: ["tomate", "mazorella", "atun"]}, {name: "margarita", ingredientsTopping: ["tomate", "mazorella"]}]
let pizza = ""

function mixingridiente(){
    console.log( "add harina " + integradient[0] + "add levadura  mas " + integradient[1] + "add agua" + integradient[2] + "add sal" + integradient[3] + "add aceite " + integradient[4])
}
function knead(){
    console.log("mix all ingredients togather")
}
function pizzaRest()
{
    console.log("dejar la masa reposar durante 90 min");
}
function toppigAdd(){
    console.log("add topping items")
}
function hornear(){
    console.log("hornear en temperatuea 250 durante 20min")
}
function app() {
    const prompt = PromptSync();
    const pizzaName = prompt(" what Are you need ");
    let result = makePizza(pizzaName);
    result.then((resolve) => {
    if (resolve === undefined) deliverPizza();
});
}
app()
console.log("dejar la masa reposar durante 90 min");