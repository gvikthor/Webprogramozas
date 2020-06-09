let b1 = document.querySelector('#b1');
let b0 = document.querySelector('#b0');
let br = document.querySelector('#br');
let output = document.querySelector('output');

b1.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','f4.php?val=1',false);
    xhr.send(null);
    output.innerHTML = xhr.responseText;
});

b0.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','f4.php?val=0',false);
    xhr.send(null);
    output.innerHTML = xhr.responseText;
});

br.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','f4.php?val=r',false);
    xhr.send(null);
    output.innerHTML = xhr.responseText;
});