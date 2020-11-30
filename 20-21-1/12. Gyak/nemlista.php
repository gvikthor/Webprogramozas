<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$adatok = [
    [
        "nev"=> "Suts Mordekaiser",
        "kor"=> 20,
        "id"=> "5fbbc71d5fd65"
    ],
    [
        "nev"=> "Danna Márta",
        "kor"=> 21,
        "id"=> "5fbbc7591558c"
    ]
];

if(isset($_POST['modosit']) && $_POST['modosit'] == 'igen'){
    $adatok[0]['nev'] = 'Suts Medve';
}

echo json_encode($adatok);