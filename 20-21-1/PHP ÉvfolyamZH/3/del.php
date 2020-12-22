<?php
require_once('lib.php');
$storage = new JsonStorage('data.json');
$storage->delete($_GET['id']);
header('location: index.php');