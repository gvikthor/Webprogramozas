<?php 
require("data.php");
session_start();

if(isset($_POST["register"])){
    if(exists($_POST["uname"])){
        header("Location: index.php?hiba=exists");
    }else{
        if(strlen($_POST["uname"]) > 4){
            if(preg_match("/^[a-zA-Z0-9áíűőüöúóéÁÍŰŐÜÖÚÓÉ]*$/",$_POST["uname"])){
                if($_POST["pword1"] == $_POST["pword2"]){
                    if( strlen($_POST["pword1"]) > 7 &&
                        preg_match("/[a-z]/",$_POST["pword1"]) && 
                        preg_match("/[A-Z]/",$_POST["pword1"]) && 
                        preg_match("/[0-9]/",$_POST["pword1"])
                    ){
                        $_SESSION["udata"] = register($_POST["uname"], $_POST["pword1"], $_POST["desc"], $_POST["link"]);
                        $_SESSION["uname"] = $_POST["uname"];
                        header("Location: index.php");
                    }else{
                        header("Location: index.php?hiba=bad_pword");
                    }
                }else{
                    header("Location: index.php?hiba=two_pword");
                }
            }else{
                header("Location: index.php?hiba=bad_uname");
            }           

        }else{
            header("Location: index.php?hiba=short_uname");
        }
    }
}else{
    header("Location: index.php");
}

?>