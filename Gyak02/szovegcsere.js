function $(arg){
    return document.getElementById(arg);
}

function kisbetu(param){
    return param[0] == param[0].toLowerCase();
}

function irasjel(param){
    let a = param;
    if(param.includes('.') || param.includes(',') || param.includes('?') || param.includes('!') || param.includes(':')){
        a = '';
        for(let i = 0; i < param.length-1; i++){
            a += param[i];
        }
    }
    return a;
}

function irasjelReturn(param){
    if(param.includes('.')) console.log('. ');
    if(param.includes(',')) console.log( ', ');
    if(param.includes('?')) console.log( '? ');
    if(param.includes('!')) console.log( '! ');
    if(param.includes(':')) console.log( ': ');
    return ' ';
}

let szam = Math.floor(Math.random()*100);

$('csereld').addEventListener('click', () => {
    let szoveg = $('szoveg').innerHTML.split(' ');
    $('szoveg').innerHTML = '';
    let ezt = $('ezt').value;
    let erre = $('erre').value;
    for(szo of szoveg){
        if(irasjel(szo.toLowerCase()) == ezt.toLowerCase()){
            if(kisbetu(szo)){
                $('szoveg').innerHTML += erre+' ';
            }else{
                let nagybetus = erre[0].toUpperCase();
                for(let i = 1; i < erre.length; i++){
                    nagybetus += erre[i];
                }
                $('szoveg').innerHTML += nagybetus+irasjelReturn(szo);
            }
        }else{
            $('szoveg').innerHTML += szo+' ';
        }
    }
});
