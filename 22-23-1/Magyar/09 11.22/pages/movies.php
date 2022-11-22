<?php function get_movies($filter){
    return ['Star Wars', 'Lord of the Rigns', 'Twighlight'];
} // end get_movies ?>

<?php function page_movies($filter = ''){ ?>
    <?php $movies = get_movies($filter) ?>
    <h2>Filmek</h2>
    <ul>
        <?php foreach($movies as $movie): ?>
            <li><?=$movie?></li>
        <?php endforeach ?>
    </ul>
<?php } // end page_movies ?>