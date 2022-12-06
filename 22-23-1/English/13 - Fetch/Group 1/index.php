<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Load data</button>
    <div></div>
</body>
</html>
<script>
    function fetchy(target, funct, json = true){
        if(json) fetch(target).then(r => r.json()).then(e => funct(e))
        else     fetch(target).then(r => r.text()).then(e => funct(e))
    }

    function writeMovies(movies){
        const list = document.querySelector('ul')
        for(const movie of movies){
            const newLI = document.createElement('li')
            newLI.innerText = `${movie.title} (${movie.release})`
            list.appendChild(newLI)
        }
    }

    function writeContent(content){
        document.querySelector('div').innerHTML = content
    }

    document.querySelector('button').addEventListener('click', e => {
        fetchy('subpage.php?title=Happy', writeContent, false)
        fetchy('movies.php', writeMovies)
    })
    
</script>