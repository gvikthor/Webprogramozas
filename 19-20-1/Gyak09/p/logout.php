<?php

session_start();

if(isset($_POST["logout"])){
    session_destroy();
    session_abort();
}

header("Location: index.php");
?>