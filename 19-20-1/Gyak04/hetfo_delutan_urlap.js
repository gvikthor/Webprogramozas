function $(id){
    return document.getElementById(id);
}

let adatok = {};
let hibak = [];

function ellenoriz(){
    let helyes = true;
    let urlap = $('urlap');
    
    if(urlap.nev.value != ''){
        adatok.nev = urlap.nev.value;
    }else{
        helyes = false;
        hibak.push({
            id: 'nev',
            szoveg: 'A név megadása kötelező!'
        });
    }

    if(urlap.kor.value != ''){
        if(!isNaN(urlap.kor.value)){
            adatok.kor = urlap.kor.value;
        }else{
            helyes = false;
            hibak.push({
                id: 'kor',
                szoveg: 'Az életkor csak szám lehet!'
            });
        }
    }else{
        helyes = false;
        hibak.push({
            id: 'kor',
            szoveg: 'Az életkor megadása kötelező!'
        });
    }

    if(urlap.nem[0].checked || urlap.nem[1].checked){
        adatok.nem = urlap.nem.value;

        if(urlap.nem[1].checked){
            if(urlap.l_nev.value != ''){
                adatok.l_nev = urlap.l_nev.value;
            }else{
                helyes = false;
                hibak.push({
                    id: 'l_nev',
                    szoveg: 'A leánykori név megadása kötelező, még akkor is, ha egyezeik a jelenléegivel!'
                });
            }
        }
    }else{
        helyes = false;
        hibak.push({
            id: 'nem',
            szoveg: 'A nem megadása kötelező!'
        });
    }

    if(urlap.varos.value != ''){
        adatok.varos = urlap.varos.value;
    }else{
        helyes = false;
        hibak.push({
            id: 'varos',
            szoveg: 'A város megadása kötelező!'
        });
    }

    if(urlap.kell.length > 0){
        adatok.szolgaltatasok = [];
        for(szolgaltatas of urlap.kell){
            adatok.szolgaltatasok.push(szolgaltatas);
        }
    }else{
        helyes = false;
        hibak.push({
            id: 'kell',
            szoveg: 'Legalább egy szolgáltatást válassz ki!'
        });
    }

    adatok.helyszinek = [];
    for(let i = 0; i < parseInt(urlap.helyszin.value); i++){
        adatok.helyszinek.push($('helyszin_'+i).value);
    }

    adatok.egyeb = urlap.egyeb.value;

    return helyes;
}

function hibakezekles(){
    let szoveg = '';
    for(hiba of hibak){
        szoveg += hiba.szoveg + '<br>';
        $('urlap')[hiba.id].style = 'background: red;';
    }
    $('hibak').innerHTML = szoveg;
}

$('urlap').onload = $('urlap').reset();

$('kuldes').addEventListener('click', () => {
    event.preventDefault();
    ellenoriz();
    console.log(adatok);
    hibakezekles();
    hibak = [];
});

$('g_ffi').addEventListener('click', () => {
    $('leanykor').innerHTML = '';
});
$('g_no').addEventListener('click', () => {
    $('leanykor').innerHTML = `
    <label>Leánykori név</label><br>
    <input type="text" id="l_nev">
    `;
});

$('gomb_nemkell').addEventListener('click', () => {
    event.preventDefault();
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of $('kell')){
        if(szolgaltatas.selected){
            nemkell += '<option value="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }else{
            kell += '<option value="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }
    }
    $('kell').innerHTML = kell;
    $('nemkell').innerHTML += nemkell;
});

$('gomb_kell').addEventListener('click', () => {
    event.preventDefault();
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of $('nemkell')){
        if(szolgaltatas.selected){
            kell += '<option value="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }else{
            nemkell += '<option value="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }
    }
    $('kell').innerHTML += kell;
    $('nemkell').innerHTML = nemkell;
});

let idozito;
$('urlap').addEventListener('input', () => {
    $('urlap').style = 'box-shadow: -4px 4px 3px -2px green;';
    clearInterval(idozito);
    idozito = setInterval(() => {
        $('urlap').style = 'box-shadow: -4px 4px 3px -2px #4d4d4d57;';
        clearInterval(idozito);
    }, 1000);
});

for(let i = 1; i <= 3; i++){
    $('r'+i).addEventListener('click', () => {
        let szoveg = '';
        for(let j = 0; j < i; j++){
            szoveg += '<input type="text" id="helyszin_'+j+'"><br>';
        }
        $('helyszin_inputok').innerHTML = szoveg;
    });    
}

/*
$('r1').addEventListener('click', () => {
    $('helyszin_inputok').innerHTML = `
        <input type="text" id="helyszin_0"><br>
    `;
});
$('r2').addEventListener('click', () => {
    $('helyszin_inputok').innerHTML = `
        <input type="text" id="helyszin_0"><br>
        <input type="text" id="helyszin_1"><br>
    `;
});
$('r3').addEventListener('click', () => {
    $('helyszin_inputok').innerHTML = `
        <input type="text" id="helyszin_0"><br>
        <input type="text" id="helyszin_1"><br>
        <input type="text" id="helyszin_2"><br>
    `;
});*/