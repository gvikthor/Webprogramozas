<?php
    $name = 'Luke Skywalker';
    //echo($name);

    $something ='name';
    echo($$something);

    $❤️🤣😍🤣💕 = 57;
    echo($❤️🤣😍🤣💕);

    function addition($a, $b){
        return $a+$b;
    }

    for($i = 0; $i < 10; $i++){
        echo($i);
    }

    $people = ['Luke', 'Leia', 'Han Solo', 56, true, [true, false, 44, 'Chewbacca']];
    //echo($people);
    var_dump($people);

    echo('<br>'); 
    echo('<br>'); 

    foreach($people as $person){
        echo($person . '<br>');
    }

    $person1 = [
        'name' => 'Luke',
        'age' => 20,
        'friends' => ['Leia', 'Han']
    ];
    var_dump($person1);
    echo($person1['name'].'<br><br>');
    //echo($person1->name.'<br><br>');

    $person2 = (object)[
        'name' => 'Luke',
        'age' => 20,
        'friends' => ['Leia', 'Han']
    ];
    var_dump($person2);
    echo($person2->name.'<br><br>');
    //echo($person2['name'].'<br><br>');
    echo($person2->$something.'<br><br>');

    $arr = [1,23,4,7,5,3,6];
    echo(count($arr).'<br>'); // no length, no size; not a property, it's a funtion
    $arr[] = 7; //no push; not a function

    $person2->favColor = 'blue';

    foreach($arr as $index => $value){
        echo($index . ' ' . $value . '<br>');
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
    Hello there <?=$name?>!
    <?php echo('apple'); ?>
    <?='apple'?>
    <?=5+7?>
    <?=addition(5,7)?>
    <?=12?>
    <?='12'?>
</body>
</html>