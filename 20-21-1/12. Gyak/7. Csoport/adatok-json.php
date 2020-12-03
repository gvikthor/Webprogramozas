<?php 

$_POST = json_decode(file_get_contents('php://input'), true);

$diakok = [
    [
        'nev' => 'Danka Dénes Ausztrália',
        'ora' => 45,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    [
        'nev' => 'Broncó Lajos Palindrom',
        'ora' => 30,
        'feladatkor' => 'logisztikai feladatok',
        'besorolas' => 'operatív'
    ],
    [
        'nev' => 'Gereblyés Vilmos Agathachristie',
        'ora' => 35,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    [
        'nev' => 'Agancsos Milán',
        'ora' => 25,
        'feladatkor' => 'vidékfejlesztés',
        'besorolas' => 'operatív'
    ],
    [
        'nev' => 'Ingecelős Orella',
        'ora' => 40,
        'feladatkor' => 'általános ügyek',
        'besorolas' => 'adminisztratív'
    ],
    [
        'nev' => 'Szuncsernyák Iván Mordekaiser',
        'ora' => 35,
        'feladatkor' => 'vidékfejlesztés',
        'besorolas' => 'operatív'
    ],
    [
        'nev' => 'Hentes Gabriella',
        'ora' => 30,
        'feladatkor' => 'fordítás',
        'besorolas' => 'adminisztratív'
    ],
    [
        'nev' => 'Foltos Zalán',
        'ora' => 35,
        'feladatkor' => 'logisztikai feladatok',
        'besorolas' => 'operatív'
    ],
    [
        'nev' => 'Felegés Erika',
        'ora' => 60,
        'feladatkor' => 'ügyfélregisztráció',
        'besorolas' => 'adminisztratív'
    ]
];

if(isset($_POST['extra']) && $_POST['extra'] == 'igen'){
    $diakok[] = [
        'nev' => 'Burmási Misi',
        'ora' => 20,
        'feladatkor' => 'podcast',
        'besorolas' => 'operatív',
    ];
}

echo json_encode($diakok);