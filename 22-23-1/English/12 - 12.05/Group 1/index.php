<?php
session_start();
$_SESSION['language'] = 'english';

require_once 'functions.php';
require_once 'pages.php';

$logged_in = auth_is_logged_in();
$movies = [];
if($logged_in){
    $movies = get_movies_all();
}
function echo_like($user_id, $movie_id){
    return user_likes_movie($user_id, $movie_id) ? '<a href="query_dislike.php?movie_id='.$movie_id.'">👍🏿</a>' : '<a href="query_like.php?movie_id='.$movie_id.'">👍</a>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Awesome movie page!</h1>
    <?php if(!$logged_in): ?>
        <?php page_login('index.php') ?>
        <?php page_register('index.php', $_SESSION['kept_data'] ?? null) ?>
        <?php page_errors($_SESSION['errors'] ?? []) ?>
    <?php else: ?>
        <a href="query_logout.php">Logout</a> <br>
        <h2>Movies</h2>
        <ul>
            <?php foreach($movies as $movie): ?>
                <li>
                    <?=$movie->title?>
                    <?=echo_like($_SESSION['user_id'], $movie->id)?>
                </li>
            <?php endforeach ?>
        </ul>
    <?php endif ?>
</body>
</html>