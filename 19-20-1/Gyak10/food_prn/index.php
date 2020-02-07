<?php session_start(); ?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $bejelentkezeve = isset($_SESSION["uname"]);
        $szabalyos = true;
    ?>


    <?php if($bejelentkezeve): ?>
        <?php require("adatkezeles.php"); ?>
        <?php require("loggedin.php"); ?>

        <br><br>

        <form action="logout.php" method="post">
            <input name="logout" type="submit" value="Kijelentkeuz">
        </form>

    <?php else: ?>

        Bejelentkezés<br>
        <form action="login.php" method="post">
            Felhasználónév: <input name="uname"> <br>
            Jelszó: <input type="password" name="pw"> <br>
            <input name="login" type="submit" value="Bejelentkez">
        </form>
        <?php if(isset($_GET["hiba"]) && $_GET["hiba"] == "login_rossz"): ?>
            Rossz bejelentkezési adatok.
        <?php endif ?>

        <br><br>

        Regisztráció<br>
        <form action="register.php" method="post">
            Felhasználónév: <input name="uname"> <br>
            Jelszó: <input type="password" name="pw1"> <br>
            Jelszó megint: <input type="password" name="pw2"> <br>
            Bankkártya száma: <input name="bankkartya_szam"> <br>
            Bankkártya lejárat: <input name="bankkartya_lejar"> <br>
            Bankkártyára írt név: <input name="bankkartya_nev"> <br>
            Bankkártya CV-kód: <input type="password" name="bankkartya_cv"> <br>
            <input name="register" type="submit" value="Regisztrál">
        </form>

        <?php if(isset($_GET["hiba"])): ?>
            <?php if($_GET["hiba"] == "register_letezik"): ?>
                Ilyen felhazsnáló már létezik.
            <?php elseif($_GET["hiba"] == "register_uname"): ?>
                A felhasználónév csak betűkből és számokból állhat, és legalább 5 karakternek kell lennie.
            <?php elseif($_GET["hiba"] == "register_pw"): ?>
                A jelszó legalább 8 karakter, tartalmazzon kisbetűt, nagybetűt, számot, és a Ł ß % karakterek valamelyikét
            <?php elseif($_GET["hiba"] == "register_pw_nomatch"): ?>
                A jelszavak nem egyeznek.
            <?php elseif($_GET["hiba"] == "register_cardnum"): ?>
                A kártyaszám nem megfelelő formátumú xxxx-xxxx-xxxx-xxxx
            <?php elseif($_GET["hiba"] == "register_carddate"): ?>
                A lejárati dátum nem megfelelő formátumú hh/éé
            <?php elseif($_GET["hiba"] == "register_cardname"): ?>
                Név kártya
            <?php elseif($_GET["hiba"] == "register_cardcv"): ?>
                Név cv
            <?php endif ?>
        <?php endif ?>

    <?php endif ?>
</body>
</html>