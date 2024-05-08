<?php
function redirect($target){
    header("Location: $target");
    die;
}

function highlight_array($array, $name = 'var')
{
    highlight_string("<?php\n\$$name =\n" . var_export($array, true) . ";\n?>");
}

////////////

function db_connect($db_file_name, $uname = "root", $pw = ""){
    $db = new PDO("mysql:host=localhost:3307;dbname=$db_file_name", $uname, $pw);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

function db_query($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
    return $query->fetchAll();
}

function db_execute($db, $sql, $params = []){
    $query = $db->prepare($sql);
    $query->execute($params);
}

// DB Queries
function get_all_games(){
    return db_query(
        db_connect('gameapp'),
        'select * from games'
    );
}

function get_game_by_id($id){
    return db_query(
        db_connect('gameapp'),
        'select * from games where id = :id',
        [
            'id' => $id
        ]
    );
}

function add_new_game($title, $description, $year, $imageurl){
    db_execute(
        db_connect('gameapp'),
        'insert into games (title, description, year, imageurl) values (:title, :description, :year, :imageurl)',
        [
            'title' => $title,
            'description' => $description,
            'year' => $year,
            'imageurl' => $imageurl
        ]
    );
}

function delete_game_by_id($id){
    db_execute(
        db_connect('gameapp'),
        'delete from games where id = :id',
        [
            'id' => $id
        ]
    );
}


//

function add_new_user($username, $password, $imageurl){
    db_execute(
        db_connect('gameapp'),
        'insert into users (username, password, imageurl) values (:username, :password, :imageurl)',
        [
            'username' => $username,
            'password' => $password,
            'imageurl' => $imageurl
        ]
    );
}

function check_user_password($username, $password){
    $user = db_query(
        db_connect('gameapp'),
        'select * from users where username = :username',
        [
            'username' => $username
        ]
    )[0] ?? null;

    return !is_null($user) && password_verify($password, $user['password'] ?? '');
}