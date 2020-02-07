<?php
require("data.php");
session_start();
 
if(isset($_POST["update"])){
    update($_SESSION["uname"],$_POST["desc"]);
    $_SESSION["udata"] = data($_SESSION["uname"]);
    header("Location: index.php");
}else{
    header("Location: index.php");
}

?>