document.getElementById('bejelentkez').addEventListener('click',()=>{
    document.getElementById('bejelentkez_form').classList.remove('rejtve');
    document.getElementById('regisztral_form').classList.add('rejtve');

});
document.getElementById('regisztral').addEventListener('click',()=>{
    document.getElementById('regisztral_form').classList.remove('rejtve');
    document.getElementById('bejelentkez_form').classList.add('rejtve');
});
document.getElementById('jelszo_tipp_gomb').addEventListener('click',()=>{
    document.getElementById('jelszo_tipp').innerHTML = "A jelszó legyen legalább 8 karakter hosszú, tartalmazzon kis és nagy betűket (de csakis az angol abc-ből) és legalább egy számot"
});