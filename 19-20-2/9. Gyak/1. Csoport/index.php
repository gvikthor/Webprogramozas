<?php
session_start();
$bejelentkezve = isset($_SESSION["fnev"]);
?>

<?php if($bejelentkezve): ?>
    <body>
        Szia <?=$_SESSION["fnev"]?>!
        <form action="kijelentkez.php">
            <input type="submit" value="Kijelentkez">
        </form>
    </body>
<?php else: ?>
    <body>
        Nem vagy bejelentkezve.
        <form action="bejelentkez.php" method="post">
            Felhasználónév: <input name="fnev"><br>
            Jelszó: <input type="password" name="jszo"><br>
            <input type="submit" value="Bejelentkez">
        </form>

        <br><br>

        <form action="regisztral.php" method="post">
            Felhasználónév: <input name="fnev"><br>
            Jelszó: <input type="password" name="jszo1"><br>
            Jelszó újra: <input type="password" name="jszo2"><br>
            <input type="submit" value="Regisztrál">
        </form>

        <br><br>

        <?php if(isset($_GET["hiba"])): ?>
            <?php if($_GET["hiba"] == "rosszadat"): ?>
                Rossz felhasználónév vagy jelszó.
            <?php elseif($_GET["hiba"] == "fletezik"): ?>
                A felhasználó már létezik.
            <?php elseif($_GET["hiba"] == "fhossz"): ?>
                A felhasználónév legyen mnimum 5, de legfeljebb 15 karakter hosszú.
            <?php elseif($_GET["hiba"] == "fkomplex"): ?>
                A felhasználónév nem tartalmazhat speciális karaktereket.
            <?php elseif($_GET["hiba"] == "jegyezik"): ?>
                A jelszavak nem egyeznek.
            <?php elseif($_GET["hiba"] == "jhossz"): ?>
                A jelszó legyen mnimum 8, de legfeljebb 30 karakter hosszú.
            <?php elseif($_GET["hiba"] == "jkomplex"): ?>
                A leszó nem elég komplex.
            <?php endif ?>
        <?php endif ?>
    </body>
<?php endif ?>