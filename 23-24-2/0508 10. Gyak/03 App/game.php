<?php
require_once 'functions.php';
$gameid = trim($_GET['id']) ?? '-1';
$game = get_game_by_id($gameid)[0] ?? null;

if(is_null($game)){
    redirect('index.php');
}
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
</body>
</html>