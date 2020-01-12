let inputs = document.querySelectorAll('.thor-input')

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input',()=>{
        let span = document.querySelector('#thor-span-'+inputs[i].dataset['id'])
        span.innerHTML = inputs[i].value;
        span.style = `background-color: hsl(${100-inputs[i].value},${inputs[i].value}%,50%);`
    });
}