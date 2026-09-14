<?php
session_start();
//$_SESSION['kiscica'] = 'miau'; // ezt most csak azért rakom ide, hogy lássuk, valójában bármi jelentheti azt, hogy be vagyunk jelentkezve.
$_SESSION['user'] = 'ABC123'; // például egy neptun kód

// ez ugye a redirect függvény
header('Location: index.php');
die;