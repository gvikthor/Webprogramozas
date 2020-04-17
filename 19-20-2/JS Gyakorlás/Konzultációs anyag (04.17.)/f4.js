let vaszon = document.querySelector('canvas');
let ceruza = vaszon.getContext('2d');

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

document.querySelector('#bmp').addEventListener('click',()=>{
    ceruza.strokeStyle = 'red';

    ceruza.beginPath();

    ceruza.moveTo(bigmac.x,500-bigmac.y);
    bigmac.x += 10;
    bigmac.y += 10;
    ceruza.lineTo(bigmac.x,500-bigmac.y);

    ceruza.closePath();
    ceruza.stroke();

    if(!bigmac.up){
        ceruza.fillStyle = 'red';
        ceruza.fillText(bigmac.y,bigmac.x,500-bigmac.y);
        bigmac.up = true;
    }
});



document.querySelector('#bmm').addEventListener('click',()=>{
    ceruza.strokeStyle = 'red';

    ceruza.beginPath();

    ceruza.moveTo(bigmac.x,500-bigmac.y);
    bigmac.x += 10;
    bigmac.y -= 10;
    ceruza.lineTo(bigmac.x,500-bigmac.y);

    ceruza.closePath();
    ceruza.stroke();

    if(bigmac.up){
        ceruza.fillStyle = 'red';
        ceruza.fillText(bigmac.y,bigmac.x,500-bigmac.y);
        bigmac.up = false;
    }
});

document.querySelector('#spp').addEventListener('click',()=>{
    ceruza.strokeStyle = 'green';

    ceruza.beginPath();

    ceruza.moveTo(spoti.x,500-spoti.y);
    spoti.x += 10;
    spoti.y += 10;
    ceruza.lineTo(spoti.x,500-spoti.y);

    ceruza.closePath();
    ceruza.stroke();

    if(!spoti.up){
        ceruza.fillStyle = 'green';
        ceruza.fillText(spoti.y,spoti.x,500-spoti.y);
        spoti.up = true;
    }
});

document.querySelector('#spm').addEventListener('click',()=>{
    ceruza.strokeStyle = 'green';

    ceruza.beginPath();

    ceruza.moveTo(spoti.x,500-spoti.y);
    spoti.x += 10;
    spoti.y -= 10;
    ceruza.lineTo(spoti.x,500-spoti.y);

    ceruza.closePath();
    ceruza.stroke();

    if(spoti.up){
        ceruza.fillStyle = 'green';
        ceruza.fillText(spoti.y,spoti.x,500-spoti.y);
        spoti.up = false;
    }
});