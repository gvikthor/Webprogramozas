<?php
    session_start();
    require("adatkezeles.php");
    if($_GET["type"] == "like"){
        removeDislike($_SESSION["uname"],$_GET["cim"]);
        like($_SESSION["uname"],$_GET["cim"]);
    }else{
        removeLike($_SESSION["uname"],$_GET["cim"]);
        dislike($_SESSION["uname"],$_GET["cim"]);
    }
    header("Location: index.php");
?>