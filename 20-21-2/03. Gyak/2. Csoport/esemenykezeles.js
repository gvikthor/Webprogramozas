const tesztElem = document.querySelector('#teszt-elem')
const tesztInput = document.querySelector('#teszt-input')

function peldaFuggveny(esemeny){
    console.log(esemeny)
}

tesztElem.addEventListener('click', peldaFuggveny)

tesztElem.addEventListener('click', (esemeny)=>{
    console.log(esemeny)
})

tesztElem.addEventListener('mouseenter', ()=>{
    console.log('belépett az egér')
})
tesztElem.addEventListener('mouseleave', ()=>{
    console.log('kilépett az egér')
})
tesztElem.addEventListener('mousemove', ()=>{
    console.log('mozog az egér')
})
tesztInput.addEventListener('input', (esemeny)=>{
    console.log(esemeny)
})
tesztInput.addEventListener('keyup', (esemeny)=>{
    console.log(esemeny)
})
tesztInput.addEventListener('keydown', (esemeny)=>{
    console.log(esemeny)
    if(esemeny.key.toLowerCase() == 'b'){
        esemeny.preventDefault()
        //Ha b betűt nyomunk, kimarad az input esemény; nem íródik be a b betű
    }
})
