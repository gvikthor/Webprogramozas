<?php
session_start();
$_SESSION['name'] = 'Gábor';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Szia <?=$_SESSION['name']?>!
</body>
</html>