<?php

require_once('adatkezeles.php');

session_start();

if(felhasznaloLetezik($_POST['fnev']) && jelszoEgyezik($_POST['fnev'],$_POST['jszo'])){
    $_SESSION['fnev'] = $_POST['fnev'];
    header('Location: index.php');
}else{
    header('Location: index.php?hiba=rosszlogin');
}