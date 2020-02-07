<?php session_start(); ?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $bejelentkezve = isset($_SESSION["uname"]);
    ?>
    
    <?php if($bejelentkezve): ?>
        Heloo <?=$_SESSION["uname"]?>!<br>


        <div id="desc"><?=$_SESSION["udata"]->desc?></div>
        <button id="edit">Szerkeszt</button>
        <script>
            document.getElementById("edit").addEventListener('click', ()=>{
            document.getElementById("desc").innerHTML = `<form method="post" action="update.php">
                <input name="desc" value=<?=$_SESSION["udata"]->desc?>>
                <input type="submit" name="update" value="Elment">
            </form>`;
            });
        </script>

        <br><br>
        <form action="logout.php" method="post">
            <input name="logout" type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        <form action="login.php" method="post">
            Felhasználónév: <input name="uname">
            Jelszó: <input type="password" name="pword">
            <input name="login" type="submit" value="Bejelentkez">
        </form>
        <br><br>
        <form action="register.php" method="post">
            Felhasználónév: <input name="uname">
            Jelszó: <input type="password" name="pword1">
            Jelszó újra: <input type="password"  name="pword2">
            Leírás: <input name="desc">
            Profilkép linkje: <input name="link">
            <input name="register" type="submit" value="Regisztrál">
        </form>

        <br>

        <?php if(isset($_GET["hiba"])): ?>
            <?php if($_GET["hiba"] == "pw_incorrect"): ?>
                Hibás jelszó!
            <?php elseif($_GET["hiba"] == "no_user"): ?>
                A felhasználó nem létezik.
            <?php elseif($_GET["hiba"] == "exists"): ?>
                A felhasználó már létezik.
            <?php elseif($_GET["hiba"] == "short_uname"): ?>
                A felhasználónév legalább 5 karaktzer.
            <?php elseif($_GET["hiba"] == "bad_uname"): ?>
                A felhasználónév csak betűket és számokat tartalmazhat.
            <?php elseif($_GET["hiba"] == "bad_pword"): ?>
                A jleszó nem elég komplex.
            <?php elseif($_GET["hiba"] == "two_pword"): ?>
                A jelszavak nem egyeznek.
            <?php endif ?>
        <?php endif ?>
    <?php endif ?>

</body>
</html>