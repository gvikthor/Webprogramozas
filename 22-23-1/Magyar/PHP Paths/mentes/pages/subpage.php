<?php

include_once 'functions.php';

function subpage_function($prefix){
    read_file_direct($prefix . 'direct: ');
    read_file_parent($prefix . 'parent: ');
}

read_file_direct('functions.php direct: ');
read_file_parent('functions.php parent: ');