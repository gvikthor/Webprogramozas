<?php
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
<body>
    <?php if($bejelentkezve): ?>
        Szia <?=$_SESSION["nev"]?>, be vagy jelentkezve!
        <form action="logout.php">
            <input type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        Nem vagy bejelentkezve.
        <form action="login.php" method="POST">
            Felhasználónév: <input name="fnev"> <br>
            Jelszó: <input name="pw" type="password"> <br>
            <input type="submit" value="Bejelentkez">
        </form>

        <br>

        Regisztrálj:<br>
        <form action="regisztral.php" method="POST">
            Felhasználónév: <input name="fnev"> <br>
            Jelszó: <input name="pw1" type="password"> <br>
            Jelszó újra: <input name="pw2" type="password"> <br>
            <input type="submit" value="Regisztrál">
        </form>
    <?php endif ?>
</body>
</html>