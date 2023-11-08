<?php
    $name = 'Gergő';
    $age = 27;
    if($age > 25){

    }else if($age < 10){

    }else{

    }
    for($i = 0; $i < 10; $i++){

    }
    $friends = ['Áron', 'Péter'];
    foreach($friends as $friend){

    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile of <?= $name ?></title>
</head>
<body>
    <h1><?= $name ?></h1>
    <ul>
    <?php foreach($friends as $friend): ?>
        <li>Barát: <?=$friend?></li>
    <?php endforeach ?>
    </ul>

    
    <!-- echo '<li>' . $friend . '</li>';
         echo "<li>$friend</li>"; -->
</body>
</html>