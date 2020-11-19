<?php function menu(){ ?>
    <style>
        .menu form{
            display: inline-block;
        }
        .menu input{
            background: lightblue;
        }
    </style>
    <div class="menu">
        <form action="kijelentkez.php" method="post">
            <input type="submit" value="Kijelentkez">
        </form>
        <form action="index.php">
            <input type="submit" value="Főoldal">
        </form>
        <form action="ujkarakter.php">
            <input type="submit" value="Új karakter">
        </form>
    </div>
<?php } ?>