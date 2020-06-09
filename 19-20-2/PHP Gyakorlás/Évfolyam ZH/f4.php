<?php
session_start();
if(isset($_GET["val"])){
    if($_GET["val"] == "1"){
        $_SESSION["num"] = "1" . $_SESSION["num"];
    }else if($_GET["val"] == "0"){
        $_SESSION["num"] = "0" . $_SESSION["num"];
    }else if($_GET["val"] == "r"){
        $_SESSION["num"] = "";
    }
    echo $_SESSION["num"] . ", " . bindec($_SESSION["num"]);
}