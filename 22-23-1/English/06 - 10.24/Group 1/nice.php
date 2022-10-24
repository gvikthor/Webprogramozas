<?php
    $animals = [
        (object)[
            'name' => 'Aslan',
            'species' => 'lion',
            'age' => 400
        ],
        (object)[
            'name' => 'Donkey',
            'species' => 'donkey',
            'age' => 3
        ],
        (object)[
            'name' => 'Ted',
            'species' => 'bear',
            'age' => 20
        ],
        (object)[
            'name' => 'Garfield',
            'species' => 'cat',
            'age' => 30
        ]
    ];

    function addAges($array){
        $sum = 0;
        foreach($array as $elem){
            $sum += $elem->age;
        }
        return $sum;
    }

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
    <table>
        <tr>
            <th>Name</th>
            <th>Species</th>
        </tr>
        <?php foreach($animals as $animal):?>
            <tr>
                <td><?=$animal->name?></td>
                <td><?=$animal->species?></td>
            </tr>
        <?php endforeach ?>
    </table>
    <p>The sum of the animls' ages: <?=addAges($animals)?></p>
</body>
</html>