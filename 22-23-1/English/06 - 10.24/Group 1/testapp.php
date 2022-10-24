<?php

/*
2 points
Create an array with (object) people, who have names and gender.
List the people into a table and color the male rows blue, the female rows green.
*/



$payments = [
    200,
    600,
    8000,
    700,
    1500,
    200,
    4500,
    900,
    100,
    100,
    100
];

function countBelow1000($array){
    $cnt = 0;
    foreach($array as $elem){
        if($elem < 1000){
            $cnt++;
        }
    }
    return $cnt;
}

$below1000 = countBelow1000($payments);
$over1000 = count($payments) - $below1000;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #below{
        background-color: lightcyan;
        width: <?=($below1000/count($payments))*100?>%;
    }
    #over{
        background-color: greenyellow;
        width: <?=($over1000/count($payments))*100?>%;
    }
</style>
<body>
    <ul>
        <li id="below">Payed below 1000: <?=$below1000?></li>
        <li id="over">Payed 1000 or more: <?=$over1000?></li>
    </ul>
</body>
</html>