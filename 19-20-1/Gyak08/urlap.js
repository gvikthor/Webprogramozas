function $(id){
    return document.getElementById(id);
}

/*
let hibak;
let eredmeny;
function ellenoriz(){
    let urlap = $('urlap');
    let rendben = true;
    eredmeny = {};
    hibak = [];

    // Név
    if(urlap.nev.value != ''){ //vagy lehetne urlap['nev'].value is
        eredmeny.nev = urlap.nev.value;
    }else{
        rendben = false;
        hibak.push({
            szoveg: 'A név megadása kötelező!',
            id: 'nev'
        });
    }

    // Kor
    if(!isNaN(urlap.kor.value)){
        if(urlap.kor.value != ''){
            eredmeny.kor = urlap.kor.value;
        }else{
            rendben = false;
            hibak.push({
                szoveg: 'Az életkor megadása kötelező!',
                id: 'kor'
            });
        }
    }else{
        rendben = false;
        hibak.push({
            szoveg: 'Az életkor csak szám lehet!',
            id: 'kor'
        });
    }

    // Nem
    if(urlap.nem[0].checked){
        eredmeny.nem = 'Férfi';
    }else if(urlap.nem[1].checked){
        eredmeny.nem = 'Nő';

        // Leánykori név
        if(urlap.l_nev.value != ''){
            eredmeny.leany = urlap.l_nev.value;
        }else{
            rendben = false;
            hibak.push({
                szoveg: 'A leánykori név megadása kötelező, még ha ugyanaz is!',
                id: 'l_nev'
            });
        }

    }else{
        rendben = false;
        hibak.push({
            szoveg: 'A nem megadása kötelező!',
            id: 'nem'
        });
    }

    // Város
    if(urlap.varos.value != ''){
        eredmeny.varos = urlap.varos.value;
    }else{
        rendben = false;
        hibak.push({
            szoveg: 'A város megadása kötelező!',
            id: 'varos'
        });
    }

    // Kér/nem kér
    // ez egy többszörös választásos form tehát az eredmény az lesz, ami ki van választva
    // de nekünk nem ez kell, hanem minden, ami be van írva a kérek oszlopba
    if(urlap.kell.length > 0){
        eredmeny.szolgaltatasok = [];
        for(szolgaltatas of urlap.kell){
            eredmeny.szolgaltatasok.push(szolgaltatas.value);
        }
    }else{
        rendben = false;
        hibak.push({
            szoveg: 'Legalább egy szolgáltatást ki kell választani!',
            id: 'kell'
        });
    }

    // Helyszín
    eredmeny.helyszinek = [];
    if(urlap.helyszin[0].checked || urlap.helyszin[1].checked || urlap.helyszin[2].checked){
        for(let i = 0; i < parseInt(urlap.helyszin.value); i++){
            eredmeny.helyszinek.push(urlap['helyszin_'+i].value);
        }
    }

    // Egyéb
    eredmeny.egyeb = urlap.egyeb;

    urlap = {}; // ne tárolgassunk személyes adatokat, ha már nem kellenek
    return rendben;
}

function hibakiir(volthiba){
    console.log(hibak);
    let szoveg = '';
    for(input of $('urlap')){
        input.style = 'background: #ffffff;';
    }
    
    if(volthiba){
        szoveg = ''
        for(hiba of hibak){
            szoveg += hiba.szoveg+'<br>';
            $('urlap')[hiba.id].style = 'background: #f03232;';
        }
    }else{
        szoveg = 'Köszönjük, hogy minket választottál! Hamarosan felkeresünk a megadott e-mail címen.';
        for(input of $('urlap')){
            input.style = 'background: #ffffff;';
        }
    }
    $('hibak').innerHTML = szoveg;
}

document.addEventListener('submit', () => {
    event.preventDefault(); // nehogy elküldje az adatokat
    // a formban a gombok másként viselkednek, mint egy mezei click esetén, főleg, hogy a submit nem is egy gomb
    //console.log(event.target); // ez mindig a form lesz, még a belső gombok esetén is
    //console.log(event.explicitOriginalTarget.id); // ezért így kéne elérni a küldő gombot
});
*/
// Ha kiválasztja a férfi/nő radio gombot
$('urlap').nem[0].addEventListener('click', () => { // férfi
    $('leanykor').innerHTML = '';
});
$('urlap').nem[1].addEventListener('click', () => { // nő
    $('leanykor').innerHTML = `
        <label>Leánykori név</label><br>
        <input type="text" name="l_nev" id="l_nev">
    `;  // <------------- itt a name="l_nev" az új
});

// Ha át akar pakolni a kell/nem kell listából
/*
$('gomb_nemkell').addEventListener('click', () => {
    event.preventDefault();
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of $('urlap').kell){
        if(szolgaltatas.selected){ // ha ki van választva, nem kell
            nemkell += '<option value="'+szolgaltatas.value+'">'+szolgaltatas.text+'</option>';
        }else{
            kell    += '<option value="'+szolgaltatas.value+'">'+szolgaltatas.text+'</option>';
        }
    }
    $('kell').innerHTML = kell;
    $('nemkell').innerHTML += nemkell;
});
$('gomb_kell').addEventListener('click', () => {
    event.preventDefault();
    let kell = '';
    let nemkell = '';
    for(szolgaltatas of $('urlap').nemkell){
        if(szolgaltatas.selected){ // ha ki van választva, kell
            kell    += '<option value="'+szolgaltatas.value+'">'+szolgaltatas.text+'</option>';
        }else{
            nemkell += '<option value="'+szolgaltatas.value+'">'+szolgaltatas.text+'</option>';
        }
    }
    $('kell').innerHTML += kell;
    $('nemkell').innerHTML = nemkell;
});
*/

// Ha kiválasztja a helyszín mennyisége radio gombot
$('urlap').helyszin[0].addEventListener('click', () => { // férfi
    $('helyszin_inputok').innerHTML = '';
});
$('urlap').helyszin[1].addEventListener('click', () => { // férfi
    $('helyszin_inputok').innerHTML = '1. helyszín: <input type="text" name="helyszin_0" id="helyszin_0"><br>';
});/*
$('urlap').helyszin[2].addEventListener('click', () => { // férfi
    $('helyszin_inputok').innerHTML = '1. helyszín: <input type="text" name="helyszin_0" id="helyszin_0"><br>2. helyszín: <input type="text" name="helyszin_1" id="helyszin_1"><br>';
});
$('urlap').helyszin[3].addEventListener('click', () => { // férfi
    $('helyszin_inputok').innerHTML = '1. helyszín: <input type="text" name="helyszin_0" id="helyszin_0"><br>2. helyszín: <input type="text" name="helyszin_1"  id="helyszin_1"><br>3. helyszín: <input type="text" name="helyszin_2" id="helyszin_2"><br>';
});*/

// Form elküldése
/*$('kuldes').addEventListener('click', () => {
    if(ellenoriz()){
        $('urlap').reset();
        console.log(eredmeny);
        hibakiir(false)
    }else{
        hibakiir(true);
    }
    eredmeny = {}; // ne tárolgassunk személyes adatokat, ha már nem kellenek
});

// Ne maradjanak beírt adatok
document.onload = $('urlap').reset();*/


// Ha a user épp valamit szerkeszt a formban, legyen zöld... NaGyOn  ha s  z   n     o        s
let timer;
$('urlap').addEventListener('input', () => {
    $('urlap').style = 'box-shadow: -4px 4px 3px -2px #00990057;';
    clearInterval(timer);
    timer = setInterval(() => {$('urlap').style = '';}, 500);
});