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

delegal(urlap, '[name="nem"]', 'click', (esemeny, elem) => {
    urlap.nemegyeb.classList.toggle('rejtett', elem.value != 'egyeb')
})

urlap.addEventListener('submit', (esemeny)=>{
    //console.log(urlap.vezeteknev.value)

    let hibak = []

    if(urlap.vezeteknev.value.trim() == ''){
        hibak.push('A vezetéknév megadása kötelező!')
    }

    if(urlap.keresztnev.value.trim() == ''){
        hibak.push('A keresztnév megadása kötelező!')
    }

    if(urlap.eletkor.value.trim() == ''){
        hibak.push('Az életkor megadása kötelező!')
    }else if(isNaN(urlap.eletkor.value)){
        hibak.push('Az életkor csak szám lehet!')
    }else if(parseFloat(urlap.eletkor.value) < 18){
        hibak.push('Az életkor nem lehet kisebb mint 18 év!')
    }

    if(urlap.levelezes.value.trim() == ''){
        hibak.push('Az ímélcím megadása kötelező!')
    }else if(urlap.levelezes.value.split('@').length != 2){
        hibak.push('Az ímélcím formátuma helytelen!')
    }

    if(urlap.nem.value == ''){
        hibak.push('A nem kiválasztása kötelező!')
    }else if(!['ffi', 'no', 'egyeb'].includes(urlap.nem.value)){
        hibak.push('Érvénytelen érték a nem választógombján!')
    }else if(urlap.nem.value == 'egyeb' && urlap.nemegyeb.value.trim() == ''){
        hibak.push('Az egyéb értékének megadása kötelező!')
    }

    if(urlap.lakhely.value == ''){
        hibak.push('A lakhely kiválasztása kötelező!')
    }else if(!['budapest','debrecen','miskolc','szeged','egyeb100k','egyeb10k','egyeb1k','egyeb'].includes(urlap.lakhely.value)){
        hibak.push('Érvénytelen érték a lakhely lagördülő listájában!')
    }

    const hirdetesek = Array.from(urlap.hirdetes)
    if(!hirdetesek.some(h => h.checked)){
        hibak.push('Legalább egy promóciós hírlevél típus kiválasztása kötelező!')
    }else if(
        !hirdetesek
        .filter(h => h.checked)
        .every(h => [
            'végtagnövelo',
            'nemetscam',
            'bolgarpapirok',
            'emailscam',
            'webkamera',
            'haziasszony'
        ].includes(h.value))
    ){
        hibak.push('Érvénytelen érték a hirdetés típusában!')
    }

    if(hibak.length > 0){
        hibaLista.classList.remove('rejtett')
        hibaLista.innerHTML = ''
        hibak.forEach(h => hibaLista.appendChild(document.createElement('li')).innerHTML = h)
        esemeny.preventDefault()
    }else{
        hibaLista.classList.add('rejtett')
    }

})