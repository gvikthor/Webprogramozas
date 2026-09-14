<?php
session_start();
$_SESSION['kiscica'] = 1;

//ez a redirect függvény, ha lenne itt
header("Location: example-index.php");
die;
