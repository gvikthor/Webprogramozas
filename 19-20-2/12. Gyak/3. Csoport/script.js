let form = document.querySelector('#form');
    let formNev = form.querySelector('#form_nev');
    let formKor = form.querySelector('#form_kor');
    let formNemFfi = form.querySelector('#form_nem_ffi');
    let formNemNo = form.querySelector('#form_nem_no');
    let formEgyeb = form.querySelector('#form_egyeb');
let hibakDiv = document.querySelector('#hibak');

form.addEventListener('submit', ()=>{
    event.preventDefault();

    let hiba = false;
    let hibaSzoveg = '';

    if(formNev.value.trim() == ''){
        hiba = true;
        hibaSzoveg += 'A név megadása kötelező! <br>';
        formNev.classList.add('hibas');
    }else{
        formNev.classList.remove('hibas');
    }

    if(formKor.value.trim() == ''){
        hiba = true;
        hibaSzoveg += 'Az életkor megadása kötelező! <br>';
        formKor.classList.add('hibas');
    }else if(isNaN(formKor.value)){
        hiba = true;
        hibaSzoveg += 'Az életkor csak szám lehet <br>';
        formKor.classList.add('hibas');
    }else if(parseInt(formKor.value) < 18 || parseInt(formKor.value) > 100){
        hiba = true;
        hibaSzoveg += 'Az életkor legyen 18 és 100 között! <br>';
        formKor.classList.add('hibas');
    }else{
        formKor.classList.remove('hibas');
    }

    let nem = '';
    if(!formNemFfi.checked && !formNemNo.checked){
        hiba = true;
        hibaSzoveg += 'A nem megadása kötelező! <br>';
    }else{
        nem = formNemFfi.checked ? 'ffi' : 'no';

        /*if(formNemFfi.checked){
            nem = 'ffi';
        }else{
            nem = 'no';
        }*/
    }

    if(hiba){
        hibakDiv.innerHTML = hibaSzoveg;
        hibakDiv.classList.remove('rejtve');
    }else{
        hibakDiv.classList.add('rejtve');

        let xhr = new XMLHttpRequest();
        xhr.open('GET',`ellenoriz.php?nev=${formNev.value}&kor=${formKor.value}&nem=${nem}&egyeb=${formEgyeb.value}`,false);
        xhr.send();

        if(xhr.responseText == "NINCSHIBA"){
            console.log('Siker!');
            form.reset();
        }else{
            hibaSzoveg = '';
            let hibak = xhr.responseText.split(',');
            for(let i = 0; i < hibak.length-1; i++){
                switch(hibak[i]){
                    case 'nevUres':
                        hibaSzoveg += 'A név megadása kötelező! <br>';
                        formNev.classList.add('hibas');
                        break;
                    case 'korUres':
                        hibaSzoveg += 'Az életkor megadása kötelező! <br>';
                        formKor.classList.add('hibas');
                        break;
                    case 'korNemSzam':
                        hibaSzoveg += 'Az életkor csak szám lehet <br>';
                        formKor.classList.add('hibas');
                        break;
                    case 'korIntervallum':
                        hibaSzoveg += 'Az életkor legyen 18 és 100 között! <br>';
                        formKor.classList.add('hibas');
                        break;
                    case 'nemUres':
                        hibaSzoveg += 'A nem megadása kötelező! <br>';
                        break;
                    case 'nemNem':
                        hibaSzoveg += 'A nem csak férfi vagy nő lehet! <br>';
                        break;
                    default:
                        hibaSzoveg += 'Ismeretlen hiba! <br>';
                        break;
                }
            }
            hibakDiv.innerHTML = hibaSzoveg;
            hibakDiv.classList.remove('rejtve');
        }
    }
});