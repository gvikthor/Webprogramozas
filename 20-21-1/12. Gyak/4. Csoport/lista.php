<?php
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

?>

<ul>
    <?php foreach($adatok as $adat): ?>
        <li><?=$adat['nev']?>(<?=$adat['kor']?>)</li>
    <?php endforeach ?>
</ul>