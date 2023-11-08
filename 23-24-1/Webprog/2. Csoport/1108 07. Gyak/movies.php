<?php
require_once 'movie_database.php';
$movies = get_all_movies();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
</head>
<body>
    <h1>Movies</h1>
    <!--ul>
    <?php /*foreach($movies as $movie): ?>
        <li><?=$movie->title?></li>
    <?php endforeach */?>
    </ul-->
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Cast</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($movies as $index => $movie): ?>
            <tr>
                <td><a href="movie.php?id=<?=$index?>"><?=$movie->title?></a></td>
                <td><?=$movie->year?></td>
                <td>
                    <ul>
                        <?php foreach($movie->cast as $name): ?>
                            <li><?=$name?></li>
                        <?php endforeach ?>
                    </ul>
                </td>
            </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>