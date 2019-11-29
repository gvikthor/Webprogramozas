<?php
    session_start();
    require_once("adatkezeles.php");

    if(isset($_POST['register'])){

        if(!letezik($_POST['uname'])){

            if(strlen($_POST['uname']) > 4 && preg_match("/^[a-zA-Z0-9áíűőüöúóéÁÍÜŐÜÖÚÓÉ]*$/",$_POST['uname'])){

                if($_POST["pw1"] == $_POST["pw2"]){
                    
                    if(strlen($_POST['pw1']) > 7 && (preg_match("/[a-z]/",$_POST['pw1']) && preg_match("/[A-Z]/",$_POST['pw1']) && preg_match("/[0-9]/",$_POST['pw1']) )){
                        hozaad($_POST['uname'],$_POST['pw1'],$_POST['leiras']);
                        $_SESSION['uname'] = $_POST['uname'];
                        $_SESSION['leiras'] = $_POST['leiras'];
                        header("Location: index.php");
                    }else{
                        header("Location: index.php?hiba=register_pw");
                    }
                }else{
                    header("Location: index.php?hiba=register_pw_nomatch");
                }
            }else{
                header("Location: index.php?hiba=register_uname");
            }
        }else{
            header("Location: index.php?hiba=register_letezik");
        }
    }else{
        header("Location: index.php");
    }
?> 