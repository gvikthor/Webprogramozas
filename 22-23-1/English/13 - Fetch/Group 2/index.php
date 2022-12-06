<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Stuff</h1>
    <div>fslkdgslkfdjghklsfdjhglskfdjhlksdfjjh</div>
    <input>
    <button>List movies</button>
    <div id="movies">
    </div>
</body>
</html>
<script>
    function fetchy(target, funct, json = true){
        if(json) fetch(target).then(r => r.json()).then(e => funct(e))
        else     fetch(target).then(r => r.text()).then(e => funct(e))
    }

    function insertMovies(text){
        document.querySelector('#movies').innerHTML = text
    }

    function insertMoviesJson(json){
        console.log(json)
    }

    /*document
        .querySelector('button')
        .addEventListener('click', ()=>{
            fetchy('movies.php', insertMovies, false)
        })*/
    
    document
        .querySelector('button')
        .addEventListener('click', ()=>{
            fetchy('movies_json.php', insertMoviesJson)
        })
</script>