<?php require_once 'storage.php' ?>

<?php function subpage_movies($logged_in){ ?>
    <?php
        $movies_db = new JsonStorage('movies.json');
        $movies = $movies_db->findAll();
    ?>
    <table>
        <tr>
            <th>Title</th>
            <th>Release</th>
            <?php if($logged_in): ?>
                <th>Edit</th>
                <th>Delete</th>
            <?php endif ?>
        </tr>
        <?php foreach($movies as $movie): ?>
            <tr>
                <td><?=$movie['title']?></td>
                <td><?=$movie['release']?></td>
                <?php if($logged_in): ?>
                    <th><a href="edit.php?id=<?=$movie['id']?>">✏️</a></th>
                    <th><a href="request_delete.php?id=<?=$movie['id']?>">🚯</a></th>
                <?php endif ?>
            </tr>
        <?php endforeach ?>
        <?php if($logged_in): ?>
        <form action="request_newmovie.php">
        <tr>
            <td><input name="title"></td>
            <td><input name="release"></td>
            <td><input type="submit" value="➕"></td>
        </tr>
        </form>
        <?php endif ?>
    </table>
<?php } //endfunction subpage_movies ?>