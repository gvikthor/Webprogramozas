<?php

$tablazat = [
    [
        "nev" => "Valaki",
        "gyumolcs" => "paradicsom",
        "szin" => "piros"
    ],
    [
        "nev" => "Béla",
        "gyumolcs" => "uborka",
        "szin" => "zöld"
    ],
    [
        "nev" => "József",
        "gyumolcs" => "narancs",
        "szin" => "naracs"
    ]
];

function stringBenneVan($string, $keres){
    return strpos($string, $keres) !== false;
}

?>


<body>
    <form>
        <input name="keresokifejezes" value="<?php if(isset($_GET["keresokifejezes"])){ echo $_GET["keresokifejezes"]; }?>">
        <input type="submit">
    </form>
    <table>
        <tr>
            <th>Név</th>
            <th>Kedvenc gyümölcs</th>
            <th>Kedvenc szín</th>
        </tr>
        <?php foreach($tablazat as $ember): ?>
            <?php if(
                !isset($_GET["keresokifejezes"]) ||
                $_GET["keresokifejezes"] == ""   ||
                stringBenneVan($ember["nev"],$_GET["keresokifejezes"])      ||
                stringBenneVan($ember["gyumolcs"],$_GET["keresokifejezes"]) ||
                stringBenneVan($ember["szin"],$_GET["keresokifejezes"])
            ): ?>
                <tr>
                    <td><?=$ember["nev"]?></td>
                    <td><?=$ember["gyumolcs"]?></td>
                    <td><?=$ember["szin"]?></td>
                </tr>
            <?php endif?>
        <?php endforeach ?>
    </table>

</body>