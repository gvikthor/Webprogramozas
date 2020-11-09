<?php
    session_start();
    $bejelentkezve = isset($_SESSION['username']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ez egy oldal</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Szia <?=$_SESSION['username']?> <br>
        <form action="logout.php" method="post">
            <input type="submit" value="Kijelentkezés">
        </form>

    <?php else: ?>

        <form action="login.php" method="post">
            Felhasználónév: <input name="username"> <br>
            Jelszó: <input type="password" name="password"> <br>
            <input type="submit" value="Bejelentkezés">
        </form>

        <form action="register.php" method="post">
            Felhasználónév: <input name="username"> <br>
            Jelszó: <input type="password" name="password1"> <br>
            Jelszó: <input type="password" name="password2"> <br>
            <input type="submit" value="Regisztráció">
        </form>

        <?php if(isset($_GET['hiba'])): ?>
            <?php $h = $_GET['hiba']; ?>
            <?php if($h == 'rossz'): ?>
                Hibás felhasználónév vagy jelszó!
            <?php elseif($h == 'letezik'): ?>
                A felhasználónév foglalt.
            <?php elseif($h == 'hossz'): ?>
                A felhasználónév minimum 5, maximum 10 karakter.
            <?php elseif($h == 'karakter'): ?>
                A felhasználónév csak betűket és számokat tartalmazhat.
            <?php elseif($h == 'egyezes'): ?>
                A jelszavak nem egyeznek.
            <?php elseif($h == 'jhossz'): ?>
                A jelszó legalább 8 karakter legyen!
            <?php elseif($h == 'komplex'): ?>
                A jelszó tartalmazzon kisebetűt, nagybetűt, számot és , . - egyikét!
            <?php else: ?>
                Ismeretlen hiba! Hibakód: <?=$_GET['hiba']?>
            <?php endif ?>
        <?php endif ?>

    <?php endif ?>
</body>
</html>