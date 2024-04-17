<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="check.php" method="GET">
        <div>
            <h2><label for="title">Title</label></h2>
            <input name="title" id="title">
        </div>
        <div>
            <h2><label for="year">Release year</label></h2>
            <input name="year" id="year">
        </div>
        <div>
            <h2>Genre</h2>
            <input type="radio" name="genre" value="scifi" id="genre_scifi"> <label for="genre_scifi">Sci-fi</label> <br>
            <input type="radio" name="genre" value="fantasy" id="genre_fantasy"> <label for="genre_fantasy">Fantasy</label> <br>
            <input type="radio" name="genre" value="crime" id="genre_crime"> <label for="genre_crime">Crime</label> <br>
            <input type="radio" name="genre" value="comedy" id="genre_comedy"> <label for="genre_comedy">Comedy</label> <br>
        </div>
        <div>
            <h2>Opinion</h2>
            <input type="checkbox" name="opinions[]" value="funny" id="opinion_funny"> <label for="opinion_funny">Funny</label> <br>
            <input type="checkbox" name="opinions[]" value="sad" id="opinion_sad"> <label for="opinion_sad">Sad</label> <br>
            <input type="checkbox" name="opinions[]" value="wholesome" id="opinion_wholesome"> <label for="opinion_wholesome">Wholesome</label> <br>
            <input type="checkbox" name="opinions[]" value="scary" id="opinion_scary"> <label for="opinion_scary">Scary</label> <br>
        </div>
        <div>
            <h2><label for="desc">Description</label></h2>
            <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
            <input type="submit" value="Send">
        </div>
    </form>
</body>

</html>