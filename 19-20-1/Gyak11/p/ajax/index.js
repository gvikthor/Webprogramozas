document.querySelector('button').addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST','index.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('jelszo=Almafa123');
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            document.querySelector('span').innerHTML = xhr.responseText;
        }
    });
});