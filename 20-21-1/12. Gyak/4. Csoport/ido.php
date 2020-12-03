<?php 
if(isset($_GET['varakoz']) && $_GET['varakoz'] == 'igen'){
    sleep(5);
}

if(isset($_POST['varakoz']) && $_POST['varakoz'] == 'igen'){
    sleep(1);
}

echo date('H:i:s');