let vaszon = document.querySelector('canvas');
let input = document.querySelector('input');
let gomb = document.querySelector('button');
let hiba = document.querySelector('div');

let ceruza = vaszon.getContext('2d');
let leonardo = {
    x: 250,
    y: 250
};

gomb.addEventListener('click',()=>{
    let parancs = input.value.split(' ');
    let egyseg = parseInt(parancs[1]);
    if(egyseg > 0){
        switch(parancs[0]){
            case 'ELŐRE':
                hiba.innerHTML = '';
                ceruza.beginPath();
                ceruza.moveTo(leonardo.x,leonardo.y);
                leonardo.y -= egyseg;
                ceruza.lineTo(leonardo.x,leonardo.y);
                ceruza.closePath();
                ceruza.stroke();
                break;
            case 'HÁTRA':
                hiba.innerHTML = '';
                ceruza.beginPath();
                ceruza.moveTo(leonardo.x,leonardo.y);
                leonardo.y += egyseg;
                ceruza.lineTo(leonardo.x,leonardo.y);
                ceruza.closePath();
                ceruza.stroke();
                break;
            case 'BALRA':
                hiba.innerHTML = '';
                ceruza.beginPath();
                ceruza.moveTo(leonardo.x,leonardo.y);
                leonardo.x -= egyseg;
                ceruza.lineTo(leonardo.x,leonardo.y);
                ceruza.closePath();
                ceruza.stroke();
                break;
            case 'JOBBRA':
                hiba.innerHTML = '';
                ceruza.beginPath();
                ceruza.moveTo(leonardo.x,leonardo.y);
                leonardo.x += egyseg;
                ceruza.lineTo(leonardo.x,leonardo.y);
                ceruza.closePath();
                ceruza.stroke();
                break;
            default:
                hiba.innerHTML = 'Hiba, nem érvényes parancs!';
        }
    }else{
        hiba.innerHTML = 'Hiba, nem érvényes szám!';
    }
});