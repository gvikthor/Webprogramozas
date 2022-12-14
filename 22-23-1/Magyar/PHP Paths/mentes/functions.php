<?php

function read_file_direct($prefix){
    echo($prefix . file_get_contents('data/something.txt') . '<hr>');
}

function read_file_parent($prefix){
    echo($prefix . file_get_contents('../data/something.txt') . '<hr>');
}