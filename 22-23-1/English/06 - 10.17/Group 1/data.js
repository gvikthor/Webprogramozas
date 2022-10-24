function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}

function permaSave(name, value){
    window.localStorage.setItem(name, JSON.stringify(value))
}
function permaLoad(name){
    return JSON.parse(window.localStorage.getItem(name))
}

/* onlry run this part once
permaSave('data', [
    {
        direction: 'income',
        amount: 250,
        currency: 'EUR',
        comment: 'salary'
    },
    {
        direction: 'expense',
        amount: 100,
        currency: 'EUR',
        comment: 'steam purchase'
    },
    {
        direction: 'expense',
        amount: 50,
        currency: 'USD',
        comment: 'keyboard'
    },
    {
        direction: 'income',
        amount: 250,
        currency: 'EUR',
        comment: 'salary'
    },
    {
        direction: 'expense',
        amount: 20,
        currency: 'USD',
        comment: 'shipping cost'
    },
    {
        direction: 'income',
        amount: 250,
        currency: 'EUR',
        comment: 'salary'
    }
])
*/

const data = permaLoad('data')