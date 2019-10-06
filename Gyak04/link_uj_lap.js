function $(id){ 
    return document.getElementById(id);
}

// ez a feladat gyakorlatilag csak annyi, hogy ezt az oldalt meg kell érteni: https://www.w3schools.com/jsref/met_win_open.asp
// window.open(url, name, specs); ahol a name a megnyitás módja, a specs pedig a megnyitási paraméterek listája

$('mehet').addEventListener('click',() => {
    window.open($('in1').value, $('in2').value, $('in3').value); //pl.: [ http://bit.ly/web-thor ][ _blank ][ resizable=yes,top=500,left=500,width=400,height=400 ][Mehet]
});

let ujablakok = document.querySelectorAll('.ujablak');
for(let i = 0; i < ujablakok.length; i++){
    ujablakok[i].addEventListener('click', () => {
        event.preventDefault();
        // az ablak közepén nyitjuk meg
        let fentrol = (window.screen.height/2)-200;
        let balrol =  (window.screen.width /2)-200;
        window.open(ujablakok[i].href, '_blank', 'resizable=yes,top='+fentrol+',left='+balrol+',width=400,height=400');
    });
}

$('ujablakba_gomb').addEventListener('click',() => {
    let ablak = window.open('', 'Új ablak', 'width=500,height=500');
    ablak.document.write(`
        <h1>Hello There!</h1>
        <div id="ujablak1">/div>
    `);
    ablak.document.getElementById('ujablak1').innerHTML = $('ujablakba_szoveg').value;
});
