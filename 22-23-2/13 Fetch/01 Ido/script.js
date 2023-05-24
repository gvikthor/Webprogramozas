//https://caniuse.com/fetch
function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

function updateTime(){
    fetchke(
        'time.php',
        response => {
            document.querySelector('#time').innerText = response
        },
        false
    )
}

setInterval(updateTime, 1000)