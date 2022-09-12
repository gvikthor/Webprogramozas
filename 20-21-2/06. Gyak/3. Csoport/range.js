const szRange = document.querySelector('#sz-range')
const szErtek = document.querySelector('#sz-ertek')
const mRange = document.querySelector('#m-range')
const mErtek = document.querySelector('#m-ertek')
const teglalap = document.querySelector('#teglalap')

szRange.addEventListener('input', ()=>{
    szErtek.innerHTML = szRange.value
    teglalap.style.width = `${szRange.value}px`
})

mRange.addEventListener('input', ()=>{
    mErtek.innerHTML = mRange.value
    teglalap.style.height = `${mRange.value}px`
})