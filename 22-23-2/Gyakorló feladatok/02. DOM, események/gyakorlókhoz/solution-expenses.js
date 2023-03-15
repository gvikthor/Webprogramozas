const exchangeRates = {
    DKK: 53.94,
    EUR: 401.59
}

const costs = [
    { name: 'Legoland ticket', price: 329, currency: 'DKK' },
    { name: 'Plane ticket', price: 70000, currency: 'HUF' },
    { name: 'Resort', price: 250, currency: 'EUR' },
    { name: 'Food', price: 2000, currency: 'DKK' },
    { name: 'Copenhagen card', price: 450, currency: 'DKK' },
    { name: 'Organization fee', price: 3000, currency: 'HUF' }
]

const expensesTable = document.querySelector('#expenses')
const eurInput = document.querySelector('#eur')
const dkkInput = document.querySelector('#dkk')
const refreshButton = document.querySelector('#refresh')
const sumSpan = document.querySelector('#sum')

eurInput.value = exchangeRates.EUR
dkkInput.value = exchangeRates.DKK

/* HETEDIK FELADAT NÉLKÜL
function summarizeCosts() {
    let sum = 0
    for (const cost of costs) {
        if (cost.currency === 'HUF') {
            sum += cost.price
        } else if (cost.currency === 'DKK') {
            sum += cost.price * parseFloat(dkkInput.value)
        } else if (cost.currency === 'EUR') {
            sum += cost.price * parseFloat(eurInput.value)
        }
    }
    sumSpan.innerText = `${sum} HUF`
}

for(const cost of costs){
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdPrice = document.createElement('td')
    const tdCurrency = document.createElement('td')

    tdName.textContent = cost.name
    tdPrice.textContent = cost.price
    tdCurrency.textContent = cost.currency

    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdCurrency)

    expensesTable.appendChild(tr)

    summarizeCosts()
}

refreshButton.addEventListener('click', summarizeCosts)
//*/


//* HETEDIK FELADATTAL
const sumSpan7 = document.querySelector('#sum-7')
const refreshOriginalButton = document.querySelector('#refresh-original')
const refreshHufButton = document.querySelector('#refresh-huf')
const refreshDkkButton = document.querySelector('#refresh-dkk')
const refreshEurButton = document.querySelector('#refresh-eur')

function transform(cost, currency){
    if(currency == 'Original') return cost

    const result = {
        name: cost.name,
        price: cost.price,
        currency: cost.currency
    }
    if(result.currency != currency){
        if(currency == 'HUF'){
            if(result.currency == 'DKK'){
                result.price *= parseFloat(dkkInput.value)
            } else if(result.currency == 'EUR'){
                result.price *= parseFloat(eurInput.value)
            }
        }else if(currency == 'DKK'){
            if(result.currency == 'HUF'){
                result.price /= parseFloat(dkkInput.value)
            } else if(result.currency == 'EUR'){
                result.price *= parseFloat(eurInput.value) / parseFloat(dkkInput.value)
            }
        }else if(currency == 'EUR'){
            if(result.currency == 'HUF'){
                result.price /= parseFloat(eurInput.value)
            } else if(result.currency == 'DKK'){
                result.price *= parseFloat(dkkInput.value) / parseFloat(eurInput.value)
            }
        }
    }
    return result
}

function summarizeCosts(currency){
    if(currency == 'Original') currency = 'HUF'
    let sum = 0
    for (const cost of costs) {
        sum += transform(cost, currency).price
    }
    sumSpan7.innerText = `${sum.toFixed(2)} ${currency}`
}

function refreshTable(currency){
    expensesTable.innerHTML = ''
    for(const cost of costs){
        const newCost = transform(cost, currency)
        const tr = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdPrice = document.createElement('td')
        const tdCurrency = document.createElement('td')

        tdName.textContent = newCost.name
        tdPrice.textContent = newCost.price.toFixed(2)
        tdCurrency.textContent = newCost.currency

        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdCurrency)

        expensesTable.appendChild(tr)

        summarizeCosts(currency)
    }
}

refreshTable('Original')

refreshOriginalButton.addEventListener('click', () => refreshTable('Original'))
refreshHufButton.addEventListener('click', () => refreshTable('HUF'))
refreshDkkButton.addEventListener('click', () => refreshTable('DKK'))
refreshEurButton.addEventListener('click', () => refreshTable('EUR'))
//*/