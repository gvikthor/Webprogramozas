<?php
    session_start();
    if(isset($_GET["feltolt"])){
        require("adatkezeles.php");
        kepfeltolt($_SESSION["uname"],explode(" ",$_GET["tagek"]),$_GET["link"]);
        //header("Location: index.php");
    }else{
        header("Location: index.php");
    }
?>