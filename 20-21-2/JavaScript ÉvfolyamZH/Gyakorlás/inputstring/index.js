const szoveg = document.querySelector('textarea')
const lista  = document.querySelector('ul')

szoveg.addEventListener('keydown', (esemeny)=>{
    if(['0','1','2','-','*','%'].includes(esemeny.key)){
        esemeny.preventDefault()
    }else{
        const szobak = szoveg.value.split('\n')
        lista.innerHTML = ''
        for(const szoba of szobak){
            const lakok = szoba.split(' ')

            const li = document.createElement('li')
                li.innerHTML = szoba.trim() == '' ? 0 : lakok.length
            lista.appendChild(li)
        }
    }
})