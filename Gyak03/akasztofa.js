let jatekter = document.querySelector('table');
let info = document.getElementById('info');
let szo = '';
let jatekban = false;
let szavak = ['ALMA','KÖRTE','ELTE','AKATALÓGUSTÓLJOBBAKAJEGYEIM'];
let szamlalo = 10;
let mezok;
let szohossz;

document.querySelector('button').addEventListener('click', () => {
    jatekban = true;
    szamlalo = 10;
    info.innerHTML = '10'
    szo = szavak[Math.floor( Math.random()*szavak.length )];
    szohossz = szo.length;
    jatekter.innerHTML = '';
    let szoveg = '<tr>';
    for(let i = 0; i < szo.length; i++){
        szoveg += '<td></td>';
    }
    szoveg += '</tr>';
    jatekter.innerHTML = szoveg;
    mezok = document.querySelectorAll('td');
});

function betu(gomb){
    //return gomb == 'a' || gomb == 'b' stb...;
    //return gomb >= 65 && gomb <= 90;
    console.log(gomb);
    return gomb.length == 1 && /[A-ZÖÜÓŐÚÉÁŰÍ]/.test(gomb.toUpperCase());
}

document.addEventListener('keydown',() => {
    if(jatekban && betu(event.key)){
        if(szo.includes(event.key.toUpperCase())){
            let i = 0;
            for(mezo of mezok){
                if(szo[i] == event.key.toUpperCase()){
                    if(mezo.innerHTML == ''){
                        mezo.innerHTML = szo[i];
                        szohossz--;
                    }
                    if(szohossz == 0){
                        jatekban = false;
                        info.innerHTML = 'Nyertél';
                    }
                }
                i++;
            }
        }else{
            szamlalo--;
            if(szamlalo == 0){
                jatekban = false;
                info.innerHTML = 'Vesztettél';
            }else{
                info.innerHTML = szamlalo;
            }
        }
    }
});


