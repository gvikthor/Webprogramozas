const tablazat = document.querySelector('#tablazat')

const allatkert = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        szin: 'fehér',
        tomeg: 150
    },
    {
        nev: 'Regő',
        faj: 'oroszlán',
        szin: 'fehér',
        tomeg: 50
    },
    {
        nev: 'Timi',
        faj: 'mókus',
        szin: 'narancssárga',
        tomeg: 1
    },
    {
        nev: 'Hippo',
        faj: 'víziló',
        szin: 'lila',
        tomeg: 300
    }
]

for(const allat of allatkert){
    const ujSor = document.createElement('tr')

        /*
        let ujTd = document.createElement('td')
            ujTd.innerHTML = allat.nev
            ujSor.appendChild(ujTd)

        ujTd = document.createElement('td')
            ujTd.innerHTML = allat.faj
            ujSor.appendChild(ujTd)

        ujTd = document.createElement('td')
            ujTd.innerHTML = allat.szin
            ujSor.appendChild(ujTd)

        ujTd = document.createElement('td')
            ujTd.innerHTML = `${allat.tomeg}kg`
            ujSor.appendChild(ujTd)
        */

        for(const tulajdonsag in allat){
            console.log(tulajdonsag , allat[tulajdonsag])

            const ujTd = document.createElement('td')
                ujTd.innerHTML = allat[tulajdonsag] + (tulajdonsag == 'tomeg' ? 'kg' : '')
                
                /*
                if(tulajdonsag == 'tomeg'){
                    ujTd.innerHTML += 'kg'
                }
                */

                ujSor.appendChild(ujTd)
        }

        tablazat.appendChild(ujSor)
}