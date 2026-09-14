<?php

function redirect($target) {
    header("Location: $target");
    die; // mivel a header location nem állítja le a script futását, nekünk meg kell ezt még tenni
}