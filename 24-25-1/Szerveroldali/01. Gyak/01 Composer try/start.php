<?php
require_once 'vendor/autoload.php';

$faker = Faker\Factory::create();
echo $faker->name() . PHP_EOL;
echo $faker->email() . PHP_EOL;
echo $faker->text() . PHP_EOL;