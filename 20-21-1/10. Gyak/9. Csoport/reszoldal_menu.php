<?php function menu(){ ?>
<style>
    #menu form{
        display: inline-block;
    }
    #menu input{
        background: lightblue;
    }
</style>
<div id="menu">
    <form action="kijelentkez.php" method="post">
        <input type="submit" value="Kijelentkez">
    </form>
    <form action="index.php">
        <input type="submit" value="Főoldal">
    </form>
    <form action="ujfilm.php">
        <input type="submit" value="Új film">
    </form>
</div>

<?php } ?>