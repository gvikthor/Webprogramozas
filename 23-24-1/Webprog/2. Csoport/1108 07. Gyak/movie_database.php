<?php

function get_all_movies(){
    return [
        (object)[ 'title' => 'The Shawshank Redemption', 'year' => 1994, 'cast' => ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'], 'image' => 'https://picsum.photos/1000/200' ],
        (object)[ 'title' => 'The Godfather', 'year' => 1972, 'cast' => ['Marlon Brando', 'Al Pacino', 'James Caan'], 'image' => 'https://picsum.photos/1000/200'  ],
        (object)[ 'title' => 'The Godfather: Part II', 'year' => 1974, 'cast' => ['Al Pacino', 'Robert Duvall', 'Diane Keaton'], 'image' => 'https://picsum.photos/1000/200'  ],
        (object)[ 'title' => 'The Dark Knight', 'year' => 2008, 'cast' => ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'], 'image' => 'https://picsum.photos/1000/200'  ]
    ];
}

function get_movie_by_id($id){
    return get_all_movies()[$id];
}