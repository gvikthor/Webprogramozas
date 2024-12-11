<?php
session_start();
require_once 'storage.php';
require_once 'fuggvenyek.php';

$post_felhasznalo = [
    'nev' => $_POST['fnev'] ?? '',
    'jelszo' => $_POST['jszo'] ?? ''
];

$felhasznalo = uj_storage('felhasznalok')->findOne(['nev' => $post_felhasznalo['nev']]);

//if($felhasznalo['jelszo'] == $post_felhasznalo['jelszo']){
if(
    password_verify(
        $post_felhasznalo['jelszo'],
        $felhasznalo['jelszo']
    )
){
    $_SESSION['nev'] = $felhasznalo['nev'];
    /*$_SESSION['user'] = [
        'nev' => $felhasznalo['nev'],
        'admin' => $felhasznalo['admin']
    ]*/
}else{
    $_SESSION['hiba'] = 'Helytelen azonosítók!';
}
atiranyit('index');