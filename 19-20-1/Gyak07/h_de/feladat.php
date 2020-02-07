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

            $ffi = 0;
            $no = 0;
    ?>

    <style>
        table, th, tr, td{
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
    <table>
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
            <th>Nem</th>
        </tr>
        <?php foreach($hallgatok as $hallgato): ?>
            <tr>
                <td><?=$hallgato["nev"]?></td>
                <td><?=$hallgato["neptun"]?></td>
                <td><?=$hallgato["email"]?></td>
                <?php if($hallgato["nem"] == "f"): ?>
                    <td>férfi</td> <?php $ffi++; ?>
                <?php else: ?>
                    <td>nő</td> <?php $no++; ?>
                <?php endif ?>
            </tr>
        <?php endforeach ?>
    </table>
    <?php
        $ffiarany = ($ffi / ($ffi+$no))*100;
        $noarany = ($no / ($ffi+$no))*100;
    ?>
    <div style="background: blue; width: <?=$ffiarany?>%;">Férfiak <?=$ffiarany?>%</div>
    <div style="background: pink; width: <?=$noarany?>%;">Nők <?=$noarany?>% <br></div>
</body>
</html> 