let burger = document.querySelector(".burger")

let parsedBurger = parseFloat("parsedBurger")

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let pickaxeCost = document.querySelector('.pickaxe-cost')
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
let pickaxeLevel = document.querySelector(".pickaxe-level")
let pickaxeIncrease = document.querySelector(".pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)


let minerCost = document.querySelector('.miner-cost')
let parsedMinerCost = document.querySelector(minerCost.innerHTML)
let minerLevel = document.querySelector(".miner-level")
let minerIncrease = document.querySelector(".miner-increase")
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML)

let gpc = 1;

let gps = 0;

function incrementBurger() {
    parsedBurger += gpc;
    burger.innerHTML = Math.round(parsedBurger += gpc);
}

function buyClicker() {
    if  (parsedBurger >= parsedClickerCost) {
        burger.innerHTML = Math.round(parsedBurger -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}


function buyPickaxe() {
    if (parsedBurger >= parsedPickaxeCost) {
        burger.innerHTML = Math.round(parsedBurger -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        gps += parsedPickaxeIncrease

        parsedPickaxeCost *= 1.18;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}

function buyMiner() {
    if (parsedBurger >= parsedMinerCost) {
        burger.innerHTML = Math.round(parsedBurger -= parsedMinerCost);

        minerLevel.innerHTML ++

        parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2))
        minerIncrease.innerHTML = parsedMinerIncrease
        gpc += parsedMinerIncrease

        parsedMinerCost *= 1.18;
        minerCost.innerHTML = Math.round(parsedMinerCost)
    }
}

setInterval (() => {
    parsedBurger += gps / 10
    donut.innerHTML = Math.round(parsedBurger)
    gpcText.innerHTML = Math.round(gpc)
    gpsText.innerHTML = Math.round(gps);
}, 100)