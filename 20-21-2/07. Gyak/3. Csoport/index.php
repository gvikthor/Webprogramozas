<?php
/////////////////////////////////////////////////////////////
//Alapok
echo '<h3>Alapok</h3>';
echo 'Luke\'s lightsaber<br>';

$alma = 'Alma';
$szilva = 'Szilva';

echo $alma . ' ' . $szilva . '<br>';

echo '<ul><li>' . $alma . '</li><li>' . $szilva . '</li></ul>';

/////////////////////////////////////////////////////////////
//Tömbök
echo '<h3>Tömb</h3>';
$tomb = [1,7,5,'alma','körte',['alma',567,false],15];
echo $tomb . ' ' . $tomb[0] . '<br>';
var_dump($tomb);

//Asszociatív tömb
echo '<h3>Asszociatív tömb</h3>';
$atomb = [
    'nev' => 'László',
    'kor' => 21,
    'ferfi' => true
];
echo $atomb['nev'] . '<br>';
var_dump($atomb);

//Objektum
echo '<h3>Objektum</h3>';
$obj = (object)[
    'nev' => 'László',
    'kor' => 21,
    'ferfi' => true
];
echo $obj->nev . '<br>';

var_dump($obj);

/////////////////////////////////////////////////////////////
//Ciklus
echo '<h3>Ciklus</h3>';
for($i = 0; $i < count($tomb); $i++){
    echo $tomb[$i] . '<br>';
}

foreach($tomb as $elem){
    echo $elem . '<br>';
}

foreach($tomb as $index => $elem){
    echo $index . ': ' . $elem . '<br>';
}

foreach($atomb as $index => $elem){
    echo $index . ': ' . $elem . '<br>';
}

foreach($obj as $index => $elem){
    echo $index . ': ' . $elem . '<br>';
}

//Függvény
function alma(){
    echo 'Alma';
    return 'Körte';
}

echo alma();

function tombhossz($parameter){
    echo alma() . count($parameter);
}

tombhossz($tomb);