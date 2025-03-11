let ice = document.querySelector(".ice-cost");
let parsedIce = parseFloat("ice.innerHTML");

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let pickaxeCost = document.querySelector('.pickaxe-cost');
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML);
let pickaxeLevel = document.querySelector(".pickaxe-level");
let pickaxeIncrease = document.querySelector(".pickaxe-increase");
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML);

let minerCost = document.querySelector('.miner-cost');
let parsedMinerCost = document.querySelector(minerCost.innerHTML);
let minerLevel = document.querySelector(".miner-level");
let minerIncrease = document.querySelector(".miner-increase");
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML);

let gpc = 1;

function incrementIce() {
    ice.innerHTML = Math.round(parsedIce += gpc);
}

function buyClicker() {
    if  (parsedIce >= parsedClickerCost) {
        ice.innerHTML = Math.round(parsedIce -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}


