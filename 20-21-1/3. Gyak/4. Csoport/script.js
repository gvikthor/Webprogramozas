let nyomjMegGomb = document.querySelector('#gomb');

function gombMegnyomaskorTortenik(esemeny){
    console.log(esemeny);
}
function masodikFuggveny(esemeny){
    console.log('almafa');
}

nyomjMegGomb.addEventListener('click', gombMegnyomaskorTortenik);

nyomjMegGomb.addEventListener('click', masodikFuggveny);
nyomjMegGomb.removeEventListener('click', masodikFuggveny);

nyomjMegGomb.addEventListener('click', function (esemeny){
    console.log('Halhatatlan Goblin');
});
nyomjMegGomb.addEventListener('click', (esemeny)=>{
    console.log('Halhatatlan Goblin 2');
});

// kihezFuzunk.addEventListener('milyenesemeny', mitcsinal);