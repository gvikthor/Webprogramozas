<?php

$emberek = [
    [
        "id" => "asDqWe",
        "nev" => "Nándor",
        "infok" => [
            "szuletesiHely" => "Debrecen",
            "kedvencGyumolcs" => "paradicsom",
            "jatek" => "LoL"
        ]
    ],
    [
        "id" => "RTZFGH",
        "nev" => "Áron",
        "infok" => [
            "szuletesiHely" => "Érd",
            "kedvencGyumolcs" => "uborka",
            "jatek" => "Borderlands"
        ]
    ],
    [
        "id" => "YXCASD",
        "nev" => "Gergő",
        "infok" => [
            "szuletesiHely" => "11.ker",
            "kedvencGyumolcs" => "barack",
            "jatek" => "Civilization"
        ]
    ]
];

function isSelected($emberParameter){
    if(isset($_GET["ember"]) && strtolower(trim($_GET["ember"])) == strtolower(trim($emberParameter["id"]))){
        return "checked";
    }else{
        return "";
    }
}

?>
<body>
    <form>
        <?php foreach($emberek as $ember): ?>
            <input type="radio" name="ember" value="<?=$ember["id"]?>" <?=isSelected($ember)?>> <?=$ember["nev"]?> <br>
        <?php endforeach ?>
        <input type="submit">
    </form>

    <?php
        if(isset($_GET["ember"])){
            $emberIndex = 0;
            while($emberIndex < count($emberek) && strtolower(trim($emberek[$emberIndex]["id"])) != strtolower(trim($_GET["ember"]))){
                $emberIndex++;
            }

            if($emberIndex < count($emberek)){
                echo "Név: " . $emberek[$emberIndex]["nev"] . "<br>";
                echo "Születési hely: " . $emberek[$emberIndex]["infok"]["szuletesiHely"] . "<br>";
                echo "Kedvenc gyümölcs: " . $emberek[$emberIndex]["infok"]["kedvencGyumolcs"] . "<br>";
                echo "Kedvenc játék: " . $emberek[$emberIndex]["infok"]["jatek"];
            }else{
                echo "Nem találtuk meg a keresett embert.";
            }
        }else{
            echo "Adj meg egy embert.";
        }
    ?>
</body>