<?php
/*
function felhasznaloLetezik($fnev){
    $felhasznalok = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok;
    return isset($felhasznalok->$fnev);
}

function jelszoEgyezik($fnev, $jelszo){
    $felhasznalo = json_decode(file_get_contents("felhasznalok.json"))->felhasznalok->$fnev;
    return password_verify($jelszo, $felhasznalo->jelszo);
}

function regisztralFelhasznalo($fnev,$jelszo){
    $adatok = json_decode(file_get_contents("felhasznalok.json"));
    $adatok->felhasznalok->$fnev = (object)[
        "jelszo" => password_hash($jelszo, PASSWORD_DEFAULT)
    ];
    file_put_contents("felhasznalok.json",json_encode($adatok,JSON_PRETTY_PRINT));
}*/

function kapcsolodas($cel, $username = '', $password = ''){
    $pdo = new PDO($cel, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}
function lekerdez($pdo, $sql, $param = []){
    $utasitas = $pdo->prepare($sql);
    $utasitas->execute($param);
    return $utasitas->fetchAll();
}

function felhasznaloLetezik($fnev){
    $kapcsolat = kapcsolodas("sqlite:userInfo.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT * FROM `users` WHERE uname = :uname",
        [ "uname" => $fnev ]
    );
    return count($eredmeny) != 0;
}

function jelszoEgyezik($fnev, $jelszo){
    $kapcsolat = kapcsolodas("sqlite:userInfo.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT * FROM `users` WHERE uname = :uname",
        [ "uname" => $fnev ]
    );
    return password_verify($jelszo, $eredmeny[0]["password"]);
}

function regisztralFelhasznalo($fnev,$jelszo){
    $kapcsolat = kapcsolodas("sqlite:userInfo.db");
    lekerdez(
        $kapcsolat,
        "INSERT INTO `users` (`uname`,`password`) VALUES (:uname, :password)",
        [
            "uname" => $fnev,
            "password" => password_hash($jelszo, PASSWORD_DEFAULT)
        ]
    );
}

function leiras($fnev){
    $kapcsolat = kapcsolodas("sqlite:userInfo.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "SELECT * FROM `users` WHERE uname = :uname",
        [ "uname" => $fnev ]
    );
    return $eredmeny[0]["desc"];
}

function leirasFrissit($fnev, $leiras){
    $kapcsolat = kapcsolodas("sqlite:userInfo.db");
    $eredmeny = lekerdez(
        $kapcsolat,
        "UPDATE `users` SET desc = :desc WHERE uname = :uname",
        [ 
            "uname" => $fnev,
            "desc" => $leiras
        ]
    );
}