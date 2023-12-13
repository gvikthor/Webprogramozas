<?php
session_start();
require_once 'functions.php';
logout();
redirect('page_login.php');