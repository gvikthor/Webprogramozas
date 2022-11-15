<?php

/**
 * Redirects you to the page specified in the paramneter, then stops the script that was running.
 * @param string $page The page you want to go to.
 */
function redirect($page){
    header('Location: ' . $page);
    die;
}

/**
 * Checks if a POST attribute with given name exists.
 * @param string $param_name The name of the POST attribute.
 */
function post_exists($param_name){
    return key_exists($param_name, $_POST) && strlen(trim($_POST[$param_name])) > 0;
}

function post_array_exists($param_names){
    foreach($param_names as $param_name){
        if(!post_exists($param_name)) return false;
    }
    return true;
}

/**
 * Checks if a GET attribute with given name exists.
 * @param string $param_name The name of the GET attribute.
 */
function get_exists($param_name){
    return key_exists($param_name, $_GET) && strlen(trim($_GET[$param_name])) > 0;
}