<?php

session_start();

function reszoldal($oldalnev){
    require('reszoldal_' . $oldalnev . '.php');
}
reszoldal('menu');
reszoldal('autentikacio');
reszoldal('filmlista');

$bejelentkezve = isset($_SESSION['fnev']);
$volthiba = isset($_GET['hiba']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logines oldal</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        <?php menu(); ?>
    <?php else: ?>
        <?php autentikacio($volthiba); ?>
    <?php endif ?>
    <?php filmlista($bejelentkezve); ?>
</body>
</html>