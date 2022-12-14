<?php
//include_once '../functions.php';
include_once 'functions.php';

include_once 'include_me.php'; // az ékezetes mappanévnél az include gyökérből indul


read_file_direct('request.php direct: ');
read_file_parent('request.php parent: ');


// Redirect: próbáld ki, hogy egyiket, aztán másikat szeded ki a kommentből

//header('Location: index.php'); die; // ez nem fog lefutni, hibát dob
//header('Location: ../index.php'); die; // ez lefut, visszairányít