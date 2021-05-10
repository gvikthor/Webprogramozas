<?php
require_once "fuggvenyek.php";

session_start();
if(isset($_SESSION["nev"]) && isset($_GET['id']) && isset($_GET['like'])){
    if($_GET['like'] == 'igen'){
        tetszik($_SESSION["nev"], $_GET["id"]);
    }else{
        nemtetszik($_SESSION["nev"], $_GET["id"]);
    }
}
atiranyit("index");

?>

like.php