<?php
require_once 'functions.php';
session_start();

$gameid = trim($_GET['id']) ?? '-1';
$game = get_game_by_id($gameid)[0] ?? null;

if(is_null($game)){
    redirect('index.php');
}

$is_admin = isset($_SESSION['user']) && is_admin($_SESSION['user']);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?=$game['title']?> (<?=$game['year']?>)</h1>
    <div><?=$game['description']?></div>
    <img src="<?=$game['imageurl']?>">

    <?php if($is_admin): ?>
        <form action="update.php" method="POST">
            <input name="id" type="hidden" value="<?=$game['id']?>">
            <input name="title" value="<?=$game['title']?>"> <br>
            <input name="year" value="<?=$game['year']?>"> <br>
            <input name="imageurl" value="<?=$game['imageurl']?>"> <br>
            <textarea name="description"><?=$game['description']?></textarea> <br>
            <input type="submit" value="Save">
        </form>
    <?php endif ?>
</body>
</html>