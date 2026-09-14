<?php
$property_test = 'name';
$double_reference = 'property_test';
$🦁 = 'emoji';
$árvíztűrőtökörfúrógép = 'ékezetes változónév';

echo $$double_reference;
echo $🦁;
echo $árvíztűrőtökörfúrógép;

// Asszociatív tömb
$person1 = [
    'name' => 'Peti',
    'age' => 29
];
echo $person1['name'];
echo $person1[$property_test];
echo $person1[$$double_reference];

// Objektum
$person2 = (object)[
    'name' => 'Peti',
    'age' => 29
];
echo $person2->name;
echo $person2->$property_test;

//////////////////////////////////////////

$people = [
    (object)[ 'name' => 'Gergő', 'age' => '31' ],
    (object)[ 'name' => 'Peti', 'age' => '29' ],
    (object)[ 'name' => 'Áron', 'age' => '26' ]
];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>People list</h1>
    <ul>
        <?php foreach($people as $person): ?>
            <li><?= $person->name ?> (<?= $person->age ?> y/o)</li>
        <?php endforeach ?>
    </ul>
</body>
</html>