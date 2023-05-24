<?php
require_once 'functions.php';
require_once 'storage.php';

session_start();
if(!isset($_SESSION['user']) || ($_GET['id'] ?? '') == ''){
    redirect('index.php');
}

$movies_db = new JsonStorage('movies.json');
$movie = $movies_db->findById($_GET['id']) ?? null;

if(!$movie) redirect('index.php');

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
    <form action="request_edit.php">
        <input type="hidden" name="id" value="<?=$movie['id']?>">
        <input name="title" value="<?=$movie['title']?>"> <br>
        <input name="release" value="<?=$movie['release']?>"> <br>
        <input type="submit">
    </form>
</body>
</html>