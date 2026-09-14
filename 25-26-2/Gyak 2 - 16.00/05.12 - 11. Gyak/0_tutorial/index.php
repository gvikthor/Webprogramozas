<?php
session_start();
require_once 'functions.php';

$is_logged_in = isset($_SESSION['user_id']);

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
    <a href="logout.php">Logout</a> <br>
    Hi User, you are logged in!
<?php else: ?>
    <a href="login.php">Login</a> <br>
    You are not logged in, please, press the button!
<?php endif ?>



</body>
</html>