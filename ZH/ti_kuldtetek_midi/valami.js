let tracks = document.querySelectorAll('li');
let textarea = document.querySelector('textarea');
let svgbtn = document.querySelector('#showbutton');
let svg = document.querySelector('svg');
let akt = -1;
let x = false;
let time = 0;

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
            x = true;
            
            textarea.value = tracks[i].dataset['notes'];
            draw();
        }else{
            tracks[akt].classList.remove('selected')
            if(akt == i){
                akt = -1;
                textarea.value = '';
                x = false;
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

document.addEventListener('keydown', ev=>{
        if(ev.key == "ArrowDown"){
            if( !x || akt === tracks.length-1){
                if(akt === tracks.length-1){
                    tracks[akt].classList.remove('selected');
                }
                tracks[0].classList.add('selected');
                akt = 0;
                x = true;
                textarea.value = tracks[0].dataset['notes'];
                draw();
            }else{
                tracks[akt].classList.remove('selected');
                ++akt;
                tracks[akt].classList.add('selected');
                textarea.value = tracks[0].dataset['notes'];
                draw();
           }
        }
        
        if(ev.key == "ArrowUp"){
            if( !x || akt === 0){
                if(akt === 0){
                    tracks[akt].classList.remove('selected');
                }
                x = true;
                tracks[tracks.length-1].classList.add('selected');
                akt = tracks.length-1;
                textarea.value =tracks[tracks.length-1].dataset['notes'];
                draw();
            }else{
                tracks[akt].classList.remove('selected');
                --akt; 
                tracks[akt].classList.add('selected');
                textarea.value =tracks[akt].dataset['notes'];
                draw();
            }
        }
    });

svgbtn.addEventListener('click', ()=>{
    draw();
});




let jason = [];
let start;
let big_jason;

document.addEventListener('keydown', ev=>{
    if(ev.key > "0" && ev.key < "9"){
        document.querySelectorAll(".keyboard div")[ev.key-1].classList.add('active');
        if(svg.classList.contains('active')){
            start = time;
        }
    }
});

document.addEventListener('keyup', ev=>{
    if(ev.key > "0" && ev.key < "9"){
        document.querySelectorAll(".keyboard div")[ev.key-1].classList.remove('active');
        if(svg.classList.contains('active')){
            let jelenlegi_objektum = {"note": document.querySelectorAll(".keyboard div")[ev.key-1].innerHTML.split("<span>")[0], "start": start, "end": time}
            console.log(jelenlegi_objektum);
            jason.push(jelenlegi_objektum);
        }
    }
});

let asd;
document.addEventListener('keydown', ev=>{
    if(ev.key == " "){
        svg.classList.toggle('active');
        if(svg.classList.contains('active')){
            asd = setInterval(()=>{time+=10;},10);
        }else{
            clearInterval(asd);
            time = 0;
            document.querySelector('textarea').value = JSON.stringify(jason);
            jason = [];
            draw();
        }
    }
});



document.getElementById('savebutton').addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","save.php");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.addEventListener('readystatechange', ()=>{
            console.log('változik');
            if(xhr.readyState == 4 && xhr.status == 200){
                //$('span').innerHTML = xhr.responseText;
            }
        });
    xhr.send(`id=${document.querySelector('.selected').dataset['id']}`);
});








