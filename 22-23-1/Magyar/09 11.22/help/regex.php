<?php

var_dump( preg_match('/[a-z]/', 'alma') );
var_dump( preg_match('/[a-z]/', 'áőüüöóöü') );
var_dump( preg_match('/[a-zöüóőúéáűíä]/', 'áőüüöóöü') );
var_dump( preg_match('/[a-z]/', 'ALMA') );
var_dump( preg_match('/[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ]/', 'Ű43567465') );
var_dump( preg_match('/^[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ]+/', '5alma') );
var_dump( preg_match('/[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ]+$/', 'alma5') );
var_dump( preg_match('/^[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ0-9]+$/', '@lma5') );
