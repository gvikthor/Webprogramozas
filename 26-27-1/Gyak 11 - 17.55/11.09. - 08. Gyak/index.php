<?php
require_once 'functions.php';
something();

$something = 'example';
/*$valami = 'something';
echo $$valami;*/
/*
$🌈🦄🚗 = 'valami';
$𓃵 = 'mekk';
echo $𓃵;
*/

$some_array = ['something', true, 5, [1,2,3]];

$key = 'age';

// asszociatív tömb
$some_assoc_array = [
    'name' => 'Peter',
    'age' => 18,
    'has_cat' => true
];
//echo $some_assoc_array['name'];
//echo $some_assoc_array[$key];
// hiba: echo $some_assoc_array->name;

// objektum
$some_object = (object) [
    'name' => 'Peter',
    'age' => 18,
    'has_cat' => true
];
//echo $some_object->name;
//echo $some_object->$key;
//hiba: echo $some_object['name'];

if(true) {

} elseif (false) {

} else {

}

function add($a, $b) {
    return $a+$b;
}

for($i = 0; $i < count($some_array); $i++) {
    // valami
}

foreach($some_array as $some_element) {
    // valami
}
foreach($some_array as $index => $some_element) {
    // valami
    // $some_array[$index] == $some_element
}

$i = 0;
while($i < 5) {
    $i++;
}

$a = '5';
$b = '7';
echo $a + $b;
echo $a . $b;

$friends_of_peter = ['George', 'Andrea', 'Gabriel', 'Petra'];

$complex_friends_of_peter = [
    (object)['name' => 'George', 'age' => 28, 'has_cat' => true],
    (object)['name' => 'Peter', 'age' => 25, 'has_cat' => false],
    (object)['name' => 'Andrea', 'age' => 21, 'has_cat' => true],
    (object)['name' => 'Gabriel', 'age' => 29, 'has_cat' => true],
    (object)['name' => 'Petra', 'age' => 24, 'has_cat' => false]
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
    I have two numbers, <?= $a ?> and <?= $b ?>. Added together they are <?= add($a, $b) ?>

    <ul>
        <?php foreach($friends_of_peter as $friend): ?>
            <li> <?= $friend ?> </li>
        <?php endforeach ?>
    </ul>

    
    <ul>
        <?php
        foreach($friends_of_peter as $friend) {
            echo "<li>$friend</li>";
        }
        ?>
    </ul>

    <table>
        <thead>
            <tr><th>Number</th><th>Name</th></tr>
        </thead>
        <tbody>
            <?php foreach($friends_of_peter as $index => $friend): ?>
            <tr>
                <td><?= $index+1 ?></td>
                <td><?= $friend ?></td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>

    <h2>Friends of Peter who are atleast 25 yo and have a cat:</h2>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Has cat</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($complex_friends_of_peter as $friend): ?>
            <tr>
                <td><?= $friend->name ?></td>
                <td><?= $friend->age ?></td>
                <td><?= $friend->has_cat ? 'Yes' : 'No' ?></td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>

</body>
</html>