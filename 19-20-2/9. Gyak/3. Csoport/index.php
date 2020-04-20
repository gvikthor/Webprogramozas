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
        Nem vagy bejelentkezve!
        <form action="bejelentkez.php" method="post">
            Fnev: <input name="fnev"><br>
            Jszo: <input type="password" name="jszo"><br>
            <input type="submit" value="Bejelentkez">
        </form>

        <br><br>

        <form action="regisztral.php" method="post">
            Fnev: <input name="fnev"><br>
            Jszo: <input type="password" name="jszo1"><br>
            Jszo újra: <input type="password" name="jszo2"><br>
            <input type="submit" value="Regisztrál">
        </form>

        <br><br>

        <?php if(isset($_GET["hiba"])): ?>
            <?php if($_GET["hiba"] == "rosszadat"): ?>
                Hibás bejelentkezési adatok.
            <?php elseif($_GET["hiba"] == "letezik"): ?>
                A felhasználónév már foglalt.
            <?php elseif($_GET["hiba"] == "fhossz"): ?>
                A felhasználónév legyen legalább 5, legfeljebb 15 karakter hosszú.
            <?php elseif($_GET["hiba"] == "fkomplex"): ?>
                A felhasználónév nem tartalmazhat speciális karaktereket.
            <?php elseif($_GET["hiba"] == "jegyezes"): ?>
                A jelszavak nem egyeznek.
            <?php elseif($_GET["hiba"] == "jhossz"): ?>
                A jelszó legyen legalább 8, legfeljebb 30 karakter hosszú.
            <?php elseif($_GET["hiba"] == "jkomplex"): ?>
                A jelszó nem elég komplex.
            <?php endif ?>
        <?php endif ?>
    </body>
<?php endif?>