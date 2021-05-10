<?php

var_dump(preg_match('/[a][l][m][a]/', 'almafa'));
var_dump(preg_match('/[alma]/', 'pirosalma'));
var_dump(preg_match('/[alma]/', 'körte'));
var_dump(preg_match('/[alma]/', 'almási'));
var_dump(preg_match('/[alma]/', 'valalma'));
var_dump(preg_match('/[alma]/', 'asd alma asd asd'));
var_dump(preg_match('/[alma]/', 'm'));
var_dump(preg_match('/[a][l][m][a]/', 'm'));

$string = 'Almafa123,.';
var_dump(preg_match('/[a-z]/', $string));
var_dump(preg_match('/[A-Z]/', $string));
var_dump(preg_match('/[0-9]/', $string));
var_dump(preg_match('/[*-+=%!\.,]/', $string));

?>