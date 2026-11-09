<?php
// echo uniqid();

function get_preson_by_id($id) {
    // elképzeljük, hogy ez egy db hívást csinál
    $people = (object)[
        '6af20a077813d' => (object)['name' => 'Peter', 'age' => 28],
        '6af20a0f7d065' => (object)['name' => 'Petra', 'age' => 25],
        '6af20a14387aa' => (object)['name' => 'Patrick', 'age' => 21],
        '6af20a19dfb4b' => (object)['name' => 'Panna', 'age' => 32]
    ];
    return $people->$id;
    //return $people[$id]; ha asszoc. tömb lenne
}

$userid = $_GET['userid'] ?? null;
if(is_null($userid)) {
    echo 'userid is required';
    die;
}

$person = get_preson_by_id($userid);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $person->name ?></h1>
    <div>
        <p>Age: <?= $person->age ?></p>
    </div>
</body>
</html>