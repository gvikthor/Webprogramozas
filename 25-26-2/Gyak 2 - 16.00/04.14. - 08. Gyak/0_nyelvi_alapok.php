<?php
    $name = 'Peter';
    $a = 5;
    $b = 10;
    $games = ["Sims 4", "Fifa 23", "Battlefront 2"];

    $dynamic_property = 'name';
    $double_dynamic = 'dynamic_property';

    $assoc_array = [
        'name' => 'Peter',
        'age' => 29
    ];

    $object = (object)[
        'name' => 'Peter',
        'age' => 29
    ];

    $árvíztűrőtükörfúrógép = 'valami';
    $🦁 = 'valami';
    $𓁒 = 'teszt';

    function add($a, $b) {
        return $a + $b;
    }

    for($i = 0; $i < 10; $i++) {

    }

    foreach($games as $game) {
        
    }
?>
<body>
    Hello <?= $name ?>!
    <?= $a + $b ?>
    <?= $a . $b ?>
    <?= $🦁 ?>
    <?= $𓁒 ?>
    <br>

    <h2>Associative array</h2>
    <?= $assoc_array['name'] ?>
    <?= $assoc_array[$dynamic_property] ?>
    <?= $assoc_array[$$double_dynamic] ?>

    
    <h2>Associative array</h2>
    <?= $object->name ?>
    <?= $object->$dynamic_property ?>
</body>