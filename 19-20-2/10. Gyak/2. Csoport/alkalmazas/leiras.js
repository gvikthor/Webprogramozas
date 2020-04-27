let leiras = document.querySelector("#description");
let open = false;
leiras.addEventListener('click', ()=>{
    if(!open){
        open = true;
        let text = leiras.innerHTML;
        leiras.innerHTML = `
            <form action="leirasMentes.php" method="POST">
                <textarea name="leiras">${text.trim()}</textarea>
                <input type="submit">
            </form>
        `;
    }
});