<?php
    $name = "Gergő";
    $other = "name";
    $🦁 = "valami";
    $𓁘𓅄𓋇 = "valami";

    $games = ["Sims 4", "Fifa 23", "Battlefront 2"];

    $a = 6;
    $b = 8;

    // Asoociative array
    $person1 = [
        "name" => "Peti",
        "age" => 29
    ];

    // Object
    $person2 = (object)[
        "name" => "Peti",
        "age" => 29
    ];

    if(true) {

    }elseif(true){

    }else{

    }

    for($i = 0; $i < 10; $i++) {

    }

    foreach($games as $game) {

    }

    foreach($games as $index => $game) {

    }

    function add($a, $b) {
        return $a + $b;
    }
?>
<body>
    Hello <?= $name ?>!
    <ul>
    <li><?= $$other ?></li>
    <li><?= $a + $b ?></li>
    <li><?= $a . $b ?></li>
    <li><?= $person1["name"] ?></li>
    <li><?= $person1[$other] ?></li>
    <li><?= $person2->name ?></li>
    <li><?= $person2->$other ?></li>
    </ul>
</body>