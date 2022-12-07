<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Movies</h1>
    <button>List</button>
    <ul></ul>
</body>
</html>

<script>
    /*fetch('api_movies.php')
    .then(response => response.text())
    .then(result => console.log(result))*/

    function fetchke(celnev, fuggveny, json = true){
        if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
        else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
    }

    document.querySelector('button').addEventListener('click', ()=> {    
        fetchke('api_movies.php', result => {
            const ul = document.querySelector('ul')
            for(const movie of result){
                ul.innerHTML += `<li>${movie.title}</li>`
            }
        })
    })
</script>