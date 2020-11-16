<?php

session_start();
require_once('adatkezeles.php');

like($_GET['id'], $_SESSION['username']);
header('Location: index.php');