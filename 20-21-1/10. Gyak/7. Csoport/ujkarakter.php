<?php
require_once('header.php');
aloldalak(['autentikacio', 'menu']);

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
    <title>Loginke</title>
</head>
<body>
    <?php menu() ?>

    <form action="keres_hozzaad.php">
        Karakter neve: <br>
        <input name="nev">

        <br><br>

        Előfordulasok: <br>
        <input type="checkbox" name="elofordulas[]" value="1"> 1<br>
        <input type="checkbox" name="elofordulas[]" value="2"> 2<br>
        <input type="checkbox" name="elofordulas[]" value="3"> 3<br>
        <input type="checkbox" name="elofordulas[]" value="RO"> RO<br>
        <input type="checkbox" name="elofordulas[]" value="Solo"> Solo<br>
        <input type="checkbox" name="elofordulas[]" value="4"> 4<br>
        <input type="checkbox" name="elofordulas[]" value="5"> 5<br>
        <input type="checkbox" name="elofordulas[]" value="6"> 6<br>
        <input type="checkbox" name="elofordulas[]" value="7">7 <br>
        <input type="checkbox" name="elofordulas[]" value="8"> 8<br>
        <input type="checkbox" name="elofordulas[]" value="9"> 9<br>
        <input type="checkbox" name="elofordulas[]" value="M"> M<br>
        <input type="checkbox" name="elofordulas[]" value="R"> R<br>
        <input type="checkbox" name="elofordulas[]" value="C"> C
        
        <br><br>

        <input type="submit" value="Hozzáad">
    </form>
</body>
</html>