<?php

$emberek = [
    [
        "id" => "ASDQWE",
        "nev" => "Nándor",
        "infok" => [
            "szuletesiHely" => "Debrecen",
            "kedvencGyumolcs" => "paradicsom",
            "jatekok" => [
                "LoL",
                "Sims"
            ]
        ]
    ],
    [
        "id" => "RTZFGH",
        "nev" => "Áron",
        "infok" => [
            "szuletesiHely" => "Érd",
            "kedvencGyumolcs" => "uborka",
            "jatekok" => [
                "LoL",
                "Borderlands"
            ]
        ]
    ],
    [
        "id" => "YXCASD",
        "nev" => "Gergő",
        "infok" => [
            "szuletesiHely" => "11.ker",
            "kedvencGyumolcs" => "barack",
            "jatekok" => [
                "Civilization",
                "Europa Universalis"
            ]
        ]
    ]
];

function isChecked($ember){
    return isset($_GET[$ember["id"]]) && $_GET[$ember["id"]] == "on";
}

?> 


<body>
    <form>
        <?php foreach($emberek as $ember): ?>
            <input type="checkbox" name="<?=$ember["id"]?>" <?php if(isChecked($ember)):?>checked<?php endif ?>> <?=$ember["nev"]?> <br>
        <?php endforeach ?>
        <input type="submit">
    </form>

    <div>
        <?php foreach($emberek as $ember): ?>
            <?php if(isChecked($ember)): ?>
                <h2>
                    <?=$ember["nev"]?>
                </h2>
                <ul>
                    <li><?=$ember["infok"]["szuletesiHely"]?></li>
                    <li><?=$ember["infok"]["kedvencGyumolcs"]?></li>
                    <li>
                        <?php foreach($ember["infok"]["jatekok"] as $jatek): ?>
                            <?=$jatek?> 
                        <?php endforeach ?>
                    </li>
                </ul>
            <?php endif ?>
        <?php endforeach ?>
    </div>
</body>