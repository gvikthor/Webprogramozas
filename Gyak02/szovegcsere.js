function $(arg){
    return document.getElementById(arg);
}

function nagy(arg){
    return arg != arg.toLowerCase();
}

let szoveg = 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It\'s not a story the Jedi would tell you. It\'s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.'.split(' ');
for(szo of szoveg){
    $('kiir').innerHTML += szo + ' ';
}

$('gomb').addEventListener('click',() => {
    let kiir = '';
    for(let i = 0; i < szoveg.length; i++){
        if(szoveg[i].toLowerCase() == $('in').value.toLowerCase()){
            let nagybetu = false;
            let szo = szoveg[i].split(' ');
            if(nagy(szo[0])){
                nagybetu = true;
            }
            szo = $('in2').value.split('');
            szoveg[i] = $('in2').value;
            if(nagybetu){
                let szoveg_vege = '';
                for(let i = 1; i < szo.length; i++){
                    szoveg_vege += szo[i];
                }
                szoveg[i] = szo[0].toUpperCase() + szoveg_vege;
            }
        }
        kiir += szoveg[i] + ' ';
    }
    $('kiir').innerHTML = kiir;
});
