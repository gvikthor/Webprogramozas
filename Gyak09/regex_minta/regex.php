<?php
// ez nem egy komolyabb tutorial reguláril kifejezésekből, csak rövid magyaráza!!!

// ^ az első karakter előtti hely a stringben
// $ az utolsó karakter utáni hely a stringben
// tehát ezzel a kettővel megmondhatjuk, hogy a szöveg eleje és vége közt mi szerepeljen

// * akármennyi egymás után

echo preg_match("/^alma$/", "alma") . "<br>";               //1
echo preg_match("/^alma$/", "blma") . "<br>";               //0
echo preg_match("/^[a]$/", "a") . "<br>";                   //1
echo preg_match("/^[a]*$/", "a") . "<br>";                  //1
echo preg_match("/^[a]*$/", "aa") . "<br>";                 //1
echo preg_match("/^[a]*$/", "aaa") . "<br>";                //1
echo preg_match("/^[a]*$/", "b") . "<br>";                  //0
echo preg_match("/^[a-z]*$/", "alma") . "<br>";             //1
echo preg_match("/^[a-z]*$/", "Alma") . "<br>";             //0
echo preg_match("/^[A-Z]*$/", "ALMA") . "<br>";             //1
echo preg_match("/^[A-Z]*$/", "aLMA") . "<br>";             //0
echo preg_match("/^([a-zA-Z])*$/", "aLMa") . "<br>";        //1
echo preg_match("/^([a-zA-Z])*$/", "a1Ma") . "<br>";        //0
echo preg_match("/^([a-zA-Z0-9])*$/", "a1mA") . "<br>";     //1


?>