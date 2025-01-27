let burger = document.querySelector(".burger")

let parsedBurger = parseFloat("parsedBurger")

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let gpc = 1;

let gps = 0;

function incrementBurger() {
    parsedBurger += gpc;
    burger.innerHTML = Math.round(parsedBurger += gpc);
}

function buyClicker() {
    if (parsedBurger >= parsedClickerCost) {
        burger.innerHTML = Math.round(parsedBurger -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease *
        1.03).toFixed(2))

        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease
        
        parsedClickerCost += 1.18;
        clickerCost.innerHTML = Math.random(parsedClickerCost)
    }
}