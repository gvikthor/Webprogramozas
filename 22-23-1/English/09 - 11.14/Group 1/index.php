<?php
//require_once 'test.php';
require_once 'pages.php';

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
    <!-- ?=something(5,7)?>
    < ?php something2(5,7); ? this is for the test.php-->
    <!--?php require 'form_login.php'; ?-->

    <h2>Login</h2>
    <?php page_login('index.php') ?>

    <h2>Register</h2>
    <?php page_register('index.php') ?>

</body>
</html>