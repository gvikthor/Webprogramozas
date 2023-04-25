<?php
    //echo 'alma';
    //echo 'körte';
    //error_log('alma');

    $fruit_title = 'Fruit basket';

    $fruits = ['peach', 'apple', 'orange']; // bármi lehet benne, lehet keverni is a dolgokat
    // $fruits[0]
    $fruits[] = 'fig';
    //var_dump($fruits);

    $shop = [
        'adress' => '1039 Alma utca 7.',
        'type' => 'clothes'
    ];
    $shop['owner'] = 'Peter';
    //echo $shop['adress'];
    //var_dump($shop);

    $shop2 = (object)[
        'adress' => '1117 Körtefa utca 7.',
        'type' => 'groceries'
    ];
    
    $shop2->owner = 'George';
    //echo $shop2->adress;
    //var_dump($shop2);

    /*for($i = 0; $i < 5; $i++){
        error_log($i);
    }*/

    /*$i = 0;
    while($i < 5){
        error_log($i);
        $i++;
    }*/

    //for(const valami of tomb)
    //foreach($fruits as $fruit){
    foreach($fruits as $index => $fruit){
        error_log($index . '. elem: ' . $fruit);
    }

    if(5 == 5){

    }else if(7 > 5){

    }else{

    }

    $people = [
        (object)[
            'name' => 'Peter',
            'age' => 25,
            'animals' => ['dog', 'cat']
        ],
        (object)[
            'name' => 'George',
            'age' => 30,
            'animals' => ['dog', 'cat', 'bird']
        ],
        (object)[
            'name' => 'Steve',
            'age' => 35,
            'animals' => ['dog', 'cat', 'bird', 'fish']
        ],
        (object)[
            'name' => 'Laure',
            'age' => 40,
            'animals' => ['dog', 'cat', 'bird', 'fish', 'snake']
        ]
    ];

    function is_bird_person($person){
        return in_array('bird', $person->animals);
    }

    /*
    $is_bird_person = function ($person){
        return in_array('bird', $person->animals);
    };
    */

    $log_this = 'alma';
    // Tömbfüggvények: https://www.php.net/manual/en/ref.array.php
    $fish_people = array_filter($people, function ($person) use ($log_this) {
        error_log($log_this);
        return in_array('fish', $person->animals);
    });
    //$bird_people = array_filter($people, is_bird_person($person)); ez nem működik
    //$bird_people = array_filter($people, $is_bird_person);

    $árvíztűrőtükörfúrógép = 'asdadf';
    $✅🤣🌐👉❗ = 'xd';
    error_log($✅🤣🌐👉❗);

    $valami = 'alma';
    $alma = 'körte';
    error_log($$valami);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$fruit_title?></title>
</head>
<body>
    <h1>Beginner app</h1>
    <h2>Fruits</h2>
    Amount of fruits: <?=count($fruits)?> <br>
    <ul>
        <?php /*foreach($fruits as $fruit){
            echo "<li>$fruit</li>";
        } */?>
        <?php foreach($fruits as $index => $fruit): ?>
            <li id="fruit-<?=$index?>"><?=$fruit?></li>
        <?php endforeach ?>
    </ul>

    <h2>People</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Animals</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($fish_people as $person): ?>
            <tr>
                <td><?=$person->name?></td>
                <td><?=$person->age?></td>
                <td>
                    <ul>
                        <?php foreach($person->animals as $animal): ?>
                        <li><?=$animal?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>