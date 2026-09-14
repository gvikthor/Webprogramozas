<?php
    $username = 'Gergő';
    $a = 5;
    $b = 7;

    $people = ['Gergő', 'Áron', 'Máté', 'Peti'];
?>
<body>
    Hello <?= $username ?>!
    <br>
    Összefűzés: <?= $a . $b ?> <br>
    Összeadás: <?= $a + $b ?> <br>

    Mivel nincs console.log, máshogy kell megnéznünk a tömböket.
    Erre való a var_dump, ami nem visszaadja az eredményét,
    hanem kiírja oda ahol a függvény megvan hívva
    (tehát nem ?= kell, hanem sima php tag) <br>
    <?php var_dump($people) ?> <br>

    <ul>
    <?php
    for($i = 0; $i < count($people); $i++) {
        echo '<li>'.$people[$i].'</li>';
    }
    ?>
    </ul>

    <ul>
    <?php
    foreach($people as $person) {
        echo '<li>'.$person.'</li>';
    }
    ?>
    </ul>

    <ul>
    <?php foreach($people as $person): ?>
        <li><?= $person ?></li>
    <?php endforeach ?>
    </ul>
</body>