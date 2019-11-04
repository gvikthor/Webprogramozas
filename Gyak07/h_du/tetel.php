<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $hallgatok = [
            [
                'nev'=> 'Han Solo',
                'neptun'=> 'CHWBK4',
                'email'=> 'shotfirst@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Han Solo',
                'neptun'=> 'LEIA69',
                'email'=> 'shotfirst2@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Padmé Amidala',
                'neptun'=> 'S00S4D',
                'email'=> 'diplomata@ik.etel.hu',
                'nem'=> 'n'
            ],
            [
                'nev'=> 'Harry Potter',
                'neptun'=> 'DEDPRT',
                'email'=> 'hedwig@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Tony Stark',
                'neptun'=> '$$$$$$',
                'email'=> 'betterthanbatman@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Francis Underwood',
                'neptun'=> 'US4U5A',
                'email'=> 'somuchpower@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Sheev Palpatine',
                'neptun'=> '3MP1RE',
                'email'=> 'unlimitedpower@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Jack Sparrow',
                'neptun'=> 'KP1TNY',
                'email'=> 'gyongy@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Elizabeth Swann',
                'neptun'=> 'K4PT4N',
                'email'=> 'kalozkiraly@ik.etel.hu',
                'nem'=> 'n'
            ]
        ];
    ?>

    <h1>Számlálás</h1>
    <?php
        $ffi = 0;
        $no = 0;
        foreach($hallgatok as $hallgato){
            if($hallgato["nem"] == 'f'){
                $ffi++;
            }else{
                $no++;
            }
        }

        $f_sz = ($ffi / ($ffi+$no)) * 100;
        $n_sz = ($no / ($ffi+$no)) * 100;
    ?>

    <p style="background: blue; width: <?=$f_sz?>%">Férfiak száma: <?=$f_sz?>%</p>
    <p style="background: pink; width: <?=$n_sz?>%">Nők száma: <?=$n_sz?>%</p>

    <style>
        table, tr, th, td{
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
    <form action="tetel.php" method="post">
        <input name="kereses">
        <input type="submit">
    </form>

    <?php if(isset($_POST["kereses"]) && $_POST["kereses"] != ""): ?>
        <table>
            <tr>
                <th>Név</th>
                <th>Neptun-kód</th>
                <th>E-mail cím</th>
                <th>Nem</th>
            </tr>
            <?php foreach($hallgatok as $hallgato): ?>
                <?php if($_POST["kereses"] == $hallgato["nev"]): ?>
                    <tr>
                        <td><?=$hallgato["nev"]?></td>
                        <td><?=$hallgato["neptun"]?></td>
                        <td><?=$hallgato["email"]?></td>
                        <?php if($hallgato["nem"] == "f"): ?>
                            <td>Férfi</td>
                        <?php else: ?>
                            <td>Nő</td>
                        <?php endif ?>
                    </tr>
                <?php endif ?>
            <?php endforeach ?>
        </table>        
    <?php else: ?>
        <table>
            <tr>
                <th>Név</th>
                <th>Neptun-kód</th>
                <th>E-mail cím</th>
                <th>Nem</th>
            </tr>
            <?php foreach($hallgatok as $hallgato): ?>
            <tr>
                <td><?=$hallgato["nev"]?></td>
                <td><?=$hallgato["neptun"]?></td>
                <td><?=$hallgato["email"]?></td>
                <?php if($hallgato["nem"] == "f"): ?>
                    <td>Férfi</td>
                <?php else: ?>
                    <td>Nő</td>
                <?php endif ?>
            </tr>
            <?php endforeach ?>
        </table>
    <?php endif ?>
</body>
</html>