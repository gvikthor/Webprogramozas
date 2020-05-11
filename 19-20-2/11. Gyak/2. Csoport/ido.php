<?php
if(isset($_POST["korte"]) && $_POST["korte"] == "startrek"){
    echo date('G / i / s');
}else if(isset($_GET["alma"]) && $_GET["alma"] == "starwars"){
    echo date('G - i - s');
}else{
    echo date('G:i:s');
}