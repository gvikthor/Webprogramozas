<?php
require_once('header.php');
aloldalak(['autentikacio', 'menu', 'lista']);

$hiba = '';
if(isset($_GET['hiba'])){
    $hiba =$_GET['hiba'];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loginke</title>
</head>
<body>
    
    <?php if($bejelentkezve): ?>
        <?php menu() ?>
    <?php else: ?>
        <?php autentikacio($hiba) ?>
    <?php endif ?>

    <?php lista($bejelentkezve) ?>
</body>
</html>