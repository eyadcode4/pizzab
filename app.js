import PromptSync from "prompt-sync";

const ingredients = ["harina", "sal", "aguaTibia", "aceite", " LevaduraFresca " ];
const toping = ["salsa  de tomate", "mazurela", "atun" ];
const pizzaType = [{name: "peperoni", ingredientsTopping: ["tomate", "mazorella", "atun"]}, {name: "margarita", ingredientsTopping: ["tomate", "mazorella"]}];
let pizza = ""



function app ( ){
    const prompt = PromptSync();
    const pizzaName = prompt("elige tu pizzaType: ");
    let result = makePizza(pizzaName);
}
function  makePizza(){

    function mixingridiente(){
    console.log( "add harina " + ingredients[0] + "add levadura  mas " + ingredients[1] + "add agua" + ingredients[2] + "add sal" + ingredients[3] + "add aceite " + ingredients[4])
}
    function knead(){
    console.log("mix all ingredients togather");
}
    function pizzaRest(){
    console.log("dejar la masa reposar durante 90 min");
}
    function toppigAdd(){
    console.log("add topping items" + toping[0] + toping[1] + toping[2]);
}
    function hornear(){
    console.log("hornear en temperatuea 250 durante 20min");
}
}


app();
