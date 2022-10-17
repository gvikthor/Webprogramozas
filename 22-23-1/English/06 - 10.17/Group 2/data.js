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

function permaSaveJSON(name, value){
    window.localStorage.setItem(name, JSON.stringify(value))
}

function permaLoadJSON(name){
    return JSON.parse(window.localStorage.getItem(name))
}

const transactions = permaLoadJSON('data')

/*permaSaveJSON('data', [
    {
        amount: 500,
        currency: 'EUR',
        direction: 'income',
        comment: 'salary'
    },
    {
        amount: 100,
        currency: 'EUR',
        direction: 'expense',
        comment: 'steam purchase'
    },
    {
        amount: 50,
        currency: 'USD',
        direction: 'income',
        comment: 'money laundering'
    },
    {
        amount: 25,
        currency: 'USD',
        direction: 'expense',
        comment: 'Amazon purchae'
    },
    {
        amount: 500,
        currency: 'EUR',
        direction: 'income',
        comment: 'salary'
    },
    {
        amount: 500,
        currency: 'GPB',
        direction: 'income',
        comment: 'salary'
    },
    {
        amount: 500,
        currency: 'EUR',
        direction: 'income',
        comment: 'salary'
    },
    {
        amount: 500,
        currency: 'EUR',
        direction: 'income',
        comment: 'salary'
    },
    {
        amount: 500,
        currency: 'EUR',
        direction: 'income',
        comment: 'salary'
    }
])

window.localStorage.removeItem('name')*/