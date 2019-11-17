<!-- http://webprogramozas.inf.elte.hu/hallgatok/mohmas/Gyak09/index.php -->

<?php session_start(); ?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Random regisztrálós oldal</title>
</head>
<body>
    <style>
        .rejtve{
            display: none;
        }
    </style>

    <?php
        $bejelentkezve = isset($_SESSION['f_nev']);
    ?>


    <?php if($bejelentkezve): ?>
        <form action="kijelentkez.php" method="post">
            <input type="submit" name="kijelentkez" value="Kijelentkezés">
        </form>

        <div id="tartalom">
            Hello, <?=$_SESSION["f_nev"]?>! <br><br>

            Bemutatkozás: <?=$_SESSION["adatok"]->leiras?> <br>
            <img width="100px" heigth="100px" src=<?=$_SESSION["adatok"]->profilkep?>></img>
        </div>
    <?php else: ?>
        <div>
            Ez itt egy nagyon fejlett oldal, ami korszerű technológiákat használ vagy mi... 
        </div>

        <button id="bejelentkez">Bejelentkezés</button>
        <button id="regisztral">Regisztráció</button>

        <!-- bejelentkezés -->
        <div <?php if(!isset($_GET['eredet']) || $_GET['eredet'] != "bejelentkez"): ?> class="rejtve" <?php endif ?> id="bejelentkez_form">
            <form action="bejelentkez.php" method="post">
                Felhasználónév: <input name="f_nev"></input> <br>
                Jelszó: <input type="password" name="jelszo"></input> <br>
                <input type="submit" name="bejelentkez" value="Bejelentkezés">
            </form>
        </div>

        <!-- regisztráció -->
        <div <?php if(!isset($_GET['eredet']) || $_GET['eredet'] != "regisztral"): ?> class="rejtve" <?php endif ?> id="regisztral_form">
            <form action="regisztral.php" method="post">
                Felhasználónév: <input name="f_nev"></input> <br>
                Jelszó: <input type="password" name="jelszo1"></input> <span style="cursor: pointer;" id="jelszo_tipp_gomb">[?]</span><span id="jelszo_tipp"></span><br>
                Jelszó újra: <input type="password" name="jelszo2"></input> <br>
                <input type="submit" name="regisztral" value="Regisztráció">
            </form>
        </div>

        <!-- hibakezelés -->
        <?php if(isset($_GET["hiba"])): ?>
            <?php if($_GET["hiba"] == "f_nev_ures"): ?>
                A felhasználónév megadása kötelező!
            <?php elseif($_GET["hiba"] == "f_nev_illegalis"): ?>
                A felhasználónév csak betűket (a-z) és számokat tartalmazhat!
            <?php elseif($_GET["hiba"] == "f_nev_letezik"): ?>
                A felhasználónév már foglalt!
            <?php elseif($_GET["hiba"] == "jelszo_kul"): ?>
                A jelszavak nem egyeznek!
            <?php elseif($_GET["hiba"] == "jelszo_rovid"): ?>
                A jelszó túl rövid!
            <?php elseif($_GET["hiba"] == "jelszo_komplex"): ?>
                A jelszó nem elég komplex!
            <?php elseif($_GET["hiba"] == "rossz_adatok"): ?>
                A felhasználónév és jelszó pár nem megfelelő!
            <?php endif ?>
        <?php endif ?>

        <script src="gombok.js"></script>

    <?php endif ?>
</body>
</html>
