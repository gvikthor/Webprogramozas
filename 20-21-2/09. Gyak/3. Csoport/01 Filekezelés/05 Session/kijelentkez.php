<?php
require_once('fuggvenyek.php');

session_start();
session_unset();
session_destroy();

atiranyit("index");