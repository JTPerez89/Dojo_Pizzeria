function pizzaOven(crustType, sauceType, cheese, toppings) {
    let pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

function selector(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function randomPizza() {
    let crustType = ['Neapolitan', 'New York Style', 'Cheese-Stuffed Crust', 'Thick Crust', 'Deep Dish', 'Hand Tossed'];
    let sauceType = ['Pesto', 'White Garlic Sauce', 'Marinara Sauce', 'BBQ', 'Buffalo Sauce', 'Garlic Ranch Sauce', 'No Sauce'];
    let cheese = ['Mozzarella', 'Provolone', 'Parmesan', 'Ricotta', 'Feta', 'No Cheese'];
    let toppings = ['Pepperoni', 'Mushroom', 'Sausage', 'Chicken', 'Pineapple', 'No Toppings'];
    
    let pizza = {};
    pizza.crust = crustType[selector(1, 7)];
    pizza.sauce = sauceType[selector(1, 7)];
    pizza.cheese = cheese[selector(1, 6)];
    pizza.toppings = toppings[selector(1, 6)];
    return pizza;
}

let p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

let p2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushroom', 'olives', 'onions']);
console.log(p2);

let p3 = pizzaOven('wheat', 'herb pesto', ['mozzarella', 'feta'], ['spinach', 'red onion', 'yam', 'tomatoe']);
console.log(p3);

let p4 = pizzaOven('hand tossed', 'marinara', 'mozarella', 'pineapple');
console.log(p4);

let p5 = randomPizza();
console.log(p5);