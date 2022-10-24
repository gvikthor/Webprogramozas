const mainContent = document.querySelector('#main-content')

/*
<div>
    <h2>EUR</h2>
    <table id="eur-table">
        <thead>
            <tr>
                <th>Amount</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    Amount: <input id="eur-amount"><br>
    Comment: <input id="eur-comment"><br>
    <button id="eur-button">➕</button>
</div>
*/

const currencies = []
const currencyTableBodies = {}

/**
 * Generate a transactions table row into the correct table.
 * @param {*} d Data of the transaction
 */
 function generateTR(d){
    const newTR = document.createElement('tr')
        const newTD1 = document.createElement('td')
        newTD1.innerText = `${d.direction == 'expense' ? '-' : '+'}${d.amount}` // ternary
        newTR.appendChild(newTD1)
        
        const newTD2 = document.createElement('td')
        newTD2.innerText = d.comment
        newTR.appendChild(newTD2)
    getTableBody(d.currency).appendChild(newTR)
}

/**
 * Generate all the tables needed for the currencies
 * @param {*} data 
 */
function generateTables(data){
    data.forEach(d => {
        if(!currencies.includes(d.currency)) currencies.push(d.currency)
    })
    
    currencies.forEach(curr => {
        const newDiv = document.createElement('div')
            const newTable = document.createElement('table')
                /*generate thead*/
                const newTableBody = document.createElement('tbody')
                    currencyTableBodies[curr] = newTableBody
                newTable.appendChild(newTableBody)
            newDiv.appendChild(newTable)
        mainContent.appendChild(newDiv)
    })

    data.forEach(generateTR)
}

/**
 * Returns the corresponding table body for the given currency.
 * @param {*} currency A currencry like EUR, USD
 * @returns Table body element
 */
function getTableBody(currency){
    return currencyTableBodies[currency]

    /*
    return {
        EUR: eurBody,
        USD: usdBody
    }[currency]
    */

    /*
    switch(currency){
        case 'EUR': return eurBody
        case 'USD': return usdBody
        default: return null
    }
    */
    
    /*
    let result = null
    switch(currency){
        case 'EUR':
            result = eurBody
            break
        case 'USD':
            result = usdBody
            break
        default:
            result = null
            break
    }

    return result
    */

    /*
    if(...){}
    else if(...){}
    ...
    else{}
    */
}


console.log(data)

/*eurInputButton.addEventListener('click', event => {
    const amount = parseFloat(eurInputAmount.value)
    if(amount / *|| amount === 0* /){
        const d = {  
            direction: amount < 0 ? 'expense' : 'income',
            amount: amount,
            currency: 'EUR',
            comment: eurInputComment.value
        }
        generateTR(d)
        data.push(d)
        permaSave('data', data)

        eurInputAmount.value = ''
        eurInputComment.value = ''
    }
})*/

/*
window.localStorage.setItem('name', 'George')
window.localStorage.getItem('name')
window.localStorage.removeItem('name')
console.log(window.localStorage)
*/

/*
3 points: Generate the buttons and do the delegating for the "forms"
*/