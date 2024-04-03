<?php

$username = 'Peti';
$birth_year = 1997;
function current_age($birth_year){
    return 2024 - $birth_year;
}

if(true){

}elseif(true){

}else{

}

for($i = 0; $i < 5; $i++){

}

$animals = ['cat', 'dog', 'cat'];
/*foreach($animals as $animal){
    echo $animal;
}*/

// asszociatív tömbök
$animal_assoc = [
    [
        'species' => 'cat',
        'name' => 'Cirmi'
    ],
    [
        'species' => 'dog',
        'name' => 'Blöki'
    ],
    [
        'species' => 'cat',
        'name' => 'Miau'
    ]
];

$animal_objects = [
    (object)[
        'species' => 'cat',
        'name' => 'Cirmi'
    ],
    (object)[
        'species' => 'dog',
        'name' => 'Blöki'
    ],
    (object)[
        'species' => 'cat',
        'name' => 'Miau'
    ]
];

$űőü🐱⭕ = 'alma';
$korte = 'űőü🐱⭕';
$szilva = 'korte';

echo $$$szilva;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Alapok</title>
</head>
<body>
    Szia <?=$username?>! 🐱 Te <?=current_age($birth_year)?> éves vagy.

    <hr>

    <ul>
    <?php foreach($animal_assoc as $animal): ?>
        <li><?=$animal['name']?> (<?=$animal['species']?>)</li>
    <?php endforeach ?>
    </ul>

    
    <ul>
    <?php foreach($animal_objects as $animal): ?>
        <?php if($animal->species == 'cat'): ?>
            <li><?=$animal->name?> (<?=$animal->species?>)</li>
        <?php endif ?>
    <?php endforeach ?>
    </ul>
</body>
</html>