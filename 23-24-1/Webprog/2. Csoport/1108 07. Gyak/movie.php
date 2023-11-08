<?php
require_once 'movie_database.php';
$id = $_GET['id'] ?? -1;
if(!is_numeric($id) || intval($id) < 0 || intval($id) > 3){
    die;
}
$movie = get_movie_by_id($id);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies | <?=$movie->title?></title>
</head>
<body>
    <h1>Movies</h1>
    <h2><?=$movie->title?> (<?=$movie->year?>)</h2>
    <img src="<?=$movie->image?>">
    <ul>
        <?php foreach($movie->cast as $name): ?>
            <li><?=$name?></li>
        <?php endforeach ?>
    </ul>
</body>
</html>