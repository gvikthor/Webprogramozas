function permaSaveJSON(attributeName, value){
    window.localStorage.setItem(attributeName, JSON.stringify(value))
}
function permaSaveText(attributeName, value){
    window.localStorage.setItem(attributeName, value)
}
function permaLoadJSON(attributeName){
    return JSON.parse(window.localStorage.getItem(attributeName))
}
function permaLoadText(attributeName){
    return window.localStorage.getItem(attributeName)
}
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


const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //reguláris kifejezés

const functionMap = {
    1: function (){
        const email = getPopup(1).querySelector('input').value
        if(email != '' && email.match(emailRegex)[0] == email){
            addToNewsletter(email)
        }
    },
    2: function (){
        permaSaveJSON('cookie', {
            something1: 12343255342,
            something2: 'Budapest',
            something3: 'AB467EC4632A456764D'
        })
    },
    3: function (){
        console.log('Adblocker kikapcsolva.')
    }
}

function addToNewsletter(email){
    permaSaveText('email', email)
}

function getPopup(id){
    return document.querySelector(`#popup-${id}`)
}
function showPopup(id){
    const popup = getPopup(id)
    popup.classList.add('popup')
    popup.classList.remove('hidden')
}
function hidePopup(id){
    const popup = getPopup(id)
    popup.classList.remove('popup')
    popup.classList.add('hidden')
}
function afterLastPopup(){
    document.querySelector('#grey-barrier').classList.add('hidden')
    document.querySelector('#content').classList.remove('hidden')
    setInterval(()=>{
        document.querySelector('#ad-1').style.backgroundColor = `#${randomColor()}`
    }, 500)
}
function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16)
}

delegate(document.body, '.popup #accept', 'click', (event, elem) => {
    const popupID = parseInt(elem.parentNode.parentNode.dataset.id)
    functionMap[popupID]()
    hidePopup(popupID)
    if(getPopup(popupID+1)) showPopup(popupID+1)
    else afterLastPopup()
})

delegate(document.body, '.popup #cancel', 'click', (event, elem) => {
    const popupID = parseInt(elem.parentNode.parentNode.dataset.id)
    hidePopup(popupID)
    if(getPopup(popupID+1)) showPopup(popupID+1)
    else afterLastPopup()
})