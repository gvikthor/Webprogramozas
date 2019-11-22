<?php

require("data.php");

session_start();

if(isset($_POST["login"])){
    if(exists($_POST["uname"])){
        if(pword($_POST["uname"],$_POST["pword"])){
            $_SESSION["uname"] = $_POST["uname"];
            $_SESSION["udata"] = data($_POST["uname"]);
            header("Location: index.php");
        }else{   
            header("Location: index.php?hiba=pw_incorrect");
            //exit();
        }
    }else{
        header("Location: index.php?hiba=no_user");
        //exit();
    }
}else{
    header("Location: index.php");
}

?>