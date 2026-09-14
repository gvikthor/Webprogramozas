<?php function navMenu($current_page, $is_logged_in) { ?>
    <style>
        .current {
            font-weight: bold;
            color: #13294B;
        }
    </style>
    <nav>
        <a href="index.php" class="<?= $current_page == 'index' ? 'current' : '' ?>">Home</a>
        <?php if($is_logged_in): ?>
            <a href="page-addgame.php" class="<?= $current_page == 'addgame' ? 'current' : '' ?>">Add game</a>
            <a href="auth-logout.php">Logout</a>
        <?php else: ?>
            <a href="page-login-register.php" class="<?= $current_page == 'loginregister' ? 'current' : '' ?>">Login/Register</a>
        <?php endif ?>
    </nav>
<?php } // nincs endfunction, csak kapcsoszárójel ?>