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
    ?>


    <?php if($bejelentkezeve): ?>
    
        Szia <?=htmlspecialchars($_SESSION['uname'])?>! <br>
        <button id="edit"><img width="10px" heigth="10px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/UniversalEditButton3.png/220px-UniversalEditButton3.png"></button>
        <div id="leiras"> <?=htmlspecialchars($_SESSION['leiras'])?> </div>
        <script>
            document.getElementById('edit').addEventListener('click',()=>{
                document.getElementById('leiras').innerHTML = `
                    <form action="frissit.php" method="post">
                        <input name="leiras" type="textbox" value=<?=htmlspecialchars($_SESSION['leiras'])?>>
                        <input name="frissit" type="submit" value="ment">
                    </form>
                `;
            });
        </script>

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
            Leírás: <input name="leiras"> <br>
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
            <?php endif ?>
        <?php endif ?>


    <?php endif ?>
</body>
</html>