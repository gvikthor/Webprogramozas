<?php
require_once 'functions.php';
require_once 'data.php';
session_start();
if(!isset($_SESSION['uname'])){
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
    <h1>Szia <?=$_SESSION['uname']?></h1>
    <a href="logout.php">Logout</a>
    <hr>
    <button id="bg-blue">Blue</button>
    <button id="bg-red">Red</button>
</body>
</html>
<script>
    const PHP_UNAME = '<?=$_SESSION['uname']?>'
</script>
<script src="color.js"></script>