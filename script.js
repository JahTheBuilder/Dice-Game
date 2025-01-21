let donut = document.querySelctor('.donut-cost')
let parsedDonut = parseFloat(donut.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementDonut() {
    parsedDonut += 1
    donut.innerHTML = pasedDonut
}

function buyClicker() {
    if (parsedDonut >= parsedClickerCost) {
        parsedDonut -= parsedClickerCost
        donut.innerHTML = parsedDonut
    }
}