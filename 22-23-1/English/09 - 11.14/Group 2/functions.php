<?php

/**
 * Redirects you to a page and stops the originating script.
 * @param string $page The page you want to redirect the user to.
 */
function redirect($page){
    header('Location: ' . $page);
    die;
}

/**
 * Checks if a parameter with the given name exists with some content in the POST method.
 * @param string $parameter The parameter name you want to check.
 */
function post_exists($parameter){
    return key_exists($parameter, $_POST) && strlen(trim($_POST[$parameter])) > 0;
}

/**
 * Checks if all parameters with the given names exist with some content in the POST method.
 * @param array $parameters The parameter names you want to check.
 */
function post_all_exists($parameters){
    foreach($parameters as $parameter){
        if(!post_exists($parameter)) return false;
    }
    return true;
}

/**
 * Checks if a parameter with the given name exists with some content in the GET method.
 * @param string $parameter The parameter name you want to check.
 */
function get_exists($parameter){
    return key_exists($parameter, $_GET) && strlen(trim($_GET[$parameter])) > 0;
}

/**
 * Checks if all parameters with the given names exist with some content in the GET method.
 * @param array $parameters The parameter names you want to check.
 */
function get_all_exists($parameters){
    foreach($parameters as $parameter){
        if(!get_exists($parameter)) return false;
    }
    return true;
}