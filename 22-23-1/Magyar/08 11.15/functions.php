<?php

/**
 * Redirects the page to the given destination and stops the script.
 * @param string $destination The destination page.
 */
function redirect($destination){
    header('Location: '.$destination);
    die;
}

/**
 * Returns whether the given POST parameter exists and contains data.
 * @param string $attribute_name Name of the POST attribute.
 */
function post_exists($attribute_name){
    return key_exists($attribute_name, $_POST) && strlen(trim($_POST[$attribute_name])) > 0;
}

/**
 * Returns whether the given POST parameters exist and contain data.
 * @param array $attribute_names Names of the POST attributes.
 */
function post_all_exist($attribute_names){
    foreach($attribute_names as $attribute_name){
        if(!post_exists($attribute_name)) return false;
    }
    return true;
}

/**
 * Returns whether the given GET parameter exists and contains data.
 * @param string $attribute_name Name of the GET attribute.
 */
function get_exists($attribute_name){
    return key_exists($attribute_name, $_GET) && strlen(trim($_GET[$attribute_name])) > 0;
}

/**
 * Returns whether the given GET parameters exist and contain data.
 * @param array $attribute_names Names of the GET attributes.
 */
function get_all_exist($attribute_names){
    foreach($attribute_names as $attribute_name){
        if(!get_exists($attribute_name)) return false;
    }
    return true;
}

/**
 * Returns whether the given SESSION parameter exists and contains data.
 * @param string $attribute_name Name of the SESSION attribute.
 */
function session_exists($attribute_name){
    return key_exists($attribute_name, $_SESSION) && strlen(trim($_SESSION[$attribute_name])) > 0;
}

/**
 * Returns whether the given SESSION parameter exists and contains data and is an array.
 * @param string $attribute_name Name of the SESSION attribute.
 */
function session_array_exists($attribute_name){
    return key_exists($attribute_name, $_SESSION) && count($_SESSION[$attribute_name]) > 0;
}