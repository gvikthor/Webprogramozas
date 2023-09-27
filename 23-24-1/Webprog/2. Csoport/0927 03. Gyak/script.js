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

const firstDiv = document.querySelector('#first-div')
function happening(event){
    console.log('event happened')
}

//firstDiv.addEventListener('click', happening)
firstDiv.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red'
})

/*
const fruits = document.querySelectorAll('#fruits li')
for(const fruit of fruits){
    fruit.addEventListener('click', event => {
        event.target.style.backgroundColor = 'red'
    })
}
*/

const fruitsUL = document.querySelector('#fruits')
delegate(fruitsUL, 'li', 'click', (event, elem) => {
    if(event.ctrlKey)
        elem.style.backgroundColor = elem.dataset.color
})

//////////////////////////////////////////////////////////////////////

const calcBtn = document.querySelector('#calc')
const grossInput = document.querySelector('#gross-income')
const infoSzja = document.querySelector('#info-szja')
const infoTb1 = document.querySelector('#info-tb1')
const infoTb2 = document.querySelector('#info-tb2')
const infoTb3 = document.querySelector('#info-tb3')
const infoSzocho = document.querySelector('#info-szocho')
const netOutput = document.querySelector('#net-income')

calcBtn.addEventListener('click', event => {
    const gross = parseInt(grossInput.value)
    const szja = gross * 0.15
    const tb1 = gross * 0.1
    const tb2 = gross * 0.07
    const tb3 = gross * 0.015
    const szocho = gross * 0.13

    infoSzja.innerText = `${szja.toFixed(2)} Ft`
    infoTb1.innerText = `${tb1.toFixed(2)} Ft`
    infoTb2.innerText = `${tb2.toFixed(2)} Ft`
    infoTb3.innerText = `${tb3.toFixed(2)} Ft`
    infoSzocho.innerText = `${szocho.toFixed(2)} Ft`
    netOutput.innerText = `${(gross - szja - tb1 - tb2 - tb3).toFixed(2)} Ft`
})

/////////////////////////////////////////////////////////////////////////////////

/*
const pedPaymentsTable = document.querySelector('#ped-payments tbody')
const rmvMoneyBtn = document.querySelector('#rmv-money')
const addMoneyBtn = document.querySelector('#add-money')

delegate(pedPaymentsTable, 'td', 'click', (event, elem) => {
    
    //elem.classList.add('alma')
    //elem.classList.remove('alma')
    //elem.classList.toggle('alma')
    //elem.classList.includes('alma')
    
    if(elem.classList.contains('selected')){
        elem.classList.remove('selected')
    }else{
        const prev = pedPaymentsTable.querySelector('.selected')
        if(prev){
            prev.classList.remove('selected')
        }
        elem.classList.add('selected')
    }
})

delegate(document.body, '.edit-money', 'click', (event, elem) => {
    const current = pedPaymentsTable.querySelector('.selected')
    if(current){
        const baseMoney = parseInt(current.innerText)
        const deltaMoney = parseInt(elem.dataset.amount)
        current.innerText = baseMoney + deltaMoney
    }
})
*/

const pedPaymentsTable = document.querySelector('#ped-payments tbody')
delegate(pedPaymentsTable, 'td', 'click', (event, elem) => {    
    elem.classList.toggle('selected')
})

delegate(document.body, '.edit-money', 'click', (event, elem) => {
    const currents = pedPaymentsTable.querySelectorAll('.selected')
    for(const current of currents){
        const baseMoney = parseInt(current.innerText)
        const deltaMoney = parseInt(elem.dataset.amount)
        current.innerText = baseMoney + deltaMoney
    }
})