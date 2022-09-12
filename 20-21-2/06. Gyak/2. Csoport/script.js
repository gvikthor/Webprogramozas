function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

const urlap = document.querySelector('form')
const hibaLista = document.querySelector('#hibak')

/*urlap.querySelector('#egyeb').addEventListener('click', ()=>{
    urlap.querySelector('#nemegyeb').classList.toggle('rejtett')
})*/

delegal(urlap, '.nem-radio', 'click', (esemeny, elem) => {
    const inputmezo = document.querySelector('#nemegyeb')
    if(elem.value == 'egyeb'){
        inputmezo.classList.remove('rejtett')
    }else{
        inputmezo.classList.add('rejtett')
    }
})

urlap.addEventListener('submit', (esemeny) => {
    /*  
    console.log(urlap.vezeteknev.value)
    console.log(urlap.keresztnev.value)
    console.log(urlap.kor.value)
    console.log(urlap.nem.value)
    console.log(urlap.lakhely.value)
    console.log(urlap.vakcina[0].checked)
    console.log(urlap.egyeb)
   */
    let hibak = []

    if(urlap.vezeteknev.value.trim() == ''){
        hibak.push('A vezetéknév megadása kötelező!')
    //}else if(urlap.vezeteknev.value.includes('0') || urlap.vezeteknev.value.includes('1')){ // PHP regex ezt könnyen megoldja
    }else if(Array.from(urlap.vezeteknev.value).some(c => !isNaN(c))){
        hibak.push('A vezetéknév csak betűket tartalmazhat!')
    }

    if(urlap.keresztnev.value.trim() == ''){
        hibak.push('A keresztnév megadása kötelező!')
    }else if(urlap.keresztnev.value.includes('0') || urlap.vezeteknev.value.includes('1')){ // PHP regex ezt könnyen megoldja
        hibak.push('A keresztnév csak betűket tartalmazhat!')
    }

    if(urlap.kor.value.trim() == ''){
        hibak.push('A kor megadása kötelező!')
    }else if(isNaN(urlap.kor.value)){
        hibak.push('Az életkor csak szám lehet!')
    }else if(parseFloat(urlap.kor.value) < 10){
        hibak.push('A regisztrációhoz betöltött 10. életév szükséges!')
    }

    if(urlap.nem.value == ''){
        hibak.push('A nem megadása kötelező!')
    }else if(!['ffi','no','egyeb'].includes(urlap.nem.value)){
        hibak.push('Kérjük a nemet a megadott lehetőségek közül válassza ki! Előfordulhat, hogy hiba történt, érdemes újratölteni az oldalt!')
    }else if(urlap.nem.value == 'egyeb' && urlap.nemegyeb.value.trim() == ''){
        hibak.push('Egyéb nem kiválasztása esetén a mező kitöltése kötelező!')
    }

    if(!['budapest','szeged','debrecen','miskolc','egyeb100k','egyeb10k','egyeb1k','egyeb'].includes(urlap.lakhely.value)){
        hibak.push('Kérjük a lakhelyet a megadott lehetőségek közül válassza ki! Előfordulhat, hogy hiba történt, érdemes újratölteni az oldalt!')
    }

    /*for(const nem of urlap.nem){
        console.log(nem.checked)
    }*/

    //if(!Array.from(urlap.vakcina).some(v => v.checked)){
    if(Array.from(urlap.vakcina).every(v => !v.checked)){
        hibak.push('Legalább egy vakcina kiválasztása kötelező!')
    }else if(
        !Array.from(urlap.vakcina)
        .filter(v => v.checked)
        .every(v =>  ['astra', 'pfizer', 'sputnik', 'hunor', 'project51'].includes(v.value))
    ){
        hibak.push('Kérjük a vakcinákat a megadott lehetőségek közül válassza ki! Előfordulhat, hogy hiba történt, érdemes újratölteni az oldalt!')
    }


    if(hibak.length > 0){
        hibaLista.classList.remove('rejtett')
        hibaLista.innerHTML = ''
        hibak.forEach(hiba => hibaLista.innerHTML += `<li>${hiba}</li>`)
        esemeny.preventDefault()
    }

})