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

/**
 * Checks if the given string matches the username criteria: only English letters and numbers.
 * @param string $uname The username to check.
 */
function regex_username($uname){
    return preg_match('/^[a-zA-Z0-9]+$/', $uname);
}

/**
 * Checks if the given string matches the password criteria: 
 * At least one:
 * - uppercase letter
 * - lowercase letter
 * - number
 * - special character: # @ $ %
 * @param string $pword The password to check.
 */
function regex_pword($pword){
    return preg_match('/[a-z]/', $pword) &&
           preg_match('/[A-Z]/', $pword) &&
           preg_match('/[0-9]/', $pword) &&
           preg_match('/[\#\@\$\%]/', $pword);
}

/**
 * Checks if all the needles are in the haystack.
 * @param Array $needles The elemenets that we are unsure about.
 * @param Array $haystack The elements that we are looking in.
 */
function array_every_array($needles, $haystack){
    foreach($needles as $needle){
        if(!in_array($needle, $haystack)) return false;
    }

    return true;
}

/**
 * Reads the contents of a JSON file and returs them according to the file (object or array).
 * @param string $filename The name of the JSON file with extension.
 * @return (Array|Object) Result might be either an array or an object depending on the contwnts fo the file.
 */
function json_read($filename){
    return json_decode(file_get_contents($filename));
}

/**
 * Turns and array or object to a string and puts it as content into a JSON file. The file content is OVERWRITTEN!
 * @param string $filename The name of the JSON file with extension.
 * @param (Array|Object) $data The data to be put into the JSON file. Can either be an Array or an Object.
 */
function json_write($filename, $data){
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
}

/////////////////////////////////////////////////////////
// Auth functions //

function auth_register_user($user){
    $users = json_read('data/users.json');
    //$user[] = $user; if the data were only an array not an object with ids
    $max = -1;
    foreach($users as $max_user){
        if($max_user->id > $max) $max = $max_user->id;
    }
    $new_id = $max + 1;
    $user->id = $new_id;
    $users->$new_id = $user;
    json_write('data/users.json', $users);
}