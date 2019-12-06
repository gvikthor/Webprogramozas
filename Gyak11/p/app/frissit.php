<?php
    session_start();
    require_once("adatkezeles.php");

    if(isset($_POST['frissit'])){

        frissit($_SESSION['uname'],$_POST['leiras']);
        $_SESSION['leiras'] = leiras($_SESSION['uname']);
        header("Location: index.php");

    }else{
        header("Location: index.php");
    }

?> 