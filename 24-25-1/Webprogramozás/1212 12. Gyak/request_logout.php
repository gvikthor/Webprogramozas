<?php
require_once 'support_fuggvenyek.php';

session_start();
session_unset();
session_destroy();
atiranyit('index.php');