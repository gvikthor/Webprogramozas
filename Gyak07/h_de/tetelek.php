<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $ossz = [2,6,3,65,87,45,342,64,45,52,765];
        $ossz_ered = 0;
        $keres = ['alma','korte','szilva','barack'];

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
                'nev'=> 'Jack Sparrow',
                'neptun'=> 'KKKKKK',
                'email'=> 'gyongy2@ik.etel.hu',
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

    <h1>Összegzés</h1>
    <?php foreach($ossz as $elem): ?>
        Aktuális elem: <?=$elem?> <br>
        <?php $ossz_ered += $elem; ?>
    <?php endforeach ?>
    Az összeg: <?=$ossz_ered?>

    <h1>Keresés</h1>
    <form action="tetelek.php" method="post">
        Név: <input name="keresese_ertek">
        <input type="submit">
    </form>
    <?php
    if(isset($_POST["keresese_ertek"])){
        $keres_talalt = false;
        $keres_i = 0;
        while($keres_i < count($keres) && !$keres_talalt){
            $keres_talalt = ($keres[$keres_i] == $_POST["keresese_ertek"]);
            $keres_i++;
        }
        if($keres_talalt){
            ?> Van ilyen elem <?php
        }else{
            ?> Nincs ilyen elem <?php
        }
    }
    ?>

    <h1>Hallgatók</h1>
    <form action="tetelek.php" method="post">
        Tulajdonság:
        <select name="tul">
            <option value="nev">Név</option>
            <option value="neptun">Neptun</option>
            <option value="email">E-mail cím</option>
            <option value="nem">Nem</option>
        </select>
        Érték: <input name="keresese_ertek">
        <input type="submit">
    </form>
    <?php
    $ffi = 0;
    $no = 0;
    if(isset($_POST["keresese_ertek"]) && isset($_POST["tul"])){
        $h_tomb = [];
        $h_i = 0;
        while($h_i < count($hallgatok)){
            if($hallgatok[$h_i][$_POST["tul"]] == $_POST["keresese_ertek"]){
                $h_tomb[] = $hallgatok[$h_i];
            };
            $h_i++;
        }
    }
    ?>
    <table>
        <tr>
            <th>Név</th>
            <th>Neptun</th>
            <th>E-mail</th>
            <th>Nem</th>
        </tr>
        <?php foreach($h_tomb as $hallgato): ?>
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