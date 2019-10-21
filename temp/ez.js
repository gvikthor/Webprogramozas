function $(id){
    return document.getElementById(id);
}
let vaszon = $('vaszon');
let ceruza = vaszon.getContext('2d');

ceruza.lineJoin = 'round';
ceruza.strokeStyle = '#000000';
ceruza.lineWidth = 10;

function c(event){
    let a = {
        x: (event.clientX - vaszon.getBoundingClientRect().left),
        y: (event.clientY - vaszon.getBoundingClientRect().top)
        /*x: (event.clientX - vaszon.offsetLeft),
        y: (event.clientY - vaszon.offsetTop)*/
    }
    return a;
}

//szin
let szinek = document.querySelectorAll('.szin');

for(let i = 0; i < szinek.length; i++){
    szinek[i].addEventListener('click', ()=>{
        ceruza.strokeStyle = window.getComputedStyle(szinek[i], null).getPropertyValue('background-color');
        $('aktszin').style.backgroundColor = window.getComputedStyle(szinek[i], null).getPropertyValue('background-color');
    });
}

//vastag
let vast = document.querySelectorAll('.vastagsag');

for(let i = 0; i < vast.length; i++){
    vast[i].addEventListener('click', ()=>{
        ceruza.lineWidth = parseInt(vast[i].innerText);
        $('aktvast').innerHTML = vast[i].innerHTML;
    });
}

///rajz
let ceruzaLent = false;
let elozo = {
    x: -1,
    y: -1
}
vaszon.addEventListener('mousedown',()=>{
    if(event.buttons == 1){
        ceruzaLent = true;
    }
});

vaszon.addEventListener('mouseup',()=>{
    if(event.buttons == 1){
        ceruzaLent = false;
        elozo = {
            x: -1,
            y: -1
        }
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
    if(ceruzaLent && event.buttons == 1){
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

document.querySelector('button').addEventListener('click', ()=>{
    ceruza.clearRect(0, 0, vaszon.width, vaszon.height);
});
