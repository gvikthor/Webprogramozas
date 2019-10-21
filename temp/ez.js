function $(id){
    return document.getElementById(id);
}
let vaszon = $('vaszon');
let ceruza = vaszon.getContext('2d');

function c(event){
    let a = {
        x: (event.clientX - vaszon.offsetLeft),
        y: (event.clientY - vaszon.offsetTop)
    }
    return a;
}

let ceruzaLent = false;
let elozo = {
    x: -1,
    y: -1
}
vaszon.addEventListener('mousedown',()=>{
    ceruzaLent = true;
});

vaszon.addEventListener('mouseup',()=>{
    ceruzaLent = false;
    elozo = {
        x: -1,
        y: -1
    }
});

vaszon.addEventListener('mouseleave', ()=>{
    ceruzaLent = false;
    elozo = {
        x: -1,
        y: -1
    }
});

vaszon.addEventListener('mousemove',()=>{
    if(ceruzaLent){
        //console.log(c(event).x + ' ' + c(event).y);
            ceruza.beginPath();
        if(elozo.x == -1){
            elozo = c(event);
            ceruza.moveTo(elozo.x, elozo.y);
        }else{
            let eger = c(event);
            ceruza.moveTo(elozo.x, elozo.y);
            ceruza.lineTo(eger.x, eger.y);
            elozo = eger;
        }
        ceruza.stroke();
        ceruza.closePath();
    }
});
