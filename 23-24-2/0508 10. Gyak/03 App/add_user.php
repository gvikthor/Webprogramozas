<?php
die;

require_once 'functions.php';

add_new_user(
    'Peti',
    password_hash('Peti123', PASSWORD_DEFAULT),
    'https://nypost.com/wp-content/uploads/sites/2/2017/04/170404-happy-workers-feature.jpg?quality=75&strip=all'
);