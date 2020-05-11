//AJAX
//Asyncron Javascript And XML

function fuggveny0(){
    document.querySelector('span').innerHTML = '15:11:20';
}

function fuggveny1(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php',false);
    xhr.send(null);
    document.querySelector('span').innerHTML = xhr.responseText;
}

function fuggveny2(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php?alma=starwars',false);
    xhr.send(null);
    document.querySelector('span').innerHTML = xhr.responseText;
}

function fuggveny3(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php',true);
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState == 4){
            document.querySelector('span').innerHTML = xhr.responseText;
        }
    });
    xhr.send(null);    
}

function fuggveny4(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','ido.php', true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            document.querySelector('span').innerHTML = xhr.responseText;
        }
    });
    xhr.send('cica=startrek');
}

document.querySelector('#button1').addEventListener('click', fuggveny1);
document.querySelector('#button2').addEventListener('click', fuggveny2);
document.querySelector('#button3').addEventListener('click', fuggveny3);
document.querySelector('#button4').addEventListener('click', fuggveny4);

function idoFrissit(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php',false);
    xhr.send(null);
    document.querySelector('div').innerHTML = `Az aktuális idő: ${xhr.responseText}`;
}
setInterval(idoFrissit,1003);