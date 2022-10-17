const mainDiv = document.querySelector('#main')
const eurDiv = document.querySelector('#eur-div')
const usdDiv = document.querySelector('#usd-div')

/**
 * Gets the correct table body for the given currency.
 * @param {*} currency Some kind of a currency, for example EUR or USD
 * @returns Returns an HTML tbody element.
 */
function getTBodyForCurrency(currency){
    return {
        EUR: eurDiv.querySelector('tbody'),
        USD: usdDiv.querySelector('tbody')
    }[currency]

    /*
    const obj = {
        EUR: eurTable,
        USD: usdTable
    }
    
    return obj[currency]
    */

    /*switch(currency){
        case 'EUR': return eurTable
        case 'USD': return usdTable
        default: null
    }*/
    
    /*let correctBody = null
    switch(currency){
        case 'EUR':
            correctBody = eurTable
            break
        case 'USD':
            correctBody = usdTable
            break
        default:
    }
    return correctBody*/

    /*if(currency == 'EUR') return eurTable
    else if(...)*/
}

/**
 * Gets the correct add button for the given currency.
 * @param {*} currency Some kind of a currency, for example EUR or USD
 * @returns Returns an HTML button element.
 */
function getAddButtonForCurrency(currency){
    return {
        EUR: eurDiv.querySelector('.add-button'),
        USD: usdDiv.querySelector('.add-button')
    }[currency]
}

/**
 * Generates a nwe row into the corresponding table for a transaction depending on the currency.
 * @param {*} transaction Transaction
 */
function generateRowForTransaction(transaction){
    const newTR = document.createElement('tr')
        const newTD1 = document.createElement('td')
        const isIncome = transaction.direction == 'income'
        newTD1.innerText = `${isIncome ? '+' : '-'}${transaction.amount}`
        newTR.appendChild(newTD1)

        const newTD2 = document.createElement('td')
        newTD2.innerText = transaction.comment
        newTR.appendChild(newTD2)
    getTBodyForCurrency(transaction.currency)?.appendChild(newTR)
}

function getInputAmountForCurrency(currency){
    return {
        EUR: eurDiv.querySelector('.amount-input'),
        USD: usdDiv.querySelector('.amount-input')
    }[currency]
}

function getInputCommentForCurrency(currency){
    return {
        EUR: eurDiv.querySelector('.comment-input'),
        USD: usdDiv.querySelector('.comment-input')
    }[currency]
}

/**
 * Calls the generateRowForTransaction function for the correct currency.
 * @param {*} event 
 * @param {*} addButton 
 */
function addRowViaDelegate(event, addButton){
    const curr = addButton.dataset.currency
    const value = parseFloat(getInputAmountForCurrency(curr).value) //parseInt()
    if(value/* || value === 0*/){
        const transaction = {
            amount: value < 0 ? -value : value,
            currency: curr,
            direction: value < 0 ? 'expense' : 'income',
            comment: getInputCommentForCurrency(curr).value       
        }


        generateRowForTransaction(transaction)
        transactions.push(transaction)
        permaSaveJSON('data', transactions)
    }
}

transactions.forEach(generateRowForTransaction)
delegate(mainDiv, '.add-button', 'click', addRowViaDelegate)













/*getAddButtonForCurrency('EUR').addEventListener('click', event => {
    generateRowForTransaction({
        amount: 100,
        currency: 'EUR',
        direction: 'expense',
        comment: 'groceries'        
    })
})*/