<?php
    //var_dump($_GET);
    $name = $_GET['name']; //$_POST
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello there <?=$name?>!</h1>

    <form action="newpage.php" method="POST">
        <input name="name"> <br>
        <input type="submit" value="Send">
    </form>
    <hr>
    <form action="register.php" method="POST">
        Username: <input name="uname"> <br>
        Password: <input name="pword1" type="password"> <br>
        Password again: <input name="pword2" type="password"> <br>
        Birth year: <input type="number" name="year"> <br>
        City: <select name="city">
            <option value="hu-bp">Budapest</option>
            <option value="hu-db">Debrecen</option>
            <option value="uk-ln">London</option>
            <option value="uk-mc">Manchester</option>
            <option value="de-br">Berlin</option>
        </select> <br>
        Favourite color: <br>
        <input type="radio" name="color" value="red"> Red <br>
        <input type="radio" name="color" value="blue"> Blue <br>
        <input type="radio" name="color" value="green"> Green <br>
        <input type="submit" value="Register">
    </form>
</body>
</html>