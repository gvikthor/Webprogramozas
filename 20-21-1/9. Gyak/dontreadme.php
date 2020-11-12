<?php
//Összesen mennyit keresnek azok az emberek, akiknek van kutyájuk?

function 🐕❓($🧑){
    foreach($🧑->🐕🐈 as $🦊){
        if($🦊 == '🐕') return true;
    }
    return false;
}

$🥰 = [
    (object)[
        '🏷️' => 'Szűts Józsi',
        '🐕🐈' => ['🐕'],
        '💲' => 213000
    ],
    (object)[
        '🏷️' => 'Szőrmók Andris',
        '🐕🐈' => [],
        '💲' => 540000
    ],
    (object)[
        '🏷️' => 'Szőrmók Misi',
        '🐕🐈' => ['🐈'],
        '💲' => 213000
    ],
    (object)[
        '🏷️' => 'Dekás Diána',
        '🐕🐈' => ['🐈', '🐕'],
        '💲' => 760000
    ],
    (object)[
        '🏷️' => 'Lakatos Mirella',
        '🐕🐈' => ['🐈'],
        '💲' => 213000
    ]
];

$➕💲 = 0;

foreach($🥰 as $💩){
    if(🐕❓($💩)) $➕💲 += $💩->💲;
}

echo $➕💲;

?>