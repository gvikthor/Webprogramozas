<?php
require_once 'functions.php';

$database = sqlite_connect('./data.sqlite');

$all_cities_query = $database->query("SELECT * FROM cities");
$all_cities_result = $all_cities_query->fetchAll();

//var_dump($all_cities_result);
?>
<style>
    td { text-align: center;}
</style>
<body>
    <form method="GET" action="city_create.php">
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
            <?php foreach($all_cities_result as $city): ?>
            <tr>
                <td><?= $city['id'] ?></td>
                <td><?= $city['name'] ?></td>
                <td><?= $city['population'] ?></td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>