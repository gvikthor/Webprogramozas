<?php

$name = 'Gergő';
$age = 27;
$friends = ['Áron', 'Péter'];
$friends[] = 'Bálint';
var_dump(count($friends));

$associative_array = [
    'name' => 'Gergő',
    'age' => 27,
    'friends' => ['Áron', 'Péter']
];
var_dump($associative_array['name']);

$object = (object)[
    'name' => 'Gergő',
    'age' => 27,
    'friends' => ['Áron', 'Péter']
];
var_dump($object->name);

for($i = 0; $i < 10; $i++){

}

while(false){

}

foreach($friends as $friend){

}

if(true){

}else if(true){

}else{

}

function is_even($number){
    //var_dump($friends[0]);
    return $number % 2 == 0;
}
is_even(5);

$áőüöopáőőüápé = 'alma';
$➕🚯👉➕ = 'alma';

$alma = 'korte';
$korte = 'szilva';
echo '--------------'.$$alma.'<br>';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?=$name.'őőő'?></h1>
</body>
</html>