<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8"><title>Document</title>
</head>
<body>

<style>
        table, td, th, tr{
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
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
                'neptun'=> 'CHWBK4',
                'email'=> 'shotfirst@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Han Solo',
                'neptun'=> 'CHWBK4',
                'email'=> 'shotfirst@ik.etel.hu',
                'nem'=> 'f'
            ],
            [
                'nev'=> 'Han Solo',
                'neptun'=> 'CHWBK4',
                'email'=> 'shotfirst@ik.etel.hu',
                'nem'=> 'n'
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
                'nem'=> 'n'
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
    <form action="valami.php" method="post">
        <input name="keresesi">
        <input type="submit">
    </form>

    <?php if(!isset($_POST["keresesi"])): ?>
        <table>
            <tr>
                <th>Név</th>
                <th>Neptun</th>
                <th>E-mail</th>
                <th>Nem</th>
            </tr>
            <?php
                $ffi = 0;
                $no  = 0;
            ?>

            <?php foreach($hallgatok as $hallgato): ?>
                <tr>
                    <td><?=$hallgato["nev"]?></td>
                    <td><?=$hallgato["neptun"]?></td>
                    <td><?=$hallgato["email"]?></td>
                    <td>
                        <?php if($hallgato["nem"] == "f"): ?>
                            férfi
                            <?php $ffi++ ?>
                        <?php else: ?>
                            nő
                            <?php $no++ ?>
                        <?php endif ?>
                    </td>
                </tr>
            <?php endforeach ?>
        </table>

        <?php
            $ffisz = ($ffi/($ffi+$no))*100;
            $nosz = ($no/($ffi+$no))*100;
        ?>

        <div style="width: <?=$nosz?>%; background-color: pink;">Nők száma: <?=$no?></div>
        <div style="width: <?=$ffisz?>%; background-color: blue;">Férfiak száma: <?=$ffi?></div>

    <?php else: ?>
        <table>
            <tr>
                <th>Név</th>
                <th>Neptun</th>
                <th>E-mail</th>
                <th>Nem</th>
            </tr>
            <?php
                $ffi = 0;
                $no  = 0;
            ?>

            <?php foreach($hallgatok as $hallgato): ?>
                <?php if($hallgato["nev"] == $_POST["keresesi"]): ?>
                <tr>
                    <td><?=$hallgato["nev"]?></td>
                    <td><?=$hallgato["neptun"]?></td>
                    <td><?=$hallgato["email"]?></td>
                    <td>
                        <?php if($hallgato["nem"] == "f"): ?>
                            férfi
                            <?php $ffi++ ?>
                        <?php else: ?>
                            nő
                            <?php $no++ ?>
                        <?php endif ?>
                    </td>
                </tr>
                <?php endif ?>
            <?php endforeach ?>
        </table>

        <?php
            $ffisz = ($ffi/($ffi+$no))*100;
            $nosz = ($no/($ffi+$no))*100;
        ?>

        <div style="width: <?=$nosz?>%; background-color: pink;">Nők száma: <?=$no?></div>
        <div style="width: <?=$ffisz?>%; background-color: blue;">Férfiak száma: <?=$ffi?></div>

    <?php endif ?>
</body>
</html>