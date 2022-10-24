<?php
    $animals = [
        (object)[
            'name' => 'Aslan',
            'age' => 400,
            'toys' => ['sword', 'shield']
        ],
        (object)[
            'name' => 'Rancor',
            'age' => 120,
            'toys' => ['stone', 'Luke Skywalker']
        ],
        (object)[
            'name' => 'Nazgul',
            'age' => 60,
            'toys' => ['Eowyn', 'horse', 'Frodo']
        ],
        (object)[
            'name' => 'Paddington',
            'age' => 10,
            'toys' => ['marmelade', 'hat']
        ]
    ];

    function colorManyToyedAnimal($animal){
        return count($animal->toys) > 2 ? 'manytoys' : 'fewtoys';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animals</title>
</head>
<style>
    .manytoys{
        background-color: greenyellow;
    }
    .fewtoys{
        background-color: red;
    }
</style>
<body>
    <table>
        <?php
        foreach($animals as $animal){
            echo('<tr><td>'.$animal->name.'</td><td>'.$animal->age.'</td></tr>');
            // DONT DO THIS, don't use long logic while generating content
        }
        ?>
    </table>
    <table>
        <?php foreach($animals as $animal): ?>
            <tr class="<?=colorManyToyedAnimal($animal)?>">
                <td><?=$animal->name?></td>
                <td><?=$animal->age?></td>
                <td>
                    <ul>
                        <?php foreach($animal->toys as $toy): ?>
                            <li><?=$toy?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <!-- 2 points
        generate a 100x100 table
        each cell should contain the col and row index
        if the row and col are both even, make the background blue
    -->
</body>
</html>