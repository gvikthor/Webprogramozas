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
            <li>
                <?php $L = likes_movie($movie, $liked_movies) ?>
                <a href="movie.php?id=<?=$movie->id?>"><?=$movie->title?></a>
                <a href="query/<?=$L?'dis':''?>like_movie.php?id=<?=$movie->id?>"><?=$L?'😍':'🙂'?></a>
            </li>
        <?php endforeach ?>
    </ul>
<?php } // end page_movies ?>