let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let bigmac = {
    x: 0,
    y: 250,
    up: true
};

let spoti = {
    x: 0,
    y: 300,
    up: true
};

document.querySelector('#bigmacp').addEventListener('click',()=>{
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(bigmac.x,500-bigmac.y);      //canvas bal fentről indexel 0-tól
    bigmac.x += 10;
    bigmac.y += 10;
    context.lineTo(bigmac.x,500-bigmac.y);
    context.closePath();
    context.stroke();

    if(!bigmac.up){
        context.fillStyle = 'red';
        context.fillText(bigmac.y,bigmac.x,500-bigmac.y);
        bigmac.up = true;
    }
});

document.querySelector('#bigmacm').addEventListener('click',()=>{
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(bigmac.x,500-bigmac.y);
    bigmac.x += 10;
    bigmac.y -= 10;
    context.lineTo(bigmac.x,500-bigmac.y);
    context.closePath();
    context.stroke();

    if(bigmac.up){
        context.fillStyle = 'red';
        context.fillText(bigmac.y,bigmac.x,500-bigmac.y);
        bigmac.up = false;
    }
});

document.querySelector('#spotip').addEventListener('click',()=>{
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(spoti.x,500-spoti.y);
    spoti.x += 10;
    spoti.y += 10;
    context.lineTo(spoti.x,500-spoti.y);
    context.closePath();
    context.stroke();

    if(!spoti.up){
        context.fillStyle = 'green';
        context.fillText(spoti.y,spoti.x,500-spoti.y);
        spoti.up = true;
    }
});

document.querySelector('#spotim').addEventListener('click',()=>{
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(spoti.x,500-spoti.y);
    spoti.x += 10;
    spoti.y -= 10;
    context.lineTo(spoti.x,500-spoti.y);
    context.closePath();
    context.stroke();

    if(spoti.up){
        context.fillStyle = 'green';
        context.fillText(spoti.y,spoti.x,500-spoti.y);
        spoti.up = false;
    }
});