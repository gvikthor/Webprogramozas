<!-- Nézd meg itt: http://webprogramozas.inf.elte.hu/hallgatok/mohmas/Gyak07/bevezeto.php -->

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Webprogramozás</title>
</head>
<body>
        <?php
            echo 'Hello there! <br>'; //echo: kipakolja a html-be közvetlen oda, ahol van azt, ami utána következik

            $nev = 'James T. Kirk'; //nincs let, helyette $ van, de ezt mindig ki kell tenni a változó elé, nem csak deklaráláskor
            echo 'A nevem ' . $nev . ', a USS Enterprise kapitánya. <br>'; // a . az összefűzés, mint javascriptben a + 
            echo "A nevem $nev, a USS Enterprise kapitánya. <br>"; // idézőjelnél be tudjuk simán írni a változót
        ?>

        A nevem <?= $nev ?>, a USS Enterprise kapitánya.<br> <!-- de változót így is kiírhatunk -->
        
        <?php
            echo 'R';
            for($i = 0; $i < 10; $i++){
                if($i % 2 == 0){
                    echo 'e';
                }else{
                    echo 'E';
                }
            }

            /* Tömbök */
            echo '<h1>Tömbök</h1>';
            $tomb = [];
            //$tomb =['elem1', 'elem2', 'elem3')];
            echo $tomb . '<br>';
            var_dump($tomb);//kiírja olvasható, értelmes formában
            echo '<br>';
            echo count($tomb) . '<br>';

            array_push($tomb, 'alma', 'körte', 'szilva');
            var_dump($tomb); echo '<br>';
            $tomb[] = 'barack';
            var_dump($tomb); echo '<br>';
            echo count($tomb) . '<br>';
            echo $tomb[1] . '<br>';

            $tomb2 = [5, 'alma', true];
            var_dump($tomb2); echo '<br>';

            /* Objektumok */
            echo '<h1>Objektumok</h1>';
            $objektum = [
                'nev' => 'Chris Hemsworth',
                'kor' => 1500,
                'isten' => true
            ];
            var_dump($objektum); echo '<br>';
            echo $objektum['nev'] . '<br>';
            $objektum['magassag'] = 190;
            var_dump($objektum); echo '<br>';
            // de ez igazából csak egy asszociatív tömb, a valódi objektum így néz ki:
            $objektum2 = (object)[
                'nev' => 'Tom Hiddleston',
                'kor' => 1500,
                'isten' => true
            ];
            var_dump($objektum2); echo '<br>';
            echo $objektum2->nev . '<br>';
            $objektum2->magassag = 188;
            var_dump($objektum2); echo '<br>';

            /* Függvények */
            echo '<h1>Függvények</h1>';
            function a(){
                echo 'Ez egy nagyon hosszú szöveg amit sokszor ki fogok írni ezért kiszerveztem egy függvénybe';
            }
            a();

            echo '<br>';

            function paros($a){
                return ($a % 2 == 0);
            }
            
            echo paros(2) . '<br>';
            var_dump(paros(2));

            /* Dátumozás */
            echo '<h1>Dátumozás</h1>';
            echo 'Az év: ' . date('Y') . '<br>';
            echo 'Az év: ' . date('y') . '<br>';
            echo 'A hónap: ' . date('M') . '<br>';
            echo 'A hónap: ' . date('m') . '<br>';
            echo 'A nap: ' . date('D') . '<br>';
            echo 'A nap: ' . date('d') . '<br>';
            echo 'A nap: ' . date('l') . '<br>'; //kis L
            echo 'Az óra (24 órás formátum):' . date('H') . '<br>';
            echo 'Az óra (12 órás formátum):' . date('h') . '<br>';
            echo 'A perc: ' . date('i') . '<br>';
            echo 'A másodperc: ' . date('s') . '<br>';
            echo 'Délelőtt/délután: ' . date('a') . '<br>';

            echo 'A mai dátum: ' . date('Ymd') . '<br>';
            echo 'A mai dátum: ' . date('Y:m:d') . '<br>';
            echo 'A mai dátum: ' . date('Y-m-d') . '<br>';
            echo 'A mai dátum: ' . date('Y/m/d') . '<br>';
            echo 'A mai dátum: ' . date('Y/m:d') . '<br>';
            echo 'A mai dátum: ' . date('Y?m(d') . '<br>';
            echo 'A mai dátum: ' . date('Y?m(d') . '<br>';
            echo 'Minden egybe: ' . date('Y. M d. (l) H:i:s');

            /* foreach */
            echo '<h1>Foreach</h1>';
            foreach($objektum as $elem){
                echo $elem . '<br>';
            }
            foreach($objektum as $index => $elem){
                echo $index . ': ' . $elem . '<br>';
            }

            /* HTML szórakozás */
            echo '<h1>HTML Szórakozás</h1>';

            // for-os növelgetés
            echo '<h2>for-os növelgetés</h2>';
            for($i = 0; $i < 10; $i++){
                echo '<p style="font-size:' . (10+$i) . 'px;"> Csodálatos </p>';
            }

            // Lista kiírás
            echo '<h2>Lista kiírás</h2>';
            $lista = array('Minden','epizód','értékes','és','fontos','része','a sorozatnak','és a sorrend','csak ízlés','kérdése','Rogue One');
            
            echo 'A Star Wars filmek legrosszabbtól legjobbig: <ul>';
            for($i = 0; $i < count($lista); $i++){
                echo '<li>' . (10-$i+1) . '.: ' . $lista[$i] . '</li>';
            }
            echo '</ul>';
        ?>
        <!-- Legördülő lista -->
        <h2>Legördülő lista</h2>
        <?php 
            $autok = ['Opel','Citroën','Renault','Tesla'];
            echo '
                Valami kis html bevezető, hogy milyen jó autókat árulunk.<br>
                <select>
            ';
            foreach($autok as $index => $auto){
                echo "<option value=$index>$auto</option>";
            }
            echo '</select><br><br>';
        ?>

        <!-- és most jön egy nagyon csúnya dolog, ami elég hereticnek tűnhet, de igazából szép és okos megoldás, mert nem generálunk ki dinamikusan dolgokat feleslegesen -->
        Valami kis html bevezető, hogy milyen jó autókat árulunk.<br>
        <select>
        <?php foreach($autok as $index => $auto): ?>
            <option value=<?= $index?>><?= $auto ?></option>
        <?php endforeach ?>
        </select>

        <!-- ugyanez a módszer iffel -->
        <?php $logikai = true; ?>
        <div>
            <?php if ($logikai): ?>
                <p>Igaz</p>
            <?php else: ?>
                <p>Hamis</p>
            <?php endif ?>
        </div>

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
            
            $ferfi = 0;
            $no = 0;
        ?>
        <table> 
            <tr><th>Név</th><th>Neptun</th><th>E-mail</th><th>Nem</th><tr>
            <?php foreach($hallgatok as $hallgato):?>
                <tr>
                    <td> <?= $hallgato['nev']    ?> </td>
                    <td> <?= $hallgato['neptun'] ?> </td>
                    <td> <?= $hallgato['email']  ?> </td>

                    <td>
                    <?php if($hallgato['nem'] == 'f'): ?>
                        Férfi <?php $ferfi++ ?>
                    <?php else: ?>
                        Nő <?php $no++ ?>
                    <?php endif ?>
                    </td>
                </tr>
            <?php endforeach ?>
        </table>

        <div>
            <?php
                $ffiSzazalek = ($ferfi/($ferfi+$no))*100;
                $noSzazalek = ($no/($ferfi+$no))*100;
            ?>
            <p style="width: <?= $ffiSzazalek ?>%; background: lightblue;">Férfiak (<?= $ffiSzazalek ?>%)</p>
            <p style="width: <?= $noSzazalek ?>%; background: pink;">Nők (<?= $noSzazalek ?>%)</p>
        </div>
    </body>
</html>
