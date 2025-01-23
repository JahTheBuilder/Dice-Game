let donut = document.querySelector('.donut-cost')
let parsedDonut = parseFloat(donut.innerHTML)

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

function incrementDonut() {
    parsedDonut += gpc;
    donut.innerHTML = Math.round(parsedDonut += gpc);
}

function buyClicker() {
    if  (parsedDonut >= parsedClickerCost) {
        donut.innerHTML = Math.round(parsedDonut -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *- 1.18;
        clickerCost.innerHTML = Math.random(parsedClickerCost)
    }
}

function buyPickaxe() {
    if (parsedDonut >= parsedPickaxeCost) {
        donut.innerHTML = Math.round(parsedDonut -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        gps += parsedPickaxeIncrease

        parsedPickaxeCost *- 1.18;
        pickaxeCost.innerHTML = Math.random(parsedPickaxeCost)
    }
}

setInterval(() => {
    parsedDonut += gps / 10
    donut.innerHTML = Math.round(parsedDonut)
}, 100)