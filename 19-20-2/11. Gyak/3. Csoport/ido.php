<?php
if(isset($_POST["kiskutya"]) && $_POST["kiskutya"] == "startrek"){
    echo date('G/i/s');
}else if(isset($_GET["kiscica"]) && $_GET["kiscica"] =="starwars"){
    echo date('G - i - s');
}else{
    echo date('G:i:s');
}