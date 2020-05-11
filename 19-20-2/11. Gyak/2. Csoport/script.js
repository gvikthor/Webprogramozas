//AJAX
//Asyncron Javascript And XML

function fgv0(){
    document.querySelector('span').innerHTML = '11:16:00';
}

function fgv1(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php',false);
    xhr.send(null);
    document.querySelector('span').innerHTML = xhr.responseText;
}

function fgv2(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php?alma=starwars',false);
    xhr.send(null);
    document.querySelector('span').innerHTML = xhr.responseText;
}

function fgv3(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','ido.php',true);
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            document.querySelector('span').innerHTML = xhr.responseText;
        }
    });
    xhr.send(null);   
}

function fgv4(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','ido.php',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            document.querySelector('span').innerHTML = xhr.responseText;
        }
    });
    xhr.send('korte=startrek');   
}



document.querySelector('#button1').addEventListener('click',fgv1);
document.querySelector('#button2').addEventListener('click',fgv2);
document.querySelector('#button3').addEventListener('click',fgv3);
document.querySelector('#button4').addEventListener('click',fgv4);