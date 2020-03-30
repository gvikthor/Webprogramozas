<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $hallgatok = [
            [
                "nev" => "Chris Pratt",
                "neptun" => "STRLRD",
                "email" => "star@lord.com",
                "nem" => "f"
            ],
            [
                "nev" => "Rey",
                "neptun" => "SW7890",
                "email" => "rey@jakku.com",
                "nem" => "n"
            ],
            [
                "nev" => "Alma",
                "neptun" => "ALMA12",
                "email" => "alma@alma.hu",
                "nem" => "f"
            ],
            [
                "nev" => "Barack",
                "neptun" => "OBAMA8",
                "email" => "barack@gov.us",
                "nem" => "f"
            ],
            [
                "nev" => "Leia",
                "neptun" => "HANSLO",
                "email" => "organa@gov.ald",
                "nem" => "n"
            ]
        ];

        function szinez($nem){
            if($nem == "f") return "lightblue";
            if($nem == "n") return "pink";
            return "white";
        }

        $ffi = 0;
        $no = 0;

        function contains($string,$reszlet){
            return strpos($string,$reszlet) !== false;
        }
    ?>

    <form><input name="szuro"><input type="submit"></form>
    <table>
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
        </tr>
        <?php foreach($hallgatok as $hallgato): ?>
            <?php if(!isset($_GET["szuro"]) || trim($_GET["szuro"]) == "" || contains(strtolower($hallgato["nev"]),strtolower(trim($_GET["szuro"])))): ?>
                <tr style="background-color: <?=szinez($hallgato['nem'])?>;">
                    <td><?=$hallgato['nev']?></td>
                    <td><?=$hallgato['neptun']?></td>
                    <td><?=$hallgato['email']?></td>
                </tr>

                <?php
                    if($hallgato['nem'] == 'n'){
                        $no++;
                    }else{
                        $ffi++;
                    }
                ?>
            <?php endif ?>
        <?php endforeach ?>
    </table>
    <br>
    <div style="background-color: <?=szinez('n')?>; width: <?=($no/($no+$ffi))*100?>%;">A nők száma: <?=$no?></div>
    <div style="background-color: <?=szinez('f')?>; width: <?=($ffi/($no+$ffi))*100?>%;">A férfiak száma: <?=$ffi?></div>
</body>
</html>