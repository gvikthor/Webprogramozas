let vaszon = document.querySelector('canvas');
let ceruza = vaszon.getContext('2d');
/*
ceruza.moveTo(0,0);
ceruza.lineTo(300,100);
ceruza.stroke();
*/
/*
ceruza.beginPath();
ceruza.arc(100,200,20,0,2*Math.PI);
ceruza.stroke();
*/
/*
ceruza.font = "30px Arial";
ceruza.strokeText("Hello There!",0,500);
ceruza.fillText("General Kenobi!", 100,400);
*/
/*
let kep = new Image();
kep.src = 'https://hobbikert.hu/images/cache/0dd46e9cda49afe823d92aa6b58f658a_w758.jpg';
kep.onload = ()=>{
    ceruza.drawImage(kep, 300,40,500,200 , 0, 0, 500, 500);

    ceruza.font = "30px Arial";
    ceruza.strokeText("Hello There!",0,500);
    ceruza.fillText("General Kenobi!", 100,400);

    ceruza.beginPath();
    ceruza.arc(100,200,20,0,2*Math.PI);
    ceruza.stroke();
}*/

function delegal(szulo, gyerek, esemeny, csinaljaAzt){
    function esemenyKezelo(event){
        let kezeloElem = this;
        let celElem = event.target;
        let legkozelebbi = celElem.closest(gyerek);

        if(kezeloElem.contains(legkozelebbi)){
            csinaljaAzt(event,legkozelebbi);
        }
    }

    szulo.addEventListener(esemeny, esemenyKezelo);
}

function szinValt(event,elem){
    ceruza.strokeStyle = elem.innerHTML;
}

document.querySelector('button').addEventListener('click', ()=>{
    ceruza.clearRect(0,0,vaszon.width,vaszon.height);
});

let elozo = {
    x: -1,
    y: -1
};
let rajzol = false;

ceruza.strokeStyle = "red";
let szinek = document.querySelector('#szinek');
delegal(szinek,'td','click',szinValt);

/*for(let i = 0; i < szinek.length; i++){
    szinek[i].addEventListener('click', ()=>{
        ceruza.strokeStyle = szinek[i].innerHTML;
    });
}*/

ceruza.lineJoin = "round";
ceruza.lineWidth = 20;
let vastagsagok = document.querySelector('#vastagsagok').querySelectorAll('td');
for(let i = 0; i < vastagsagok.length; i++){
    vastagsagok[i].addEventListener('click', ()=>{
        ceruza.lineWidth = parseInt(vastagsagok[i].innerHTML);
    });
}

vaszon.addEventListener('mousemove', ()=>{
    if(rajzol){
        let ujX = event.clientX - vaszon.offsetLeft;
        let ujY = event.clientY - vaszon.offsetTop;

        if(elozo.x != -1){
            ceruza.beginPath();
                ceruza.moveTo(elozo.x,elozo.y);
                ceruza.lineTo(ujX, ujY);
            ceruza.closePath();
            ceruza.stroke();
        }

        elozo.x = ujX;
        elozo.y = ujY;
    }
});

vaszon.addEventListener('mousedown', ()=>{
    if(event.button == '0'){
        rajzol = true;
    }
});

vaszon.addEventListener('mouseup', ()=>{
    if(event.button == '0'){
        rajzol = false;
        elozo.x = -1;
    }
});

vaszon.addEventListener('mouseleave', ()=>{
    rajzol = false;
    elozo.x = -1;
});