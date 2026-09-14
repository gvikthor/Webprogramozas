<?php
session_start();
$is_logged_in = isset($_SESSION['kiscica']);

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
        Miau!
        <a href="example-logout.php">Logout</a>
    <?php else: ?>
        <a href="example-login.php">Login</a>
    <?php endif ?>
</body>
</html>