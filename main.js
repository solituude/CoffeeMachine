let earnMoney = 550;
let hasWater = 400;
let hasMilk = 540;
let hasCoffeeBeans = 120;
let hasCups = 9;
const input = require('sync-input');
let conditionMachine = () => {
    console.log("The coffee machine has:\n" + hasWater + " ml of water\n"
        + hasMilk + " ml of milk\n" +
        + hasCoffeeBeans + " g of coffee beans\n" +
        + hasCups + " disposable cups\n$" +
        + earnMoney + " of money");
}
let makeEspresso = () => {
    if (hasWater - 250 < 0) {
        console.log("Sorry, not enough water!");
    }
    if (hasCoffeeBeans - 16 < 0) {
        console.log("Sorry, not enough coffee beans!");
    }
    if (hasCups - 1 < 0) {
        console.log("Sorry, not enough disposable cups");
    }
    else {
        console.log("I have enough resources, making you a coffee!");
        hasWater -= 250;
        hasCoffeeBeans -= 16;
        earnMoney += 4;
        hasCups -= 1;
    }
}
let makeLatte = () => {
    if (hasWater - 350 < 0) {
        console.log("Sorry, not enough water!");
    }
    else if (hasCoffeeBeans - 20 < 0) {
        console.log("Sorry, not enough coffee beans!");
    }
    else if (hasMilk - 75 < 0){
        console.log("Sorry, not enough milk!")
    }
    else if (hasCups - 1 < 0) {
        console.log("Sorry, not enough disposable cups");
    }
    else {
        console.log("I have enough resources, making you a coffee!");
        hasWater -= 350;
        hasMilk -= 75;
        hasCoffeeBeans -= 20;
        earnMoney += 7;
        hasCups -= 1;
    }
}
let makeCappuccino = () => {
    if (hasWater - 200 < 0) {
        console.log("Sorry, not enough water!");
    }
    else if (hasCoffeeBeans - 12 < 0) {
        console.log("Sorry, not enough coffee beans!");
    }
    else if (hasMilk - 100 < 0){
        console.log("Sorry, not enough milk!")
    }
    else if (hasCups - 1 < 0) {
        console.log("Sorry, not enough disposable cups");
    }
    else {
        console.log("I have enough resources, making you a coffee!");
        hasWater -= 200;
        hasMilk -= 100;
        hasCoffeeBeans -= 12;
        earnMoney += 6;
        hasCups -= 1;
    }
}

let isExit = false;
while (!isExit){
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input('>');
    switch (action){
        case "buy":
            console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main");
            let choiceCoffee = input('>');

            switch (choiceCoffee){
                case '1':
                    makeEspresso();
                    break;
                case '2':
                    makeLatte();
                    break;
                case '3':
                    makeCappuccino();
                    break;
                case "main":
                    break;
            }
            break;
        case "fill":
            console.log("Write how many ml of water you want to add: ");
            hasWater += parseInt(input('>'));
            console.log("Write how many ml of milk you want to add: ");
            hasMilk += parseInt(input('>'));
            console.log("Write how many grams of coffee beans you want to add:");
            hasCoffeeBeans += parseInt(input('>'));
            console.log("Write how many disposable cups you want to add: ");
            hasCups += parseInt(input('>'));
            break;
        case "take":
            console.log("I gave you $", earnMoney);
            earnMoney = 0;
            break;
        case "remaining":
            conditionMachine();
            break;
        case "exit":
            isExit = true;
            break;
    }

}