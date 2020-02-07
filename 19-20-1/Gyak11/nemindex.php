<?php

if(isset($_GET["param"])):
    echo $_GET["param"] . ' ' . date('G:i:s');
elseif(isset($_POST["param"])):
    echo $_POST["param"] . ' ' . date('G:i:s');
else:
    echo date('G:i:s');
endif

?>