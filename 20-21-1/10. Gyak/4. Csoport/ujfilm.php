<?php
function aloldal($oldalnev){
    require('aloldal_' . $oldalnev . '.php');
}
session_start();
$bejelentkezve = isset($_SESSION['username']);

if(!$bejelentkezve){
    header('Location: index.php');
    die;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új film hozzáadása</title>
</head>
<body>
    <?php aloldal('menu'); ?>
    <form action="keres_ujfilm.php">
        Film címe<br>
        <input name="cim">
        
        <br><br>

        Kiadás dátuma<br>
        <input name="kiadas">

        <br><br>

        <input type="submit" value="Hozzáad">
    </form>
</body>
</html>