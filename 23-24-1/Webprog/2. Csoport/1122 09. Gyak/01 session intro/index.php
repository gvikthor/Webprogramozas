









<?php
session_start();
$_SESSION['apple'] = 'red';
$_SESSION['animal'] = (object)[
    'species' => 'cat',
    'isAlive' => true
];
var_dump($_SESSION);