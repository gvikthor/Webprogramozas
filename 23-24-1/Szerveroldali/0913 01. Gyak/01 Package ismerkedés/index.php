<?php
require_once 'vendor/autoload.php';

// use the factory to create a Faker\Generator instance
$faker = Faker\Factory::create();
// generate data by calling methods
echo $faker->name() . PHP_EOL;
// 'Vince Sporer'
echo $faker->email() . PHP_EOL;
// 'walter.sophia@hotmail.com'
echo $faker->text() . PHP_EOL;
// 'Numquam ut mollitia at consequuntur inventore dolorem.'