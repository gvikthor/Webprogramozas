<?php

session_start();
$aktArany = intval($_SESSION['arany']);
$aktEzust = intval($_SESSION['ezust']);

$arany = intval($_GET['arany']);
$ezust = intval($_GET['ezust']);
$szorzo = intval($_GET['szorzo']);

$valasz = [
    'valtozott' => false
];

if($arany > 0 || $ezust > 0){
    $aktArany += $szorzo * $arany;
    $aktEzust += $szorzo * $ezust;

    $aktArany += intval($aktEzust / 12); // nincs div operátor, de ez megoldja
    $aktEzust = $aktEzust % 12; //mod operátor viszont van

    if($aktEzust < 0){
        $aktArany += intval($aktEzust / 12) - 1;  //az első tag negatív
        $aktEzust = 12 + $aktEzust; //aktezust negatív
    }

    if($aktArany >= 0 && $aktEzust >= 0){
        $valasz = [
            'valtozott' => true,
            'ido' => date('Y.m.d. H:i:s'),
            'arany' => $aktArany,
            'ezust' => $aktEzust
        ];
        $_SESSION['arany'] = $aktArany;
        $_SESSION['ezust'] = $aktEzust;
    }
}


echo json_encode($valasz);