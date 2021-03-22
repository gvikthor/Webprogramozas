const magassag = document.querySelector('#magassag')
const szelesseg = document.querySelector('#szelesseg')
const mertek = document.querySelector('#mertek')
const szertek = document.querySelector('#szertek')
const teglalap = document.querySelector('#teglalap')

magassag.addEventListener('input', ()=>{
    mertek.innerHTML = magassag.value
    teglalap.style.height =`${magassag.value}px`
})

szelesseg.addEventListener('input', ()=>{
    szertek.innerHTML = szelesseg.value
    teglalap.style.width =`${szelesseg.value}px`
})