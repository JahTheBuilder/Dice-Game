let donut = document.querySelector('.donut-cost')

let clickerCost = document.querySelector('.clicker-cost')

let gps = 0

function incrementDonut() {
    donut.innerHTML = parseFloat(donut.innerHTML) + 1
}

function buyClicker() {
    if (donut.innerHTML >= clickerCost.innerHTML) {
        donut.innerHTML -= clickerCost.innerHTML
        gps += 1
    }
}

setInterval(() => {
    donut.innerHTML = parseFloat(donut.innerHTML) + gps 
}, 1000)