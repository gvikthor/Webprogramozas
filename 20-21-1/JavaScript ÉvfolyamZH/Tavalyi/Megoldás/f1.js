let dloadQuery = document.querySelector('#downloads').querySelectorAll('tr');
let speedQuery = document.querySelector('#speed');
let startQuery  = document.querySelector('#start');

startQuery.addEventListener('click', ()=>{
    let speed = parseInt(speedQuery.value);
    if(speed > 0){
        for(let i = 1; i < dloadQuery.length; i++){
            let cells = dloadQuery[i].querySelectorAll('td');           //ezek a sorban a cellák, tehát adott torrent neve, mérete, előrehaladása
            let size = parseInt(cells[1].innerHTML.split('N')[0]);      //200NkB az N betűnél splitelve 200 és kB, amiből nekem a 200 kell
            let progP = parseFloat(cells[2].innerHTML.split('%')[0]);   //30% a %-nál splitelve 30 és {}, amiből nekem az első kell
            
            let progN = (size*(progP/100)) + speed;
            if(progN > size) progN = size;
            progP = (progN/size)*100;

            cells[2].innerHTML = `${progP}%`;                           //rá lehetne ereszteni a kiírásra egy tizedesjegy levágást, hogy szebb legyen, pl csak két tizedest írjunk ki: `${progP.toFixed(2)}%`
        }
    }
});
