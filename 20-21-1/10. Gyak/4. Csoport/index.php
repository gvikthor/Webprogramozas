<?php
    require_once('adatkezeles.php');
    function aloldal($oldalnev){
        require('aloldal_' . $oldalnev . '.php');
    }


    session_start();
    $bejelentkezve = isset($_SESSION['username']);
    $filmek = filmek();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ez egy oldal</title>
    <style>
    table input{
        background: none;
        border: none;
        cursor: pointer;
    }
    table form{
        display: inline-block;
    }
    </style>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Szia <?=$_SESSION['username']?> <br>
        <?php aloldal('menu'); ?>
    <?php else: ?>
        <?php aloldal('bejelentkezes'); ?>
    <?php endif ?>

    <?php aloldal('filmlista'); ?>
    <?php filmekListaz($filmek, $bejelentkezve); ?>
</body>
</html>