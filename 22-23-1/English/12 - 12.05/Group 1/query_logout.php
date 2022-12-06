<?php
require_once 'functions.php';
session_start();
auth_logout_user();
redirect('index.php');
