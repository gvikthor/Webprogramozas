<?php
// echo uniqid();
function get_person($id) {
    // képzeljük el, hogy ez egy adatbázisból jön
    $people = (object)[
        '6af1f08d56825' => (object) [ 'name' => 'George', 'age' => 30, 'has_cat' => false ],
        '6af1f092f3354' => (object) [ 'name' => 'Patrik', 'age' => 26, 'has_cat' => true ],
        '6af1f09745352' => (object) [ 'name' => 'Benji', 'age' => 28, 'has_cat' => false ],
        '6af1f09c58452' => (object) [ 'name' => 'Petra', 'age' => 27, 'has_cat' => true ]
    ];

    return $people->$id;
}
//var_dump($_GET);
//var_export($_GET);

$userid = $_GET['userid'] ?? null;
if(is_null($userid)) {
    echo 'userid is required';
    die;
}

$person = get_person($userid);

?>

<body>
    <h1><?= $person->name ?></h1>
    <div>
        <p>Age: <?= $person->age ?></p>
        <p>This person <?= $person->has_cat ? 'has' : "doesn't have" ?> cat.</p>
    </div>
</body>
