<?php
include_once 'functions.php';
session_start();
if(!user_is_logged_in()) redirect('index.php');
if(!user_is_admin($_SESSION['user_id'])) redirect('index.php');
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
    <form action="query/add_movie.php">
        Title: <input name="title"> <br>
        ID: <input name="id"> <br>
        Desc: <textarea name="desc"></textarea> <br>
        Img: <input name="img"> <br>
        <input type="submit" value="➕">
    </form>
</body>
</html>