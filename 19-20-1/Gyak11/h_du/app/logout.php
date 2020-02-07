<?php
    session_start();
    if(isset($_POST["logout"])){
        session_unset();
        session_destroy();
    }
    header("Location: index.php");
?>