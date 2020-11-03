function validKey(key){
    return !isNaN(parseInt(key)) || key == '.';
}
function validIP(string){    //ő lesz az input ellenőrzés, így a keyup eventlistenernek elég őt meghívni, nem lesz csúnya a logikája
    let parts = string.split('.');  //felbontom pontonként az IP címet
    if(parts.length != 4) return false;  //ha nem 4 része van, akkor már rip eleve
    return (
        !isNaN(parseInt(parts[0])) && parts[0] >= 0 && parts[0] < 256 &&  //amúgy minden részre megnézem, hogy 256 alatt van-e
        !isNaN(parseInt(parts[1])) && parts[1] >= 0 && parts[1] < 256 &&
        !isNaN(parseInt(parts[2])) && parts[2] >= 0 && parts[2] < 256 &&
        !isNaN(parseInt(parts[3])) && parts[3] >= 0 && parts[3] < 256
    );
}

let d = document.querySelector('div');
let i = document.querySelector('input');

i.addEventListener('keydown',(event)=>{        //lenyomáskor akadályozza meg a beleírást
    d.innerHTML = `<br>Lenyomott gomb: ${event.key}`;
    
    if(!validKey(event.key)){
        event.preventDefault();
        return;
    }
});

i.addEventListener('keyup', ()=>{               //felengedéskor színezi ki az inputot
    if(validIP(i.value)){
        i.classList.add('helyes');
        i.classList.remove('helytelen');
    }else{
        i.classList.remove('helyes');
        i.classList.add('helytelen');
    }
});