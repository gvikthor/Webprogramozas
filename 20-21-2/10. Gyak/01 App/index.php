<?php
require_once "aloldal_filmlista.php";

session_start();
$bejelentkezve = isset($_SESSION["nev"]);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Állatkerti profil</title>
</head>
<style>
    table, tr, td, th{
        border: 1px solid black;
        border-collapse: collapse;
    }
    .film a{
        text-decoration: none;
        color: black;
    }
</style>
<body>
    <?php if($bejelentkezve): ?>
        Szia <?=$_SESSION["nev"]?>, be vagy jelentkezve!
        <form action="logout.php">
            <input type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        <a href="autentikacio.php"><button>Bejelentkezés/Regisztráció</button></a>
    <?php endif ?>

    <?php aloldal_filmlista($bejelentkezve); ?>
</body>
</html>