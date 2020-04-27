let leiras = document.querySelector('#leiras');
let nyitva = false;
leiras.addEventListener('click', ()=>{
    if(!nyitva){
        let eredeti = leiras.innerHTML.trim();
        leiras.innerHTML = `
            <form action="leirasFrissit.php" method="POST">
            <textarea name="leiras">${eredeti}</textarea>
            <input type=submit>
            </form>
        `;
        nyitva = true;
    }
});