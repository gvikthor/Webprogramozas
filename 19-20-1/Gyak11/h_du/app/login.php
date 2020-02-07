<?php
    session_start();
    require_once("adatkezeles.php");

    if(isset($_POST['login'])){

        if(letezik($_POST['uname']) && jelszo($_POST['uname'],$_POST['pw'])){
            $_SESSION['uname'] = $_POST['uname'];
            $_SESSION['leiras'] = leiras($_POST['uname']);
            header("Location: index.php");
        }else{
            header("Location: index.php?hiba=login_rossz");
        }

    }else{
        header("Location: index.php");
    }

?>