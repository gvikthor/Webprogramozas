<?php
require_once('fuggvenyek.php');

session_start();
$_SESSION["nev"] = "Vilmos";

atiranyit("index");