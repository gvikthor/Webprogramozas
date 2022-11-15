<?php
    //var_dump(include 'asd.php');
    include_once 'functions.php';

    // Pages
    include_once 'pages/movies.php';



    $logged_in = true; // Ezt majd átírjuk másik gyakorlaton
    if(!$logged_in) redirect('auth.php');

    //header('Location: something.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Awesome page</h1>
    <?php page_movies('famous') ?>
</body>
</html>