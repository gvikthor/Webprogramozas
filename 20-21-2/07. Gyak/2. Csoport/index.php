<?php


echo 'Alma<br>';

$alma = 'Alma';
$korte = 'Korte';

echo $alma . ' ' . $korte;

echo '<ul><li>' . $alma . '</li><li>' . $korte . '</li></ul>';

////////////////////////////////////////

//Összetett típusok
////Tömb
$tomb = ['alma', 'körte', 5, true, ['valamni', 74], 'vége'];
$tomb[] = 'haha mégse volt vége';

var_dump($tomb);
echo $tomb[0];

echo '<br>';

////Asszociatív tömb
$atomb = [
    'nev' => 'Béla',
    'kor' => 21,
    'férfi' => true
];
$atomb['hajszin'] = 'fekete';

var_dump($atomb);
echo $atomb['nev'];

echo '<br>';

////Objektumok
$obj = (object)[
    'nev' => 'Béla',
    'kor' => 21,
    'férfi' => true
];
$obj->hajszin = 'fekete';

var_dump($obj);
echo $obj->nev;

echo '<br><br>';

////////////////////////////////////////
// Ciklusok

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

echo '<br><br>';

////////////////////////////////////////
// Fügvények

function valami($elso, $masodik){
    return $elso+$masodik;
}
/*function valamirossz(){ ////!!!!!!!!!!!!! nincsenek spagetti függvények
    var_dump($tomb);
}*/
function valami2($tombmasolata){ ////
    var_dump($tombmasolata);
}

echo valami(5,13);

valami2($tomb);
valami2($atomb);
valami2($obj);