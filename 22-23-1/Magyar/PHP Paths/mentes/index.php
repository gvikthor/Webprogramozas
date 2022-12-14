<?php
include_once 'functions.php';
include_once 'pages/subpage.php';
read_file_direct('index.php direct: ');
subpage_function('index > subpage_function: ')
?>

<form action="query/request.php">
    <input type="submit" value="Kattints ide, hogy egy query oldalra juss.">
</form>