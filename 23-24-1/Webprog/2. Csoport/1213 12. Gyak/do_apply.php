<?php
session_start();
require_once 'functions.php';
login_guard('page_login.php');

$user_id = get_user_id_by_uname($_SESSION['user']);
$tender_id = $_GET['tender_id'] ?? '';

apply_to_tender($tender_id, $user_id);

redirect('index.php');