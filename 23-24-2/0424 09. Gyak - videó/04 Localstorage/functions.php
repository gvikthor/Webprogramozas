<?php
function highlight_array($array, $name = 'var') {
    highlight_string("<?php\n\$$name =\n" . var_export($array, true) . ";\n?>");
}

function redirect($location = 'index.php'){
    header("Location:$location");
    die;    
}