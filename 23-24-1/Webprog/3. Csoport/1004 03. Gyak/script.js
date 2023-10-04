/*
const elem = document.body

function logSomething(event){
    console.log(event.x, event.y)
}

elem.addEventListener('click', logSomething)
*/

/*
const grossIncome = document.querySelector('#gross-income')
const calcButton = document.querySelector('#calc')
const szja = document.querySelector('#tax-szja')
const nyugdij = document.querySelector('#tax-nyugdij')
const egeszseg = document.querySelector('#tax-egeszseg')
const munkaer = document.querySelector('#tax-munkaer')
const szocho = document.querySelector('#tax-szocho')
const netIncome = document.querySelector('#net-income')

//calcButton.addEventListener('click', (event) => {
grossIncome.addEventListener('input', (event) => {
    let value = parseFloat(grossIncome.value)
    if(isNaN(value)){
        value = 0
    }
    const szjaVal = value * 0.15
    const nyugdijVal = value * 0.1
    const egeszsegVal = value * 0.07
    const munkaerVal = value * 0.015
    const szochoVal = value * 0.18

    szja.innerText = szjaVal.toFixed(2)
    nyugdij.innerText = nyugdijVal.toFixed(2)
    egeszseg.innerText = egeszsegVal.toFixed(2)
    munkaer.innerText = munkaerVal.toFixed(2)
    szocho.innerText = szochoVal.toFixed(2)

    netIncome.innerText = (value - szjaVal - nyugdijVal - egeszsegVal - munkaerVal).toFixed(2)
})
*/

/*
const grossIncomeList = document.querySelector('#gross-income-list')
const netIncome = document.querySelector('#net-income')


const incomeListItems = grossIncomeList.querySelectorAll('li')
for(const listItem of incomeListItems){
    listItem.addEventListener('click', (event) => {
        netIncome.innerText = parseInt(listItem.dataset.forint) * 0.665
    })
}
*/

function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}

const grossIncomeList = document.querySelector('#gross-income-list')
const netIncome = document.querySelector('#net-income')

delegate(grossIncomeList, 'li', 'click', (event, elem) => {
    netIncome.innerText = parseInt(elem.dataset.forint) * 0.665
})


const pedberTable = document.querySelector('#pedber')
delegate(pedberTable, 'td', 'click', (event, elem) => {
    elem.classList.toggle('selected')
})

delegate(document.body, 'button', 'click', (event, elem) => {
    document.querySelectorAll('.selected').forEach(selected => {
        selected.innerText = parseInt(selected.innerText) + parseInt(elem.dataset.forint)
    })
})

/*elem.classList.add('selected')
elem.classList.remove('selected')
elem.classList.contains('selected')*/