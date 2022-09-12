<?php function autentikacio($volthiba){ ?>
    <form action="bejelentkez.php" method="post">
        Felhasználónév: <input name="fnev"> <br>
        Jelszó: <input type="password" name="jszo"> <br>
        <input type="submit" value="Bejelentkez">
    </form>

    <form action="regisztral.php" method="post">
        Felhasználónév: <input name="fnev"> <br>
        Jelszó: <input type="password" name="jszo1"> <br>
        Jelszó újra: <input type="password" name="jszo2"> <br>
        <input type="submit" value="Regisztrál">
    </form>

    <?php if($volthiba): ?>
        <?php $hiba = $_GET['hiba']; ?>
        <?php if($hiba == 'rosszlogin'): ?>
            Hibás bejelentkezési adatok.
        <?php elseif($hiba == 'letezik'): ?>
            A felhasználónév foglalt.
        <?php elseif($hiba == 'fhossz'): ?>
            A felhasználónév legyen legalább 5, legfeljebb 15 karakter.
        <?php elseif($hiba == 'fkomplex'): ?>
            A felhasználónév csak betűket és számokat tartalmazhat.
        <?php elseif($hiba == 'egyezes'): ?>
            A jelszavak nem egyeznek.
        <?php elseif($hiba == 'jhossz'): ?>
            A jelszó legyen legalább 8 karakter.
        <?php elseif($hiba == 'jkomplex'): ?>
            A jelszó tartalmazzon kisbetűt, nagybetűt, számot és speciális karaktert (, . -)
        <?php else: ?>
            Ismeretlen hiba. Hibakód: <?=$hiba?>
        <?php endif ?>
    <?php endif ?>
<?php } ?>