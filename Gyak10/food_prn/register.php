<?php
    session_start();
    require_once("adatkezeles.php");

    if(isset($_POST['register'])){

        if(!letezik($_POST['uname'])){

            if(strlen($_POST['uname']) > 4 && preg_match("/^[a-zA-Z0-9áíűőüöúóéÁÍÜŐÜÖÚÓÉ]*$/",$_POST['uname'])){

                if($_POST["pw1"] == $_POST["pw2"]){
                    
                    if(strlen($_POST['pw1']) > 7 && (preg_match("/[a-z]/",$_POST['pw1']) && preg_match("/[A-Z]/",$_POST['pw1']) && preg_match("/[0-9]/",$_POST['pw1']) )){
                            
                        if(preg_match("/^[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/",$_POST['bankkartya_szam'])){
                            if(preg_match("/^[0-9][0-9]\/[0-9][0-9]$/",$_POST["bankkartya_lejar"])){
                                if(strlen($_POST["bankkartya_nev"]) > 0){
                                    if(preg_match("/^[0-9][0-9][0-9]$/",$_POST["bankkartya_cv"])){
                                        hozaad($_POST['uname'],$_POST['pw1'],$_POST['bankkartya_szam'],$_POST['bankkartya_lejar'],$_POST['bankkartya_nev'],$_POST['bankkartya_cv']);
                                        $_SESSION['uname'] = $_POST['uname'];
                                        header("Location: index.php");
                                    }else{
                                        header("Location: index.php?hiba=register_cardcv");
                                    }
                                }else{
                                    header("Location: index.php?hiba=register_cardname");
                                }
                            }else{
                                header("Location: index.php?hiba=register_carddate");

                            }
                        }else{
                            header("Location: index.php?hiba=register_cardnum");
                        }
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