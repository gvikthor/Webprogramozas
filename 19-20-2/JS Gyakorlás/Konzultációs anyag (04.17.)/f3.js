let input = document.querySelector('input');

/*input.addEventListener('keydown',()=>{
    if(event.key == 'Delete' || event.key == 'Backspace'){
        event.preventDefault();
    }
});*/

input.addEventListener('keydown',()=>{
    if(isNaN(parseInt(event.key)) && event.key != '.'){
        event.preventDefault();
    }
});

input.addEventListener('keyup',()=>{
    let reszek = input.value.split('.');
    if(reszek.length == 4){
        let sz0 = parseInt(reszek[0]);
        let sz1 = parseInt(reszek[1]);
        let sz2 = parseInt(reszek[2]);
        let sz3 = parseInt(reszek[3]);

        if(0 <= sz0 && sz0 < 256 &&
           0 <= sz1 && sz1 < 256 &&
           0 <= sz2 && sz2 < 256 &&
           0 <= sz3 && sz3 < 256){
            input.classList.add('helyes');
            input.classList.remove('helytelen');
        }else{
            input.classList.add('helytelen');
            input.classList.remove('helyes');
        }
    }else{
        input.classList.add('helytelen');
        input.classList.remove('helyes');
    }
});