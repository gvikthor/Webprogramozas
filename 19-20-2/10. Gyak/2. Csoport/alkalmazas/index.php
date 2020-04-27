<?php session_start(); ?>

<?php if(isset($_SESSION["felhasznalonev"])): ?>
    <?php require_once("adatbazis.php"); ?>
    <html>
        <body>
            Szia <?=$_SESSION["felhasznalonev"]?>!<br>
            <div id="description">
                <?=leiras($_SESSION["felhasznalonev"])?>
            </div>
            <script src="leiras.js"></script>
            <form action="kijelentkez.php" method="post">
                <input type="submit" name="kijelentkezes" value="Kijelentkezés">
            </form>
        </body>
    </html>
<?php else: ?>
    <html>
        <body>
            Ki vagy jelentkezve!
            <form action="bejelentkez.php" method="post">
                Felhasználónév: <input name="felhasznalonev"><br>
                Jelszó: <input type="password" name="jelszo"><br>
                <input type="submit" name="bejelentkezes" value="Bejelentkezés">
            </form>

            <br><br>

            Regisztrálj!
            <form action="regisztral.php" method="post">
                Felhasználónév: <input name="felhasznalonev"><br>
                Jelszó: <input type="password" name="jelszo1"><br>
                Jelszó újra: <input type="password" name="jelszo2"><br>
                <input type="submit" name="regisztral" value="Regisztrál">
            </form>

            <br><br>

            <?php if(isset($_GET["hiba"])): ?>
                <?php if($_GET["hiba"] == "rosszadat"): ?>
                    Rossz felhasználónév vagy jelszó.
                <?php elseif($_GET["hiba"] == "letezik"): ?>
                    A felhasználó már létezik.
                <?php elseif($_GET["hiba"] == "nemegyezik"): ?>
                    A két jelszó nem egyezik.
                <?php elseif($_GET["hiba"] == "frosszkarakter"): ?>
                    A felhasználónév illegális karaktert tartalmaz.
                <?php elseif($_GET["hiba"] == "fhossz"): ?>
                    A felhasználónév legalább 5, de legfeljebb 15 karakter lehet.
                <?php elseif($_GET["hiba"] == "jhossz"): ?>
                    A jelszó legalább 8, de legfeljebb 30 karakter lehet.
                <?php elseif($_GET["hiba"] == "jkomplex"): ?>
                    A jelszó nem elég komplex.
                <?php else: ?>
                    Ismeretlen hiba.
                <?php endif ?>
            <?php endif ?>
        </body>
    </html>
<?php endif ?>