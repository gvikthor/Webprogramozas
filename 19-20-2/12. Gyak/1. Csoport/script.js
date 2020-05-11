let form = document.querySelector('#form');
    let formNev = document.querySelector('#form_nev');
    let formKor = document.querySelector('#form_kor');
    let formNemF = document.querySelector('#form_nem_ffi');
    let formNemN = document.querySelector('#form_nem_no');
    let formEgyeb = document.querySelector('#form_egyeb');
let hibaDiv = document.querySelector('#hiba_div');

form.addEventListener('submit',()=>{
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
        hibaSzoveg += 'Az életkor csak szám lehet! <br>';
        formKor.classList.add('hibas');
    }else if(parseInt(formKor.value) < 18 || parseInt(formKor.value) > 100){
        hiba = true;
        hibaSzoveg += 'Az életkor legyen 18 és 100 között! <br>';
        formKor.classList.add('hibas');
    }else{
        formKor.classList.remove('hibas');
    }

    let nem = ''
    if(!formNemF.checked && !formNemN.checked){
        hiba = true;
        hibaSzoveg += 'A nem megadása kötelező! <br>';
    }else{
        nem = formNemF.checked ? 'f' : 'n';

        /*if(formNemF.checked){
            nem = 'f';
        }else{
            nem = 'n';
        }*/
    }


    if(hiba){
        hibaDiv.innerHTML = hibaSzoveg;
        hibaDiv.classList.remove('rejtve');
    }else{
        hibaDiv.innerHTML = '';
        hibaDiv.classList.add('rejtve');

        let xhr = new XMLHttpRequest();
        xhr.open('GET',`ellenoriz.php?nev=${formNev.value}&kor=${formKor.value}&nem=${nem}&egyeb=${formEgyeb.value}`,false);
        xhr.send();

        if(xhr.responseText == 'NINCSHIBA'){
            console.log('Sikerült!');
            form.reset();
        }else{
            let hibak = xhr.responseText.split(',')/*.pop()*/;
            for(hiba of hibak){
                switch(hiba){
                    case 'nevUres':
                        hibaSzoveg += 'A név megadása kötelező! <br>';
                        formNev.classList.add('hibas');
                        break;
                    case 'korUres':
                        hibaSzoveg += 'Az életkor megadása kötelező! <br>';
                        formKor.classList.add('hibas');
                        break;
                    case 'korNemSzam':
                        hibaSzoveg += 'Az életkor csak szám lehet! <br>';
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
                        hibaSzoveg += 'Ismeretlen hiba. <br>';
                        break;
                }                
            }
            hibaDiv.innerHTML = hibaSzoveg;
            hibaDiv.classList.remove('rejtve');
        }
        
    }
});