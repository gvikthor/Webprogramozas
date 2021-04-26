<?php

session_start();
$bejelentkezve = isset($_SESSION["nev"]);

$hiba = "";
if(isset($_GET["hiba"])){
    switch($_GET["hiba"]){
        case "hianyos":
            $hiba = "A felhasználónév és a jelszó nem lett megadva!";
            break;
        case "ures":
            $hiba = "A felhasználónév és a jelszó nem lehet üres!";
            break;
        case "foglalt":
            $hiba = "A felhasználónév foglalt!";
            break;
        case "nemegyezik":
            $hiba = "A jelszavak nem egyeznek!";
            break;
        default:
            $hiba = "Ismeretlen hiba!";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Szia <?=$_SESSION["nev"]?>!
        <form action="kijelentkez.php" method="POST">
            <input type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        Jelentkezz be!
        <form action="bejelentkez.php" method="POST">
            Felhasználónév: <input name="fnev"> <br>
            Jelszó: <input name="pw" type="password"> <br>
            <input type="submit" value="Bejelentkez">
        </form>

        <br><br>

        Regisztrálj!
        <form action="regisztral.php" method="POST">
            Felhasználónév: <input name="fnev"> <br>
            Jelszó: <input name="pw1" type="password"> <br>
            Jelszó újra: <input name="pw2" type="password"> <br>
            <input type="submit" value="Regisztrál">
        </form>
        <?=$hiba?>
    <?php endif ?>
</body>
</html>