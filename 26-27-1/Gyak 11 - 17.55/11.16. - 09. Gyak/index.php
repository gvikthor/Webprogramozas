<?php
require_once 'functions.php';
$min_pop = $_GET['min_pop'] ?? 0;

$db = connect('./data.sqlite');
//$cities = query($db, "SELECT * FROM cities WHERE population >= :min_pop", [ 'min_pop' => $min_pop ]);
$cities = query($db, "SELECT * FROM cities");
?>

<body>
    <form action="city_create.php" method="GET">
        <input name="city_id">
        <input name="city_name">
        <input name="city_population">
        <input name="city_country">
        <input type="submit">
    </form>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($cities as $city): ?>
            <tr>
                <td><?= $city['id'] ?></td>
                <td><?= $city['name'] ?></td>
                <td><?= $city['population'] ?></td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>