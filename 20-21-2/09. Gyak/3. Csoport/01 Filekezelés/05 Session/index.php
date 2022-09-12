<?php

session_start();
$bejelentkezve = isset($_SESSION["nev"]);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Szia Vilmos!
        <form action="kijelentkez.php">
            <input type="submit" value="Kijelentkez">
        </form>
    <?php else: ?>
        Jelentkezz be!
        <form action="bejelentkez.php">
            <input type="submit" value="Bejelentkez">
        </form>
    <?php endif ?>
</body>
</html>