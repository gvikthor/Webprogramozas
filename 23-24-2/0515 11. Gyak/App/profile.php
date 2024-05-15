<?php
require_once 'functions.php';
session_start();
if (!isset($_SESSION['user'])) {
    redirect('index.php');
}

$imageurl = get_imageurl_by_username($_SESSION['user']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1><?=$_SESSION['user']?></h1>
    <?= date('Y-m-d H:i:s') ?> <br>
    <img id="profile_image" src="<?= $imageurl ?>">
</body>

</html>