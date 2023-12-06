<?php
require_once 'functions.php';

new_tender((object)[
    'name' => 'EU28462 - Energetikai korszerűsítés közintézményekre',
    'desc' => 'asdfghjk',
    'img' => '',
    'minister' => null
]);
new_tender((object)[
    'name' => 'EU87469 - Magánszemélyek vállalkozásindítási támogatása',
    'desc' => 'asdfghjk',
    'img' => '',
    'minister' => null
]);

new_user((object)[
    'uname' => 'bgerg0',
    'email' => 'b.gergo@gov.eu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'tenders' => [],
    'is_minister' => true
]);
new_user((object)[
    'uname' => 'miklosipeti',
    'email' => 'm.peter@gov.eu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'tenders' => [],
    'is_minister' => true
]);
new_user((object)[
    'uname' => 'budapest',
    'email' => 'budapest@magyarorszag.gov.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'tenders' => [],
    'is_minister' => false
]);
new_user((object)[
    'uname' => 'ELTE',
    'email' => 'kancellar@elte.hu',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'tenders' => [],
    'is_minister' => false
]);
new_user((object)[
    'uname' => 'aron',
    'email' => 'aron@gmail.com',
    'password' => password_hash('jelszo', PASSWORD_DEFAULT),
    'tenders' => [],
    'is_minister' => false
]);