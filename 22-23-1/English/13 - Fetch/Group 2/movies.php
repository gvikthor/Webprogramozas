<?php
    $movies = json_decode(file_get_contents('movies.json'));
?>
<ul>
    <?php foreach($movies as $movie): ?>
        <li><?=$movie->title?> (<?=$movie->release?>)</li>
    <?php endforeach ?> 
</ul>