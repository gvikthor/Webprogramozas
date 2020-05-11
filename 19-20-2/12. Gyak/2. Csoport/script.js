let form = document.querySelector('#form');
    let formNev = document.querySelector('#form_nev');
    let formEletkor = document.querySelector('#form_eletkor');
    let formNemFfi = document.querySelector('#form_nem_ffi');
    let formNemNo = document.querySelector('#form_nem_no');
    let formEgyeb = document.querySelector('#form_egyeb');
    let formGomb = document.querySelector('#form_gomb');
let hibaDiv = document.querySelector('#hibadiv');

form.addEventListener('submit', ()=>{
    event.preventDefault();

    let hiba = false;
    let hibaSzoveg = '';
    if(formNev.value.trim() == ''){
        formNev.classList.add('hibas');
        hiba = true;
        hibaSzoveg += 'A név megadása kötelező!<br>';
    }else{
        formNev.classList.remove('hibas');
    }

    if(formEletkor.value.trim() == ''){
        formEletkor.classList.add('hibas');
        hiba = true;
        hibaSzoveg += 'Az életkor megadása kötelező!<br>';
    }else if(isNaN(formEletkor.value)){
        formEletkor.classList.add('hibas');
        hiba = true;
        hibaSzoveg += 'Az életkor csak szám lehet!<br>';
    }else if(parseInt(formEletkor.value) < 18 || parseInt(formEletkor.value) > 100){
        formEletkor.classList.add('hibas');
        hiba = true;
        hibaSzoveg += 'Az életkor minimum 18, de maximum 100 legyen.<br>';
    }else{
        formEletkor.classList.remove('hibas');
    }

    let nem = '';
    if(!formNemFfi.checked && !formNemNo.checked){
        hiba = true;
        hibaSzoveg += 'A nem megadása kötelező!<br>';
    }else{
        nem = formNemFfi.checked ? 'ffi' : 'no'; //if(){nem ='ffi'}else{nem='no'}
    }

    if(hiba){
        hibaDiv.classList.remove('rejtve');
        hibaDiv.innerHTML = hibaSzoveg;
    }else{
        hibaDiv.classList.add('rejtve');

        let xhr = new XMLHttpRequest();
        xhr.open('GET',`ellenoriz.php?nev=${formNev.value}&kor=${formEletkor.value}&nem=${nem}&egyeb=${formEgyeb.value}`,false);
        xhr.send();
        if(xhr.responseText == 'NINCSHIBA'){
            console.log('Siker');
        }else{
            let hibak = xhr.responseText.split(',');
            hibaSzoveg = '';
            for(let i = 0; i < hibak.length-1; i++){
                switch(hibak[i]){
                    case 'nevUres':
                        formNev.classList.add('hibas');
                        hibaSzoveg += 'A név megadása kötelező!<br>';
                        break;
                    case 'korUres':
                        formEletkor.classList.add('hibas');
                        hibaSzoveg += 'Az életkor megadása kötelező!<br>';
                        break;
                    case 'korNemSzam':
                        formEletkor.classList.add('hibas');
                        hibaSzoveg += 'Az életkor csak szám lehet!<br>';
                        break;
                    case 'korIntervallum':
                        formEletkor.classList.add('hibas');
                        hibaSzoveg += 'Az életkor minimum 18, de maximum 100 legyen.<br>';
                        break;
                    case 'nemUres':
                        hibaSzoveg += 'A nem megadása kötelező!<br>';
                        break;
                    case 'nemErtek':
                        hibaSzoveg += 'A nem csak férfi vagy nő lehet<br>';
                        break;
                    default:
                        hibaSzoveg += 'Ismeretlen hiba<br>';
                        break;
                }
            }
            hibaDiv.classList.remove('rejtve');
            hibaDiv.innerHTML = hibaSzoveg;
        }
    }
});