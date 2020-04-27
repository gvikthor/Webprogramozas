let leiras = document.querySelector('#leiras');
let nyitva = false;
leiras.addEventListener('click', ()=>{
    if(!nyitva){
        let regiLeiras = leiras.innerHTML.trim();
        leiras.innerHTML = `
            <form action="modosit.php" method="POST">
                <textarea name="leiras">${regiLeiras}</textarea>
                <input type=submit>
            </form>
        `;
        nyitva = true;
    }
});