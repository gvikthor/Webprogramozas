function $(id){
    return document.getElementById(id);
}

let vaszon = $('vaszon');
let context = vaszon.getContext('2d');

context.strokeStyle = "#000000";
context.lineJoin = "round";
context.lineWidth = 5;
let elozoPoz = {
    x: -1,
    y: -1
};
let ceruzaLent = false;

function c(event){ //koordináták, a client-et át kell számolni canvasba, különben el lesz csúszva
    return {
        x: event.clientX - vaszon.offsetLeft,
        y: event.clientY - vaszon.offsetTop
    }
}

//színek
let szinek = document.querySelectorAll('.szin');
for(let i = 0; i < szinek.length; i++){
    szinek[i].addEventListener('click', ()=>{

        /* nekünk ez lenne a kényelmes, de ez egyszerűen csak nem működik, ezért bonyolítanunk kell
        context.strokeStyle = szinek[i].style.backgroundColor;
        $('akt').style.backgroundColor = szinek[i].style.backgroundColor;
        */

       context.strokeStyle = window.getComputedStyle(szinek[i], null).getPropertyValue("background-color");
       $('aktszin').style.backgroundColor = window.getComputedStyle(szinek[i], null).getPropertyValue("background-color");
    });
}

//vastagságok
let vastagsagok = document.querySelectorAll('.vast');
for(let i = 0; i < vastagsagok.length; i++){
    vastagsagok[i].addEventListener('click', ()=>{
        $('aktvast').innerText = vastagsagok[i].innerText;
        context.lineWidth = parseInt(vastagsagok[i].innerText);
    });
}

////// innentől történik a rajzolás //////
vaszon.addEventListener('mousedown',()=>{
    if(event.buttons == '1'){ // csak balklikkel történjenek dolgok
        ceruzaLent = true;
    }
});

vaszon.addEventListener('mouseup',()=>{
    //
    if(event.buttons == '1'){
        context.beginPath();
        context.moveTo(c(event).x, c(event).y);
        context.lineTo(c(event).x, c(event).y);
        context.stroke();
        context.closePath();
        context.stroke();
    }
    // ez a rész azért kell, hogy csak egy sima pontot is tudjunk rajzolni

    ceruzaLent = false;
    elozoPoz.x = -1;

});

vaszon.addEventListener('mousemove',()=>{
    if(ceruzaLent){ 
        context.beginPath();
        if(elozoPoz.x != -1){
            context.moveTo(elozoPoz.x, elozoPoz.y);
            context.lineTo(c(event).x, c(event).y); 
        }
        context.closePath();
        context.stroke();
        elozoPoz = {
            x: c(event).x,
            y: c(event).y
        }
    }
});

vaszon.addEventListener('mouseleave', ()=>{
    ceruzaLent = false;
    elozoPoz.x = -1;
});
////// eddig történik a rajzolás //////

//törlés
$('torol').addEventListener('click', ()=>{
    context.clearRect(0, 0, vaszon.width, vaszon.height);
});