<?php function nav_menu($current_page, $is_logged_in = false){ ?>
    <style>
        .current {
            font-weight: bold;
            color: #13294B;
        }
    </style>
    <nav>
        <a href="index.php" class="<?= ($current_page=='index') ? 'current' : '' ?>">Home</a>
    <?php if($is_logged_in): ?>
        <a href="page-newgame.php" class="<?= ($current_page=='newgame') ? 'current' : '' ?>">Add game</a>
        <a href="datahandling-logout.php">Logout</a>
    <?php else: ?>
        <a href="page-authentication.php" class="<?= ($current_page=='authentication') ? 'current' : '' ?>">Login/Register</a>
    <?php endif ?>
    </nav>
<?php } // nav_menu ?>