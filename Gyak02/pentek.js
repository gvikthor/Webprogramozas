function $(param){
    return document.getElementById(param);
}

/*$('b').addEventListener('click', () => {
    $('d').innerHTML = '<img style="width: 25%;" src="' + $('i').value + '">';
});*/
/*
$('b').addEventListener('click', () => {
    let seged = $('i1').value;
    $('i1').value = $('i2').value;
    $('i2').value = seged;
});*/
/*
$('szamlalo').disabled = true;
$('szamlalo').value = 5;
$('btn_m').addEventListener('click', () => {
    let szam = $('szamlalo').value;
    szam--;
    $('szamlalo').value = szam;
    if(szam == 2){
        $('btn_m').disabled = true;
    }
    $('btn_p').disabled = false;
})
$('btn_p').addEventListener('click', () => {
    let szam = $('szamlalo').value;
    szam++;
    $('szamlalo').value = szam;
    if(szam == 10){
        $('btn_p').disabled = true;
    }
    $('btn_m').disabled = false;
})

$('mehet').addEventListener('click',() => {
    let szam = document.querySelector('input').value;
    let szoveg = '';
    for(let i = 0; i < szam; i++){
        szoveg += '<input id="in_'+ i +'"><br><button id="btn_'+ i +'">Csere</button><br>';
    }
    szoveg  += '<input id="in_10"><br>';
    $('inputok').innerHTML = szoveg;

    for(let i = 0; i < szam; i++){
        $('btn_'+i).addEventListener('click', () => {
            let seged = $('in_'+i).value;
            $('in_'+i).value = $('in_'+(i+1)).value;
            $('in_'+(i+1)).value = seged;
        });
    }
})*/




/*
let inputok = document.querySelectorAll('input');
let gombok = document.querySelectorAll('button');

for(gomb of gombok){
    gomb.addEventListener('click',() => {
        for(input of inputok){
            input.value = '';
        }
    })
}*/
/*
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('table').innerHTML += `
        <tr>
            <td>`+ $('in1').value +`</td>
            <td>`+ $('in2').value +`</td>
            <td>`+ $('in3').value +`</td>
        <tr>
    `;
})*/


/*
let filmek = [
    {
        cim: 'Zsivány egyes',
        kiado: 'Lucasfilm',
        rendezok: ['Gareth Edwards'],
        foszereplok: ['Felicity Jones', 'Diego Luna']
    },
    {
        cim: 'A Karib-tenger kalózai',
        kiado: 'Walt Disney Pictures',
        rendezok: ['Gore Verbinski'],
        foszereplok: ['	Johnny Depp', 'Geoffrey Rush', 'Orlando Bloom', 'Keira Knightley']
    },
    {
        cim: 'Végjáték',
        kiado: 'Marvel Studios',
        rendezok: ['Anthony Russo', 'Joe Russo'],
        foszereplok: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Scarlett Johansson', 'Mark Ruffalo', 'Jeremy Renner', 'Crying in the Cinema']
    }
]

$('hozzaad').addEventListener('click', () => {
    filmek.push({
        cim: $('cim').value,
        kiado: $('kiado').value,
        rendezok: $('rendezok').value.split(','),
        foszereplok: $('szereplok').value.split(',')
    });
})

$('bemenet9').addEventListener('keyup', () => {
    let szoveg = '<table> <tr> <td>Cím</td> <td>Kiadó</td> <td>Rendező(k)</td> <td>Főszereplő(k)</td> </tr>';
    let keresd = $('bemenet9').value.toLowerCase();
    for(film of filmek){ //minden szövegként megadott számot
        let talalt = false;
        let rendezok = '';
        let foszereplok = '';
        if(film.cim.toLowerCase().includes(keresd) || film.kiado.toLowerCase().includes(keresd)){
            talalt = true;
        }
        for(rendezo of film.rendezok){
            rendezok += rendezo + '<br>';
            if(rendezo.toLowerCase().includes(keresd)){
                talalt = true;
            }
        }
        for(foszereplo of film.foszereplok){
            foszereplok += foszereplo + '<br>';
            if(foszereplo.toLowerCase().includes(keresd)){
                    talalt = true;
                }
            }
            

            if(talalt){
                szoveg += '<tr> <td>' + film.cim + '</td> <td>' + film.kiado + '</td> <td>' + rendezok + '</td> <td>' + foszereplok + '</td> </tr>';
            }
        }
        szoveg += '</table>'
        $('f9').innerHTML = szoveg;
});*/

let szam = Math.floor(Math.random()*10);
$('g1').addEventListener('click', () => {
    if(isNaN(document.querySelector('input').value)){
        console.log('ez nem egy szám');
    }else if(szam > document.querySelector('input').value){
        console.log('A tipped túl kicsi');
    }else if(szam < document.querySelector('input').value){
        console.log('A tipped túl nagy');
    }else{
        console.log('Nyertél')
        szam = Math.floor(Math.random()*10);
    }
})

$('g2').addEventListener('click', () => {
    console.log('A szám: '+szam);
    szam = Math.floor(Math.random()*10);
})

bit.ly/web-thor