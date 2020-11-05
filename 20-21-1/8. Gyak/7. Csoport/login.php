<?php

$bejelentkezve = false;
$hibak = [];

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if($_POST['felhasznalonev'] == 'almafa' && $_POST['jelszo'] == 'almafa123'){
        $bejelentkezve = true;
    }else{
        $hibak[] = 'Rossz felhasználónév-jelszó pár.';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bejelentkezés teszt</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Be vagy jelentkezve!
    <?php else: ?>
        <form method="post">
            Felhasználónév: <input name="felhasznalonev"> <br>
            Jelszó: <input type="password" name="jelszo"> <br>
            <input type="submit">
        </form>
        <?php if(count($hibak) > 0): ?>
            <?=$hibak[0]?>
        <?php endif ?>
    <?php endif ?>
</body>
</html>