// A KÓD ÍGY EGÉSZÉBEN NEM FELTÉTLEN FUT LE, HISZEN A GYAKORLATON EGYES RÉSZEIT NÉHA KIKOMMENTELTEM

function $(param){
    return document.getElementById(param);
}

document.addEventListener('keydown', () => {
    console.log(event);
    if(!(event.key == 'Shift' || event.key == 'CapsLock')){
        if(event.key == 'Enter'){
            $('d').innerHTML += '<br>';
        }else{
            $('d').innerHTML += event.key;
        }
    }
});

$('i').addEventListener('keydown', () => {
    if(isNaN(event.key) || event.key == ' '){
        event.preventDefault();
    }
});*//*
let inputs = document.querySelectorAll('.szam');
for(input of inputs){
    input.addEventListener('keydown', () => {
        if(isNaN(event.key) || event.key == ' '){
            event.preventDefault();
        }
    });
}


let tavolsagok = [];
let idok = [];
let elozo = {}
let kattintott = false;
document.addEventListener('click', () => {
    let kattido = new Date();
    if(!kattintott){
        kattintott = true;
        elozo.x = event.clientX;
        elozo.y = event.clientY;
        elozo.ido = new Date();
    }else{
        let eredmeny = Math.sqrt( Math.pow(event.clientX - elozo.x, 2) + Math.pow(event.clientY - elozo.y, 2) )
        let eredmeny2= (kattido - elozo.ido)
        console.log(eredmeny);
        console.log(eredmeny2);
        tavolsagok.push(eredmeny);
        idok.push(kattido - elozo.ido);

        let sum = 0;
        for(tavolsag of tavolsagok){
            sum += tavolsag;
        }
        let atlag = sum/tavolsagok.length;
        console.log('Átlagos elmozdulás: '+ atlag);

        sum = 0;
        for(ido of idok){
            sum += ido;
        }
        atlag = sum/idok.length;
        console.log('Átlagos idő: '+ atlag);
    }    
    elozo.x = event.clientX;
    elozo.y = event.clientY;
    elozo.ido = kattido;
})

function general(meret){
    let szoveg = '';
    for(let i = 0; i < meret; i++){
        szoveg += '<tr>';
        for(let j = 0; j < meret; j++){
            szoveg += '<td></td>'
        }
        szoveg += '</tr>';
    }
    $('jatekter').innerHTML = szoveg;
}

general(10);

let jatektabla = document.querySelectorAll('td');
let iksz = true;
for(doboz of jatektabla){
    doboz.addEventListener('click',() => {
        if(event.target.innerHTML == ''){
            if(iksz){
                event.target.innerHTML = 'X';
                iksz = false;
            }else{
                event.target.innerHTML = 'O';
                iksz = true;
            }
        }
    })
}

let links = document.querySelectorAll('a');
for(link of links){
    let temp = link.href.split('/');
    console.log(temp)
    if(!temp[2].endsWith('elte.hu')){
        link.addEventListener('click', () => {
            event.preventDefault();
        })
    }
}
