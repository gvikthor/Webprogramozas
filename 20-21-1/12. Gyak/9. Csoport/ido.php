<?php

sleep(3);

if(isset($_GET['kotojel'])){
    echo date('H-i-s');
}else if(isset($_POST['pont'])){
    echo date('H.i.s');
}else{
    echo date('H:i:s');
}
