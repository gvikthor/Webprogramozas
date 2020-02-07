function $(id){
    return document.getElementById(id);
}

let adatok = {};
let hibak = [];
function feldolgoz(){
    adatok = {};
    hibak = [];
    let helyes = true;
    let urlap = $('urlap');

    if(urlap.nev.value != ''){
        adatok.nev = urlap.nev.value;
    }else{
        helyes = false;
        hibak.push({
            hibauzenet: 'A név megadása kötelező!',
            id: 'nev'
        });
    }

    if(urlap.kor.value != ''){
        if(!isNaN(urlap.kor.value)){
            adatok.kor = urlap.kor.value;
        }else{
            helyes = false;
            hibak.push({
                hibauzenet: 'Az életkornak számnak kell lennie',
                id: 'kor'
            });
        }
    }else{
        helyes = false;
        hibak.push({
            hibauzenet: 'A kor megadása kötelező!',
            id: 'kor'
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
                    hibauzenet: 'A leánykori név megadása kötelező, még akkor is, ha egyezik a jelenlegivel!',
                    id: 'l_nev'
                });
            }
        }
    }else{
        helyes = false;
        hibak.push({
            hibauzenet: 'A nem megadása kötelező!',
            id: 'nem'
        });
    }

    if(urlap.varos.value != ''){
        adatok.varos = urlap.varos.value;
    }else{
        helyes = false;
        hibak.push({
            hibauzenet: 'A város megadása kötelező!',
            id: 'varos'
        });
    }

    if(urlap.kell.length > 0){
        adatok.kell = [];
        for(ertek of urlap.kell){
            adatok.kell.push(ertek.value);
        }
    }else{
        helyes = false;
        hibak.push({
            hibauzenet: 'Legalább egy szolgáltatás kiválasztása kötelező.',
            id: 'kell'
        });
    }

    adatok.helyszin = [];
    for(let i = 0; i <= parseInt(urlap.helyszin.value); i++){
        adatok.helyszin.push(urlap['helyszin_'+i].value);
    }

    adatok.egyeb = urlap.egyeb;

    return helyes;
}

function hiba_kiir(){
    let szoveg = '';
    for(hiba of hibak){
        szoveg += hiba.hibauzenet + '<br>';
        $('urlap')[hiba.id].style = 'background: red;';
    }
    $('hibak').innerHTML = szoveg;
}

$('urlap').onload = $('urlap').reset();

$('kuldes').addEventListener('click', () => {
    event.preventDefault();
    if(feldolgoz()){
        $('urlap').reset();
    }
    hiba_kiir();
});

let nemek = document.querySelectorAll('.nemek');
nemek[0].addEventListener('click', () => {
    $('leanykor').innerHTML = '';
});

nemek[1].addEventListener('click', () => {
    $('leanykor').innerHTML = `
        <label>Leánykori név</label><br>
        <input type="text" id="l_nev">
    `;
});

$('gomb_nemkell').addEventListener('click', () => {
    event.preventDefault();
    let szolgaltatasok = $('urlap').kell;
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of szolgaltatasok){
        if(szolgaltatas.selected){
            nemkell += '<option id="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }else{
            kell    += '<option id="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }
    }
    $('urlap').kell.innerHTML = kell;
    $('urlap').nemkell.innerHTML += nemkell;
});

$('gomb_kell').addEventListener('click', () => {
    event.preventDefault();
    let szolgaltatasok = $('urlap').nemkell;
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of szolgaltatasok){
        if(szolgaltatas.selected){
            kell    += '<option id="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }else{
            nemkell += '<option id="' + szolgaltatas.value + '">' + szolgaltatas.innerHTML + '</option>';
        }
    }
    $('urlap').kell.innerHTML += kell;
    $('urlap').nemkell.innerHTML = nemkell;
});

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
});

let timer;
$('urlap').addEventListener('input', () => {
    $('urlap').style.boxShadow = '-4px 4px 3px -2px green';
    clearInterval(timer);
    timer = setInterval(() => {
        $('urlap').style.boxShadow = '-4px 4px 3px -2px #4d4d4d57';
    }, 1000);
});