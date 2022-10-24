<?php

echo('Hello there!!<br>');

$apple = 'Red <b>apple</b> is nice!' . '<br>';
$stuffs = [4,67,8,4,2,'apple',true,['apple',36],896];

var_dump($apple); //variable logging function

echo('<br>');
var_dump($stuffs);
echo('<br>');
var_dump($stuffs[5]);

echo('<br>');
echo($apple);

$animals = ['cat', 'dog', 'parrot'];
$animals[] = 'bear';
$animals['something'] = 5;

for($i = 0; $i < count($animals); $i++){
    echo('-' . $animals[$i] . '<br>');
}

foreach($animals as $animal){
    echo('>' . $animal . '<br>');
}

foreach($animals as $index => $animal){
    echo('>' . $index . ' ' . $animal . '<br>');
}

//while , we have it yes

$associative_array = [
    'name' => 'Myra',
    'age' => 25,
    'pets' => ['cat', 'cat']
];
$associative_array['favColor'] = 'pink';
//echo($associative_array->name);
$associative_array['pets'][] = 'dog';
var_dump($associative_array);

echo('<br><br>');
$object = (object)[
    'name' => 'Myra',
    'age' => 25,
    'pets' => ['cat', 'cat']
];
echo($object->name.'<br>');
//echo($object['name'].'<br>');
$object->favColor = 'red';
var_dump($object);

echo('<br>');

$something = 'name';
echo($object->$something);
echo('<br>');

$somethingelse = 'something';
echo($$somethingelse);
echo('<br>');
echo($somethingelse);

if(true){

}else if(false){

}else{
    
}

if(1 == '1') echo('1 == 1');
if(1 != '2') echo('1 != 2');
if(1 === '1') echo('1 === 1');
if(1 !== '1') echo('1 !== 1');

$👌💕🤣❤️ = 'Something';
echo($👌💕🤣❤️);
?>

<div>
    <ul>
        <li><?php echo($animals[0]) ?></li>
        <li><?=$animals[0]?></li>
        <li><?=true ? $animals[0] : 'nothing'?></li>
        <li></li>
    </ul>
</div>