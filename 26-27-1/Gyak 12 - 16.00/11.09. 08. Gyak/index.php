<?php

$username = 'Peter';
$people = ['Peter', 'George', 'Mate', 'Petra', 'Kati'];
if(true) {

} else if(true) {

}

function add($a, $b) {
    return $a + $b;
}

for($i = 0; $i < 10; $i++) {
    echo $i;
}

foreach($people as $person) {

}

foreach($people as $index => $person) {

}

// asszociatív tömb:
$person_assoc = [
    'name' => 'Peter',
    'age' => 29,
    'has_cat' => true
];

// objektum
$person_object = (object)[
    'name' => 'Peter',
    'age' => 29,
    'has_cat' => true
];

$person_2_object = $person_object;
$person_2_object->name = 'George'; // a komplex típusok referenciák! ha másolod őket, csak a referencia másolódik, az érték ugyanott marad a memóriában!

$a = '6';
$b = '10';

$friends_of_peter = [
    (object) [ 'name' => 'George', 'age' => 30, 'has_cat' => false ],
    (object) [ 'name' => 'Patrik', 'age' => 26, 'has_cat' => true ],
    (object) [ 'name' => 'Benji', 'age' => 28, 'has_cat' => false ],
    (object) [ 'name' => 'Petra', 'age' => 27, 'has_cat' => true ]
];

//$user_input = 'name';
//echo $friends_of_peter[0][$user_input]; --> ez nem működik, hiszen $friends_of_peter[0] az egy objektum, nem egy tömb
//echo $friends_of_peter[0]->$user_input;

/*
$something = 'example';
$interesting = 'something';
echo $$interesting;
*/

/*
$🌈🦄🚗 = 'valami';
echo $🌈🦄🚗;

$𓃒 = 'múú';
echo $𓃒;
*/

?>

<!DOCTYPE html>
<html lang="en">
<body>
    Hello <?= $username ?>! <br>
    Asszociatív: <?= $person_assoc['name'] ?> <br>
    Obektum: <?= $person_object->name ?> <br>

    Összeadás: <?= $a + $b ?> <br>
    Szövegösszefűzés: <?= $a . $b ?>

    <ul>
        <?php foreach($people as $index => $person): ?>
            <li>The name of person no.<?= $index ?> is: <?= $person ?> </li>
        <?php endforeach ?>
    </ul>

    <h2>Frieds of Peter who own a cat:</h2>
    <ul>
        <?php foreach($friends_of_peter as $person): ?>
            <?php if($person->has_cat): ?>
                <li><?= $person->name ?></li>
            <?php endif ?>

        <?php endforeach ?>
    </ul>

    <h2>All friends of Peter:</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Has cat</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($friends_of_peter as $person): ?>
            <tr>
                <td><?= $person->name ?></td>
                <td><?= $person->age ?></td>
                <td><?= $person->has_cat ? 'Yes' : 'No' ?></td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>