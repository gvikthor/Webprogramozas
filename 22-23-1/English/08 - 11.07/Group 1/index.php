<?php
    $name = 'Somebody';

    /*
    http://localhost:3000/?username=Obi-Wan&favcolor=blue&apprentice=Anakin%20Skywalker
    */
    //var_dump($_GET);
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
    <h1>Hello there <?=$_GET['displayname']?>!</h1>

    <form method="GET" action="index.php">
        <input name="displayname">
        <input type="submit">
    </form>

    <hr>

    <form method="GET" action="newpage.php">
        Age: <input name="age" type="number"> <br>
        Favourite color: <input name="favcolor"> <br>
        <input type="submit" value="Send">
    </form>

    <hr>

    <form method="POST" action="register.php">
        Username: <input name="uname"> <br>
        Password: <input type="password" name="password1"> <br>
        Password again: <input type="password" name="password2"> <br>
        Age: <input name="age" type="number"> <br>
        Favourite color: <select name="color">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
        </select><br>
        Gender:
        <input type="radio" name="gender" value="f"> Female
        <input type="radio" name="gender" value="m"> Male
        <input type="radio" name="gender" value="o"> Other/no answer
        <br>
        Description: <textarea name="desc"></textarea>
        <input type="submit" value="Register">
    </form>
</body>
</html>