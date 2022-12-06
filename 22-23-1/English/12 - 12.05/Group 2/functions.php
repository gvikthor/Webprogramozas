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

/**
 * Checks if a given string matches the username criteria of only a-z A-Z 0-Z characters.
 * @param string $uname The username to check.
 */
function regex_username($uname){
    return preg_match('/^[a-zA-Z0-9]+$/',$uname);
}

/**
 * Checks if a given string matches the password criteria of atleast one a-z and A-Z and 0-9 and (# or @) character.
 * @param string $pword The password to check.
 */
function regex_password($pword){
    return preg_match('/[a-z]/',$pword) &&
           preg_match('/[A-Z]/',$pword) &&
           preg_match('/[0-9]/',$pword) &&
           preg_match('/[#@]/',$pword);
}

/**
 * Checks if all the elements in an array are inside another array.
 * @param Array $needles The elements to check.
 * @param Array $haystack The base of the elements to check in.
 */
function array_in_array($needles, $haystack){
    foreach($needles as $needle){
        if(!in_array($needle, $haystack)) return false;
    }
    return true;
}

/**
 * Read a JSON file and converts the content to and Array or an Object.
 * @param string $filename The name of the JSON file with the extension.
 * @param bool|null $associative [optional] When TRUE, returned objects will be converted into associative arrays.
 * @return (Array|Object) Depending on the content of the JSON file, an Array or an Object of the data that was inside.
 */
function json_read($filename, $associative = false){
    return json_decode(file_get_contents($filename), $associative);
}

/**
 * Write an Array or Object into a JSON file. It OVERWRITES the content of the file.
 * @param string $filename The name of the JSON file with the extension.
 * @param (Array|Object) $data The data to be converted to string.
 */
function json_write($filename, $data){
    file_put_contents($filename,json_encode($data, JSON_PRETTY_PRINT));
}

/**
 * Adds a user to the database with hashed password an unique ID.
 * @param Object $user The user to add.
 * @return Number The ID of the newly registered user.
 */
function auth_register_user($user){
    $users = json_read('data/users.json');
    $max = -1;
    foreach($users as $user_max){
        if($user_max->id > $max) $max = $user_max->id;
    }
    $new_id = $max + 1;
    $user->id = $new_id;
    $user->pword = password_hash($user->pword1, PASSWORD_DEFAULT);
    $user->pword1 = $user->pword2 = '';
    $users->$new_id = $user;
    json_write('data/users.json', $users);

    return $new_id;
}

/**
 * Tells whether the user a user is already logged in or not using a session.
 * @return bool Is anyone logged in?
 */
function auth_is_logged_in(){
    $user = $_SESSION['user'] ?? '';
    return trim($user) != '';
}

function get_user_by_username($uname){
    $users = json_read('data/users.json');
    foreach($users as $user){
        if($user->uname == $uname) return $user;
    }
    return null;
}

/**
 * 
 */
function auth_password_verify($uname, $pword){
    $user = get_user_by_username($uname);
    if($user == null) return false;
    return password_verify($pword, $user->pword);
}

/**
 *  Checks if a user already exists in the database with the given name.
 */
function user_exists($uname){
    $users = json_read('data/users.json');

    // Linear search for the user
    $found = false;
    foreach($users as $user){
        if(strtolower($uname) == strtolower($user->uname)){
            $found = true;
            break;
        }
    }
    return $found;
}

/**
 * 
 */
function user_id_exists($user_id){
    $users = json_read('data/users.json');
    return isset($users->$user_id);
}

/**
 * 
 */

function user_likes_movie($user_id, $movie_id){
    if(!user_id_exists($user_id)) return false;

    $user = json_read('data/users.json')->$user_id;
    return in_array($movie_id, $user->movies);
}

/**
 * 
 * 
 */
function get_all_movies(){
    return json_read('data/movies.json');
}

/**
 * 
 */
function make_user_like_movie($user_id, $movie_id){
    if(!user_id_exists($user_id)) return false;

    $users = json_read('data/users.json');
    $users->$user_id->movies[] = $movie_id;
    json_write('data/users.json', $users);
}

/**
 * 
 */
function make_user_dislike_movie($user_id, $movie_id){
    if(!user_id_exists($user_id)) return false;

    $users = json_read('data/users.json');
    $movies = [];
    foreach($users->$user_id->movies as $movie){
        if($movie != $movie_id) $movies[] = $movie;
    }
    $users->$user_id->movies = $movies;
    json_write('data/users.json', $users);
}


/**
 * Checks if the movies are in our database
 */
function movies_exsist($movies){
    $all_movies = array_map(function ($param){
        return $param['id'];
    }, json_read('data/movies.json', true));
    return array_in_array($movies, $all_movies);
}

/**
 * 
 */
function is_admin($user_id){
    return in_array($user_id, json_read('data/admins.json'));
}

/**
 * 
 * 
 */
function add_movie($movie){
    $movies = json_read('data/movies.json');
    $new_id = $movie->id;
    $movies->$new_id = $movie;
    json_write('data/movies.json', $movies);
}