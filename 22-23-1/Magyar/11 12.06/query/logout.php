<?php
include_once 'functions.php';
session_start();
user_logout();
redirect('../index.php');
