<?php
session_start();
require_once 'storage.php';
require_once 'fuggvenyek.php';
$felhasznalok = uj_storage('felhasznalok');

/*
$felhasznalok->add([
    'nev' => 'Peti',
    'jelszo' => password_hash('alma', PASSWORD_DEFAULT)
]);
*/

//$bejelentkezve = isset($_SESSION['nev']);
$fnev = $_SESSION['nev'] ?? null;
$hiba = munkamenet_valtozo('hiba', '');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php if ($fnev): ?>
        <h1>Szia <?=$fnev?>!</h1>

        A kijelentkezés lehet ugyanúgy űrlap, de amúgy lehet csak egy link is.
        <a href="aut_kijelentkez.php">Kijelentkez</a>
    <?php else: ?>
        <h1>Jelentkezz be!</h1>
        <form action="aut_bejelentkez.php" method="POST">
            <label for="fnev">Felhasználónév:</label> <br>
            <input id="fnev" name="fnev" placeholder="Felhasználónév"> <br>
            
            <label for="jszo">Jelszó:</label> <br>
            <input id="jszo" name="jszo" placeholder="Jelszó" type="password"> <br>

            <input type="submit" value="Bejelentkez">
        </form>
        <?php if(strlen($hiba) > 0): ?>
            <div>
                <?=$hiba?>
            </div>
        <?php endif ?>
    <?php endif ?>
</body>

</html>