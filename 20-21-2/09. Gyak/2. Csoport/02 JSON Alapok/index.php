<?php
require_once('filekezeles.php');

$emberek = jsonBeolvas("adatok.json");

var_dump($emberek);

$emberek[0]->nev = "Péter";

jsonKiir("adatok.json", $emberek);