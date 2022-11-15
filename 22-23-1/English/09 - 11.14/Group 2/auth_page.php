<?php require_once 'pages.php' ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication</title>
</head>
<body>
    <?php page_login($_POST['origin']) ?>
    <?php page_register($_POST['origin']) ?>
</body>
</html>