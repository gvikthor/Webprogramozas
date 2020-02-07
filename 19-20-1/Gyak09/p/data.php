<?php

function exists($uname){
    return isset(json_decode(file_get_contents("data.json"))->users->$uname);
}

function data($uname){
    return json_decode(file_get_contents("data.json"))->users->$uname->udata;
}

function pword($uname, $pword){
    return password_verify($pword, json_decode(file_get_contents("data.json"))->users->$uname->password);
}

function register($uname, $pword, $desc, $link){
    $data = json_decode(file_get_contents("data.json"));
    $data->users->$uname = (object)[
        "password" => password_hash($pword,PASSWORD_DEFAULT),
        "udata" => (object)[
            "desc" => $desc,
            "img" => $link
        ]
    ];
    file_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));
    return $data->users->$uname->udata;
}

function update($uname, $desc){
    $data = json_decode(file_get_contents("data.json"));
    $data->users->$uname->udata->desc = $desc;
    file_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));
}

?>