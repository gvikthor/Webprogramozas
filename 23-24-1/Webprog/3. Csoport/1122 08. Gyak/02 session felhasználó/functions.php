<?php

function redirect($target){
    header("Location: $target");
    die;
}

function check_user_credentials($uname, $pword){
    return $uname == 'alma' && $pword == 'almafa123';
}