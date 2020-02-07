<?php

session_start();
require("adatkezeles.php");
ujdal($_GET["cim"],$_GET["film"],$_GET["eloado"],$_SESSION["uname"]);
header("Location: index.php");

?>