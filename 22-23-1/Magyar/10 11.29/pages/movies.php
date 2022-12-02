<?php include_once 'functions.php' ?>

<?php function get_movies(){
    return json_read('data/movies.json');
} // end get_movies ?>

<?php function page_movies($liked_movies){ ?>
    <?php
        function likes_movie($movie, $liked_movies){
            return in_array($movie->id, $liked_movies);
        }
    ?>
    <?php $movies = get_movies() ?>
    <h2>Filmek</h2>
    <ul>
        <?php foreach($movies as $movie): ?>
            <li><?=$movie->title?> <?=likes_movie($movie, $liked_movies) ? '👍' : '<a href="query/like_movie.php?id='.$movie->id.'">👍🏾</a>'?></li>
        <?php endforeach ?>
    </ul>
<?php } // end page_movies ?>