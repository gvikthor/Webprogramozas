<?php

var_dump( preg_match('/[a-z]/','apple78') );
var_dump( preg_match('/[a-z]/','APPLE78') );
var_dump( preg_match('/[A-Z]/','APPLE78') );
var_dump( preg_match('/[a-zA-Z]/','APPLE78') );
var_dump( preg_match('/[a-zöüóőúéáűíäA-ZÖÜÓŐÚÉÁŰÍÄ]/','ä78') );
var_dump( preg_match('/[a-zA-Z0-9]/','Apple78') );
var_dump( preg_match('/[a-zA-Z0-9]/','$÷¨#6)(|') );
echo '<hr>';
var_dump( preg_match('/^[a-zA-Z0-9]/','apple') );
var_dump( preg_match('/^[a-zA-Z0-9]/','äpple') );
var_dump( preg_match('/[a-zA-Z0-9]$/','apple') );
var_dump( preg_match('/[a-zA-Z0-9]$/','applë') );
var_dump( preg_match('/^[a-zA-Z0-9]+$/','$÷¨#6)(|') );
var_dump( preg_match('/^[a-zA-Z0-9]+$/','appleabcd23456APPLE456775soMeThiNg') );
var_dump( preg_match('/^[a-zA-Z0-9]+$/','appleabcd23456APPüLE456775soMeThiNg') );
echo '<hr>';
var_dump(
    preg_match('/[a-z]/','apple78') &&
    preg_match('/[A-Z]/','apple78') &&
    preg_match('/[0-9]/','apple78') &&
    preg_match('/[#@]/','apple78')
);
var_dump(
    preg_match('/[a-z]/','@ppLe75őúűóüpűőé') &&
    preg_match('/[A-Z]/','@ppLe75őúűóüpűőé') &&
    preg_match('/[0-9]/','@ppLe75őúűóüpűőé') &&
    preg_match('/[#@]/','@ppLe75őúűóüpűőé')
);