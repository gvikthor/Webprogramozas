function $(param){
    return document.querySelector(param);
}

console.log('alma')
$('button').addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST','index.php',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            $('span').innerHTML = xhr.responseText;
        }
    });
    xhr.send("gyumolcs=korte&zoldseg=salata");
});

$('#alma').addEventListener('click',()=>{
    console.log('alma');
})