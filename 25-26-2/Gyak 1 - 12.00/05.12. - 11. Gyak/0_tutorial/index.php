<?php
session_start();
//$is_logged_in = isset($_SESSION['kiscica]) && $_SESSION['kiscica'] == 'miau';
$is_logged_in = isset($_SESSION['user']);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php if($is_logged_in): ?>

    <a href="logout.php">Logout</a>
    Hi! You are logged in!

<?php else: ?>

    <a href="login.php">Login</a>
    You are not logged in.

<?php endif ?>


</body>
</html>