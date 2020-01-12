let tracks = document.querySelectorAll('.thor_track');
let textarea = document.querySelector('textarea');
let showbutton = document.querySelector('#showbutton');
let svg = document.querySelector('svg');

function getY(note = 'C'){
    switch(note){
        case 'C': return 70;
        case 'D': return 60;
        case 'E': return 50;
        case 'F': return 40;
        case 'G': return 30;
        case 'A': return 20;
        case 'B': return 10;
        default : return 0;
    }
}

function drawSVG(id = -1){
    let boxes = '';
    let notes = '';
    if(id > -1){
        notes = JSON.parse(tracks[id].dataset['notes']);
    }else{
        notes = JSON.parse(textarea.value);
    } 
    for(noty of notes){
        boxes+=`<rect x="${noty.start}" y="${getY(noty.note)}" width="${noty.end-noty.start}" height="10"></rect>`;
    }
    svg.innerHTML = boxes;
}

let active = -1;
for(let i = 0; i < tracks.length; i++){
    tracks[i].addEventListener('click',()=>{
        if(active > -1){
            tracks[active].classList.remove('selected');
            textarea.value = '';
            svg.innerHTML = '';
        }
        if(i != active){
            tracks[i].classList.add('selected');
            active = i;
            textarea.value = tracks[i].dataset['notes'];
            drawSVG(i);
        }else{
            active = -1;
        }
    });
}

showbutton.addEventListener('click',()=>{
    drawSVG();
});