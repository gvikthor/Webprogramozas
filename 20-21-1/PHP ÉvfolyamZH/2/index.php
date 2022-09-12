<?php

    $hibak = [];

    function goblinHelyes($gob){
        return is_numeric($gob) &&
            floatval($gob) == intval($gob) && //Az is_integer csak azt mondja meg, hogy a típusa int-e, de a GET paraméterek típusa mindig string! Ezért azt nézem, hogy az egész és a float értéke megegyezik-e (mert akkor egész szám).
            intval($gob) > 0;
    }

    function rangHelyes($chief){
        $darabolva = explode(' ',$chief);
        if(count($darabolva) < 2) return 'Érvénytelen vezető!';

        $rang = end($darabolva);
        if(!in_array($rang, ['goblinka', 'kisfőnök', 'nagyfőnök', 'főfőnök', 'törzsfő'])) return 'Érvénytelen rang!';
        if($rang != 'nagyfőnök' && $rang != 'főfönök' && $rang != 'törzsfő') return 'Túl alacsony rang!';

        return 'OK';
    }

    function asoHelyes($aso){
        return is_numeric($aso) &&
            floatval($aso) == intval($aso) && //Hasonlóan, mint fentebb.
            intval($aso) >= 0;
    }

    $validGoblins = false;
    if(!isset($_GET['goblins']) || !goblinHelyes($_GET['goblins'])) $hibak[] = 'Érvénytelen goblin mennyiség!';
    else $validGoblins = true;

    if(!isset($_GET['chief'])) $hibak[] = 'Érvénytelen vezető!';
    elseif(rangHelyes($_GET['chief']) != 'OK') $hibak[] = rangHelyes($_GET['chief']);

    if(!isset($_GET['shovels']) || !asoHelyes($_GET['shovels'])) $hibak[] = 'Érvénytelen ásó mennyiség!';
    elseif($validGoblins && intval($_GET['goblins']) > intval($_GET['shovels'])) $hibak[] = 'Túl kevés ásó!';

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2. feladat</title>
</head>
<body>
  <h1>2. feladat</h1>

  <h2>Üzenetek</h2>
    <?php if(count($hibak) > 0): ?>
        <ul>
            <?php foreach($hibak as $hiba): ?>
                <li><?=$hiba?></li>
            <?php endforeach ?>
        </ul>
    <?php elseif(2*intval($_GET['goblins']) <= intval($_GET['shovels'])): ?>
        Gyorsan megszerezzük a kincset!
    <?php else: ?>
        Indulhat az akció!
    <?php endif ?>

  <h2>Próbalinkek</h2>
  <a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7"><pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php"><pre>index.php</pre></a>
  <a href="index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám"><pre>index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám</pre></a>
  <a href="index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10</pre></a>
</body>
</html>