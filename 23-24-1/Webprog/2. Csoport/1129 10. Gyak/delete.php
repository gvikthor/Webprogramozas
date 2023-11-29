<?php
require_once 'functions.php';

// létezik ez az id?
// be van jelentkezve?
// admin?
// szabad törölni ezt a user?

storage('data')->delete($_GET['id'] ?? '');

redirect('index.php');