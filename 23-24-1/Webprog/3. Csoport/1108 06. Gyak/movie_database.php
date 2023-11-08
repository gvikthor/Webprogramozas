<?php
function get_all_movies(){
    return [
        (object)[
            'id' => 1,
            'title' => 'The Shawshank Redemption',
            'year' => 1994,
            'genre' => 'drama',
            'image' => ''
        ],
        (object)[
            'id' => 2,
            'title' => 'The Godfather',
            'year' => 1972,
            'genre' => 'crime',
            'image' => 'https://media.vanityfair.com/photos/615dcfaf3aae1b3c1f41b920/master/pass/the-godfather-site-story.jpg'
        ],
        (object)[
            'id' => 3,
            'title' => 'The Godfather: Part II',
            'year' => 1974,
            'genre' => 'crime',
            'image' => ''
        ],
        (object)[
            'id' => 4,
            'title' => 'The Dark Knight',
            'year' => 2008,
            'genre' => 'action',
            'image' => ''
        ]
    ];
}
function get_movie($id){
    $movies = get_all_movies();
    
    $found = false;
    $elem = null;
    for($i = 0; $i < count($movies) && !$found; $i++){
        if($id == $movies[$i]->id){
            $found = true;
            $elem = $movies[$i];
        }
    }
    return $elem;
}