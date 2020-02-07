<?php
    session_start();
    if(isset($_GET["like"])){
        require("adatkezeles.php");
        echo "Like: ".$_GET["id"];
        like($_SESSION["uname"],$_GET["id"]);
        header("Location: index.php");
    }else{
        header("Location: index.php");
    }
?>