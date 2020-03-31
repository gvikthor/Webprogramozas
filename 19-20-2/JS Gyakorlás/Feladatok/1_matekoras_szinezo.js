let inputN = document.querySelector('#input-n');
let inputM = document.querySelector('#input-m');
let inputBtn = document.querySelector('#general-kenobi');
let szinMenu = document.querySelector('#szinek');
let szinezo = document.querySelector('#tablazat');

let szinek = ['red','blue','green'];
for(let i = 0; i < szinek.length; i++){
    let ujSzin = document.createElement('td');         // itt hozom létre a szín celláját
    ujSzin.style.backgroundColor = szinek[i];          //
    szinMenu.appendChild(ujSzin);                      //

    ujSzin.addEventListener('click', ()=>{
        aktSzin = i;

        let elozo = szinMenu.querySelector('.selected'); // ez a rész felel azért, hogy egy x 
        elozo.innerHTML = '';                            // legyen az aktuális szín cellájában,
        elozo.classList.remove('selected');              // és ha átkattintok, az előző tűnjön el
        ujSzin.innerHTML = 'X';                         //
        ujSzin.classList.add('selected');               //

        console.log(aktSzin)
    });
    
}
szinMenu.querySelector('td').classList.add('selected'); // ez álítja be, hogy az első
szinMenu.querySelector('td').innerHTML = 'X';           // ki legyen választva eleve
let aktSzin = 0;                                        //

inputBtn.addEventListener('click',()=>{
    let n = parseInt(inputN.value);
    let m = parseInt(inputM.value);
    if(n > 0 && m > 0){
        szinezo.innerHTML = '';
        for(let i = 0; i < n; i++){
            let ujSor = document.createElement('tr'); 
            for(let j = 0; j < m; j++){
                let ujCella = document.createElement('td');
                ujCella.addEventListener('click',()=>{
                    ujCella.style.backgroundColor = szinek[aktSzin];
                });
                ujSor.appendChild(ujCella);
            }
            szinezo.appendChild(ujSor);
        }
    }
});