<?php
require_once 'fuggvenyek.php';
$index = $_GET['id'];
$filmek = json_beolvas('filmek');
$film = $filmek[$index];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?=$film->cim?> (<?=$film->ev?>)</h1>
    <div>Besorolás: <?=$film->besorolas?></div>
</body>
</html>