let goblinElem = document.querySelector('#goblin');
let koboldElem = document.querySelector('#kobold');
let szinInput  = document.querySelector('#szin');

goblinElem.addEventListener('click', ()=>{
    goblinElem.style.color = szinInput.value;
});

koboldElem.addEventListener('click', ()=>{
    koboldElem.style.color = szinInput.value;
});