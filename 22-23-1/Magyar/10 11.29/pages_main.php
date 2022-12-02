<?php

$PAGES = (object)[
    'auth' => (object)[
        'login' => function (){
            include_once 'pages/auth.php';
            page_auth_login();
        },
        'register' => function (){
            include_once 'pages/auth.php';
            page_auth_register();
        }
    ],
    'errors' => (object)[
        'errors' => function ($errors){
            include_once 'pages/errors.php';
            page_errors($errors);
        }
    ],
    'movies' => (object)[
        'movies' => function ($filter = ''){
            include_once 'pages/movies.php';
            page_movies($filter);
        }
    ],
    'nav' => (object)[
        'language' => function(){
            include_once 'pages/nav.php';
            page_language_selector();
        }
    ]
];