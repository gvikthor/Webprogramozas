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
                'nev' => 'Elizabeth Swann',
                'neptun' => 'K4P1TN',
                'email' => 'swann@gmail.com',
                'nem' => 'n'
            ],
            [
                'nev' => 'Han Solo',
                'neptun' => 'CWB4K4',
                'email' => 'shotfirst@gmail.com',
                'nem' => 'f'
            ],
            [
                'nev' => 'Thor',
                'neptun' => 'THNDR5',
                'email' => 'asgard@gmail.com',
                'nem' => 'f'
            ],
            [
                'nev' => 'Tony Stark',
                'neptun' => '$$$$$$',
                'email' => 'money@gmail.com',
                'nem' => 'f'
            ],
            [
                'nev' => 'II. Erzsébet',
                'neptun' => 'IMMRTL',
                'email' => 'england@gmail.com',
                'nem' => 'n'
            ]
        ];

        function szin($nem){
            if($nem == 'f') return 'green';
            if($nem == 'n') return 'pink';
            return 'white';
        }

        function contains($str,$resz){
            return strpos($str,$resz) !== false;
        }

        $ffi = 0;
        $no = 0;
    ?>

    <form> <input name="kereses"> <input type="submit"> </form>

    <table>
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
        </tr>
        <?php foreach($hallgatok as $hallgato): ?>
            <?php if(!isset($_GET['kereses']) || contains($hallgato['nev'],$_GET['kereses'])): ?>
                <tr style="background-color: <?= szin($hallgato['nem']) ?>;">
                    <td><?=$hallgato['nev']?></td>
                    <td><?=$hallgato['neptun']?></td>
                    <td><?=$hallgato['email']?></td>
                <tr>
            <?php endif ?>
        <?php endforeach ?>
    </table>
</body>
</html>