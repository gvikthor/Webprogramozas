let tracks = document.querySelectorAll('li');
let textarea = document.querySelector('textarea');
let svgbtn = document.querySelector('#showbutton');
let svg = document.querySelector('svg');
let akt = -1;

function getY(param = 'C'){
    switch(param){
        case 'C': return 70;
        case 'D': return 60;
        case 'E': return 50;
        case 'F': return 40;
        case 'G': return 30;
        case 'A': return 20;
        case 'B': return 10;
        default: return 0;
    }
}

function draw(){
    if(textarea.value != ''){
        let val = JSON.parse(textarea.value);
        let text = '';
        for(v of val){
            text += `<rect x="${v.start}" y="${getY(v.note)}" width="${v.end - v.start}" height="10"></rect>`;
        }
        svg.innerHTML = text;
    }
}

for(let i = 0; i < tracks.length; i++){
    tracks[i].addEventListener('click',()=>{
        if(akt == -1){
            tracks[i].classList.add('selected')
            akt = i;
            textarea.value = tracks[i].dataset['notes'];
            draw();
        }else{
            tracks[akt].classList.remove('selected')
            if(akt == i){
                akt = -1;
                textarea.value = '';
                draw();
            }else{
                tracks[i].classList.add('selected')
                akt = i;
                textarea.value = tracks[i].dataset['notes'];
                draw();
            }
        }
    });
}

svgbtn.addEventListener('click', ()=>{
    draw();
});