const elso = document.querySelector('#elso')

function almafaEnter(esemeny){
    console.log(esemeny)
    console.log('almafa enter')
}
function almafaLeave(esemeny){
    console.log(esemeny)
    console.log('almafa leave')
}
function almafaMove(esemeny){
    console.log(esemeny)
    console.log('almafa move')
}
function almafaClick(esemeny){
    console.log(esemeny)
    console.log('almafa click')
}

elso.addEventListener('mouseenter', almafaEnter)
elso.addEventListener('mouseleave', almafaLeave)
elso.addEventListener('mousemove', almafaMove)
elso.addEventListener('click', almafaClick)

/*
elso.onclick = almafaClick
elso.onmousemove = almafaMove
*/

const inputB = document.querySelector('#nincsB')


inputB.addEventListener('keydown', esemeny => {
    if(esemeny.key.toLowerCase() == 'b') esemeny.preventDefault()

    console.log(esemeny)
})
inputB.addEventListener('input', esemeny => {
    console.log(inputB.value[inputB.value.length-1])

    console.log(esemeny)
})
inputB.addEventListener('keyup', () => {
    console.log('keyup event')
})