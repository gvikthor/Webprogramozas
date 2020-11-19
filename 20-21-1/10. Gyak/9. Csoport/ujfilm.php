<?php
    session_start();
    if(!isset($_SESSION["fnev"])){
        header('Location: index.php');
        die;
    }
    
    function reszoldal($oldalnev){
        require('reszoldal_' . $oldalnev . '.php');
    }
    reszoldal('menu');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új film</title>
</head>
<body>
    <?php menu(); ?>

    <form action="keres_ujfilm.php">
        Film címe <br>
        <input name="cim">
        
        <br><br>

        Film megjelenési éve <br>
        <input name="ev">

        <br><br>

        <input type="submit" value="Hozzáad">
    </form>
</body>
</html>