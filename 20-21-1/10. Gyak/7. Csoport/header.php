<?php
function aloldalak($oldalnevek){
    foreach($oldalnevek as $oldalnev){
        require_once('aloldal_' . $oldalnev . '.php');
    }
}
require_once('adatkezeles.php');
session_start();
$bejelentkezve = isset($_SESSION['fnev']);