function $(id){
    return document.getElementById(id);
}

let vaszon = $('vaszon');
let context = vaszon.getContext('2d'); //na ezt már le nem fordítom magyarra...

/*
//Vonal
context.moveTo(0, 0); //bal felső sarok a (0,0)
context.lineTo(300, 100);
context.stroke(); 
*/

/*
//Kör
context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI); //kezdőX, kezdőY, sugár, kezdő szög (rad), cél szög (rad)
context.stroke(); 
*/

/*
//Szöveg
context.font = "30px Arial";
context.fillText("Hello World", 250, 50); 
*/

/*
//Szöveg körvonal
context.font = "30px Arial";
context.strokeText("Hello World", 250, 50); 
*/

/*
//Kép
let kep = new Image();
kep.src = './kep.jpg';
kep.onload = () => {
    //context.drawImage(kep, 10, 30, 300, 300);
    //                   forrás, kezdő x, kezdő y, szélesség, magasság 

    //ha több paraméterrel adod meg, más lesz az eredmény!
    context.drawImage(kep, 30, 50, 120, 210, 10, 30, 300, 300);
    //                forrás, (levágás 4 paramétere), (elhelyezés 4 paramétere) --> csatoltam két magyarázó képet: canvas_kep_levagas és canvas_kep_elhelyezes
    //                                                                              sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
}

//Törlés
context.clearRect(0, 0, vaszon.width, vaszon.height);.
*/