<?php

$adat = file_get_contents("alma.txt");

var_dump($adat);

//Ne felejts el write jogot adni az alma.txt file-ra
file_put_contents("alma.txt", "Felhős időnk van, esni fog.");