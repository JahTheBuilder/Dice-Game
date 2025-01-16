let donut = document.querySelector('.donut-cost')
let parsedDonut = parseFloat(donut.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementDonut() {
    parsedDonut += 1
    donut.innerHTML = parsedDonut
}

function buyClicker() {
    if (parsedDonut >= parsedClickerCost) {
        parsedDonut -= parsedClickerCost
        donut.innerHTML = parsedDonut
    }
}