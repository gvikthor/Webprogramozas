<?php
require_once('Storage.php');

function redirect($target){
    header("Location: $target");
    die;
}

function check_user_credentials($uname, $pword){
    return $uname == 'alma' && $pword == 'almafa123';
}

function new_storage($filename){
    return new Storage(new JsonIO("$filename.json"), false);
}