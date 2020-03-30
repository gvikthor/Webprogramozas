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
                "nev" => "Obi-Wan Kenobi",
                "neptun" => "H3LL0T",
                "email" => "hellothere@jedi.cr",
                "nem" => "f"
            ],
            [
                "nev" => "Padmé Amidala",
                "neptun" => "4N4K1N",
                "email" => "padme@corusant.gov",
                "nem" => "n"
            ],
            [
                "nev" => "Éva",
                "neptun" => "ABC123",
                "email" => "eva@email.hu",
                "nem" => "n"
            ],
            [
                "nev" => "Anita",
                "neptun" => "CBA321",
                "email" => "anita@emial.hu",
                "nem" => "n"
            ],
            [
                "nev" => "Béla",
                "neptun" => "123ABC",
                "email" => "bela@email.hu",
                "nem" => "f"
            ]
        ];

        $ffi = 0;
        $no = 0;

        function nemToSzin($nem){
            if($nem == "f") return "lightblue";
            if($nem == "n") return "pink";
            return "white";
        }

        function contains($miben, $mit){
            return strpos($miben, $mit) !== false;
        }
    ?>

    <form><input name="kereses"><input type="submit"></form>
    <table>
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
        </tr>
        <?php foreach($hallgatok as $hallgato): ?>
            <?php if(!isset($_GET["kereses"]) || trim($_GET["kereses"]) == "" || contains(strtolower($hallgato["nev"]),strtolower(trim($_GET["kereses"])))): ?>
                <tr style="background-color: <?=nemToSzin($hallgato["nem"])?>;">
                    <td><?=$hallgato["nev"]?></td>
                    <td><?=$hallgato["neptun"]?></td>
                    <td><?=$hallgato["email"]?></td>
                </tr>

                <?php 
                    if($hallgato["nem"] == "f"){
                        $ffi++;
                    }else{
                        $no++;
                    }
                ?>
            <?php endif ?>
        <?php endforeach ?>
    </table>

    <br>

    <div style="background-color: <?=nemToSzin("f")?>; width: <?=($ffi/($ffi+$no))*100?>%;">A férfiak száma: <?=$ffi?></div>
    <div style="background-color: <?=nemToSzin("n")?>; width: <?=($no/($ffi+$no))*100?>%;">A nők száma: <?=$no?></div>
</body>
</html>