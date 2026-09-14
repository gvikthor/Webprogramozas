<?php
require_once 'functions.php';

echo json_encode(new_storage('data/games')->findAll());