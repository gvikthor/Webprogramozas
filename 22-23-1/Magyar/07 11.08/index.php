<?php

$something = 'Apple';
echo($something);

$árvíztűtőtükörfúrógép = 'something';
$🤣🛑❤️🖌️ = 'árvíztűtőtükörfúrógép';

function 🌇💕✅($param1){
    return 'Szeretem a PHP-t ' . $param1;
}

$a = '1';

$animals = ['cat', 'dog'];
$people = [
    'Susan' => ['cat', 'dog'],
    'Emil' => ['cat']
];

$person = [
    'name' => 'Susan',
    'animals' => ['cat', 'dog'],
    '✅💕📽️' => true
];

$person2 = (object)[
    'name' => 'Susan',
    'animals' => ['cat', 'dog'],
    '✅💕📽️' => true
];

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
    Hello There!
    <?php echo($something); ?> <br>
    <?=$something?> <br>
    <?=57+((9*78)/5)+1?> <br>
    <?= 5 == 8 ? ':(' : ':)' ?> <br>
    <?= 5 == '5' ? 'igen' : 'nem' ?> <br>
    <?= 5 === '5' ? 'igen' : 'nem' ?> <br>
    <?= [] == 0 ? 'igen' : 'nem' ?> <br>
    <?= null == 0 ? 'igen' : 'nem' ?> <br>
    <?=$árvíztűtőtükörfúrógép?> <br>
    <?=$🤣🛑❤️🖌️?> <br>
    <?=$$$🤣🛑❤️🖌️?> <br>
    <?=$i++?>
    <?=$i++?> <br>
    <?=🌇💕✅('(nem)')?> <br>
    <?='1'+1?> <br>
    <?=$a++?> <br>
    <?=$a?> <br>
    <?=$animals?> <br>
    <?=$animals[0]?> <br>
    <?=$animals[-1]?> <br>
    <?php var_dump($animals); ?> <br>
    <?=$person['name']?> <br>
    <?=$person2->name?> <br>
    C++ indoklás objektum nyílhoz: <br>
    (*valami).name<br>
    valami->name<br>

    <br>

    <ul>
    <?php
    for($i = 0; $i < 10; $i++){
        echo('<li>'.$i.'</li>');
    }
    ?>
    </ul>

    <br>

    <ul>
        <?php for($i = 0; $i < 10; $i++): ?>
            <li><?=$i?></li>
        <?php endfor ?>
    </ul>

    <br>

    <ul>
        <?php foreach($animals as $animal): ?>
            <li><?=$animal?></li>
        <?php endforeach ?>
    </ul>

    <br>

    
    <ul>
        <?php foreach($animals as $index => $animal): ?>
            <li><?=$animal?> (<?=$index?>)</li>
        <?php endforeach ?>
    </ul>

    <br>

    <ul>
        <?php foreach($person as $index => $attribute): ?>
            <li><?=$attribute?> (<?=$index?>, <?=$person[$index]?>)</li>
        <?php endforeach ?>
    </ul>

    <br>

    Objektumon foreachelni nem reális use-case.
    <ul>
        <?php foreach($person2 as $index => $attribute): ?>
            <li><?=$attribute?> (<?=$index?>, <?=$person2->$index?>)</li>
        <?php endforeach ?>
    </ul>
</body>
</html>