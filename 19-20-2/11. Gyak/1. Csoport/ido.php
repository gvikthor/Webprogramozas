<?php
if(isset($_POST["cica"]) && $_POST["cica"] == "startrek"){
    echo date('G/i/s');
}else if(isset($_GET["alma"]) && $_GET["alma"] == "starwars"){
    echo date('G-i-s');
}else{
    echo date('G:i:s');
}
