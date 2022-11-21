<?php

var_dump(preg_match('/[a-z]/', 'apple'));
var_dump(preg_match('/[a-z]/', 'apple78'));
var_dump(preg_match('/[a-z]/', 'Apple78'));
var_dump(preg_match('/[a-z]/', 'APPLE78'));

var_dump(preg_match('/[A-Z]/', 'APPLE'));
var_dump(preg_match('/[A-Z]/', 'apple78'));
var_dump(preg_match('/[A-Z]/', 'APPLE78'));

var_dump(preg_match('/[0-9]/', 'apple'));
var_dump(preg_match('/[0-9]/', 'apple78'));
var_dump(preg_match('/[0-9]/', 'Apple78'));
var_dump(preg_match('/[0-9]/', 'APPLE78'));

var_dump(preg_match('/^[0-9]/', '5apple'));
var_dump(preg_match('/^[0-9]/', 'a5pple'));
var_dump(preg_match('/[0-9]$/', 'apple5'));
var_dump(preg_match('/[0-9]$/', 'a5pple'));

var_dump(preg_match('/^[0-9]$/', '5'));
var_dump(preg_match('/^[0-9]$/', '45'));
var_dump(preg_match('/^[0-9]+$/', '45'));

var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'APPLE'));
var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'apple'));
var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'Apple54'));
var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'Apple 54'));
var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'Apple_54'));
var_dump(preg_match('/^[a-zA-Z0-9]+$/', 'Äpfel54'));



