function $(param){
    return document.querySelector(param);
}


function frissit1(){
    $('button').addEventListener('click',()=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'nemindex.php', false); //Hogyan? Mint? Aszinkron? 
        xhr.send(null);
        $('span').innerHTML = xhr.responseText;
    });
}
//frissit1(); //hátránya: szinkronos lefutás, tehát addig használhatatlan az oldal

function frissit2(){
    $('button').addEventListener('click',()=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'nemindex.php', true);
        xhr.addEventListener('readystatechange', ()=>{
            console.log('változik'); //3-szor kapjuk meg kérésenként
            if(xhr.readyState == 4 && xhr.status == 200){
                $('span').innerHTML = xhr.responseText;
            }
        });
        xhr.send(null);
    });
}
//frissit2(); //még nem ad át paramétert

function frissit3(){
    $('button').addEventListener('click',()=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'nemindex.php?param=alma', true);
        xhr.addEventListener('readystatechange', ()=>{
            console.log('változik');
            if(xhr.readyState == 4 && xhr.status == 200){
                $('span').innerHTML = xhr.responseText;
            }
        });
        xhr.send(null);
    });
}
//frissit3(); //még nem post

function frissit4(){
    $('button').addEventListener('click',()=>{
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'nemindex.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //jelezzük, hogy a szöveges adatok URL kódolással kerülnek elküldésre
        xhr.addEventListener('readystatechange', ()=>{
            console.log('változik');
            if(xhr.readyState == 4 && xhr.status == 200){
                $('span').innerHTML = xhr.responseText;
            }
        });
        xhr.send('param=körte');
    });
}
frissit4();