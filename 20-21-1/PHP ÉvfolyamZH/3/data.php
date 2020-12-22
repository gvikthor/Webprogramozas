<?php
require_once('lib.php'); // Nem volt muszáj storage osztállyal csinálni, de megkönnyítette.
$storage = new JsonStorage('data.json');

$data = [
    'nev'=> $_GET['nev'],
    'ertek'=> floatval($_GET['ertek']),
    'szin'=> $_GET['szin'],
    'megtart'=> $_GET['megtart'] == 'i'
];

$temp = $storage->findOne(['nev' => $_GET['nev']]);
if($temp == NULL){
    $data['id'] = $storage->add($data);
    $storage->update($data['id'], $data);
}else{
    $data['id'] = $temp['id'];
    $storage->update($data['id'], $data);
}


header('location: index.php');