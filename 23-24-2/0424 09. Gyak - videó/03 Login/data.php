<?php

$users = [
    (object)[
        'uname' => 'Gergo',
        // Peti123
        'pword' => '$2y$10$c06dfPWgkW.OTSDHkMBa2efd1tf9qzrjfIlH4yseg8MHkTrl/ZKny',
        'background' => 'red'
    ],
    (object)[
        'uname' => 'Áron',
        // Laura123
        'pword' => '$2y$10$yt/M3XK768aFsIc1hSg8EOslnpUWTKU2sbYvHROGplnvoRHX5AgUi',
        'background' => 'blue'
    ]
];

function get_user($uname){
    $users = [
        (object)[
            'uname' => 'Gergo',
            // Peti123
            'pword' => '$2y$10$c06dfPWgkW.OTSDHkMBa2efd1tf9qzrjfIlH4yseg8MHkTrl/ZKny',
            'background' => 'red'
        ],
        (object)[
            'uname' => 'Áron',
            // Laura123
            'pword' => '$2y$10$yt/M3XK768aFsIc1hSg8EOslnpUWTKU2sbYvHROGplnvoRHX5AgUi',
            'background' => 'blue'
        ]
    ];
    foreach($users as $user){
        if($user->uname == $uname){
            return $user;
        }
    }
    return null;
}
