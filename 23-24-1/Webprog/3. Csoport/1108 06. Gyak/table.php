<?php

$associative_array = [
    'name' => 'Gergő',
    'age' => 27,
    'friends' => ['Áron', 'Péter']
];

$object = (object)[
    'name' => 'Gergő',
    'age' => 27,
    'friends' => ['Áron', 'Péter']
];
?>

<?= $associative_array['name'] ?> <br>
<?= $object->name ?>

<?php
$people = [
    (object)[ 'name' => 'Gergő', 'age' => 27, 'friends' => ['Áron', 'Péter']],
    (object)[ 'name' => 'Dalma', 'age' => 24, 'friends' => ['Erik', 'Orsi', 'Zoli']]
];
?>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Friends</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($people as $person): ?>
        <tr>
            <td><?=$person->name?></td>
            <td><?=$person->age?></td>
            <td>
                <ul>
                    <?php foreach($person->friends as $friend): ?>
                    <li><?=$friend?></li>
                    <?php endforeach ?>
                </ul>
            </td>
        </tr>
        <?php endforeach ?>
    </tbody>
</table>