<?php

//sleep(5);

if(isset($_GET['kotojel']) && $_GET['kotojel'] == 'igen'){
    echo Date('H-i-s');
}else if(isset($_POST['szokoz']) && $_POST['szokoz'] == 'igen'){
    echo Date('H i s');
}else{
    echo Date('H:i:s');
}

