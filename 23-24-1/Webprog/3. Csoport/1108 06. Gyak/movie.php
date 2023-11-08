<?php
require_once 'movie_database.php';
$id = $_GET['id'] ?? -1;
$movie = get_movie($id);
$movies = get_all_movies();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iMdb | <?=$movie->title?></title>
</head>
<body>
    <ul>
    <?php foreach($movies as $loopmovie): ?>
        <li>
            <a href="movie.php?id=<?=$loopmovie->id?>">
                <?=$loopmovie->title?>
            </a>
        </li>
    <?php endforeach ?>
    </ul>

    <?php if($movie): ?>
        <h1><?=$movie->title?> (<?=$movie->year?>)</h1>
        <div>Lorem ipsum.... <span><?=$movie->genre?></span></div>
        <img src="<?=$movie->image?>">
    <?php else: ?>
        <h1>Invalid query parameter! Movie does not exist!</h1>
    <?php endif ?>
</body>
</html>