<?php
function redirect($target){
    header("Location: $target");
    die;
}

function validate_credentials($uname, $pword){
    return $uname == 'gerg0' && $pword == 'almafa123';
}

function isEmptyString($value){
    return strlen($value) == 0;
}

function pull_session_var($attribute, $default){
    $result = $_SESSION[$attribute] ?? $default;
    $_SESSION[$attribute] = $default;
    return $result;
}
function login_guard($attribute = 'user'){
    if(isset($_SESSION[$attribute])){
        redirect('index.php');
    }
}