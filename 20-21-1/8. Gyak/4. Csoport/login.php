<?php
    $hiba = true;
    if(isset($_POST['felhasznalonev']) && $_POST['felhasznalonev'] == 'almafa' && isset($_POST['jelszo']) && $_POST['jelszo'] == 'almafa123'){
        $hiba = false;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php if(isset($_POST['felhasznalonev'])): ?>
        <?php if($hiba): ?>  
            <form method="post">
                Felhazsnálónév: <input name="felhasznalonev"> <br>
                Jelszó: <input name="jelszo" type="password"> <br>
                <input type="submit">
            </form>
            A megadott adatok nem megfelelőek
        <?php else: ?>
            Sikeres bejelentkezés!
        <?php endif ?>
    <?php else: ?>  
        <form method="post">
            Felhazsnálónév: <input name="felhasznalonev"> <br>
            Jelszó: <input name="jelszo" type="password"> <br>
            <input type="submit">
        </form>
    <?php endif ?>
</body>
</html>