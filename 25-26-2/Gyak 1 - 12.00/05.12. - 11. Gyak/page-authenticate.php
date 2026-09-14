<?php
session_start();
$is_logged_in = isset($_SESSION['user_id']) && strlen($_SESSION['user_id']) > 0;
if($is_logged_in){
    redirect('index.php');
}


$errors = $_SESSION['errors'] ?? [];
$_SESSION['errors'] = [];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .current {
        font-weight: bold;
        color: #13294B;
    }
</style>
<body>
    <h1>Login/Register</h1>
    <nav>
        <a href="index.php">Home</a>
        <!--<a href="page-create-game.php">Add game</a>-->
        <a href="page-authenticate.php" class="current">Login/Register</a>
    </nav>

    <?php var_dump($errors); // úgy kell szépen mint a game create-nél ?>
    
    <h2>Login</h2>
    <form action="datahandling-user-login.php" method="POST">
        Username: <input name="uname"> <br>
        Password: <input type="password" name="pword"> <br>
        <input type="submit" value="Login">
    </form>

    <h2>Register</h2>
    <form action="datahandling-user-create.php" method="POST">
        Username: <input name="uname"> <br>
        E-mail: <input name="email"> <br>
        Password: <input type="password" name="pword1"> <br>
        Password again: <input type="password" name="pword2"> <br>
        <input type="submit" value="Register">
    </form>

</body>
</html>