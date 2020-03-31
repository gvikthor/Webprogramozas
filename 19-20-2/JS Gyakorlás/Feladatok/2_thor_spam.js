let emailek = [
    {
        'felado': 'ironman@stark.com',
        'targy': 'Beszámolók',
        'torzs': 'Elfelejtetted megírni a beszámolód, ez már a harmadik idén. Minél gyorsabban állítsd össze!',
        'csatolmanyok': []
    },
    {
        'felado': 'ugyintezes@kancellaria.elte.hu',
        'targy': 'Fizetési elmaradás',
        'torzs': 'Tisztelt Hallgató! 3 forint fizetési elmaradás miatt leiratkoztattuk a Záróvizsgájáról. A jelentkezési határidő már lejárt, kérjük jövőre, az elmaradásai pótlása után jelentkezzen újra.',
        'csatolmanyok': []
    },
    {
        'felado': 'thor@mail.asg',
        'targy': 'Ingyen pénz!!!',
        'torzs': 'Szia, Thor vagyok! Ingyen pénzt szereztem, töltsd ki ezt a formot és utaslok neked is: www.eskupenz.asg',
        'csatolmanyok': []
    },
    {
        'felado': 'hr@stark.com',
        'targy': 'Nyert egy ingyen utat!',
        'torzs': 'Tisztelt Alkalmazottunk! Ön egy ingyen utat nyert Szokóviába. Részletek a csatolmányban.',
        'csatolmanyok': ['sokovia.pdf']
    },
    {
        'felado': 'stark.com@gmail.com',
        'targy': 'Üzleti adóhátralék elmaradás - fizetési kiírás',
        'torzs': 'Tisztelt alkalmazottunk! Kérjük fizesse ki elmaradását az alábbi oldalon: fizetes.starkindustri.com',
        'csatolmanyok': []
    },
    {
        'felado': 'hr@stark.com',
        'targy': 'Hamis feladó a levelekben! - Ne fizessen!',
        'torzs': 'Tisztelt Alkalmazottunk! Valaki adathalász módon információt próbál kicsalni az alkalmazottainkból. Semmiképpen ne dőljön be ilyeneknek, mi sosem kérünk be személyes adatot e-mailen keresztül!',
        'csatolmanyok': []
    },
    {
        'felado': 'nemthor@mail.asg',
        'targy': 'Játék',
        'torzs': 'Találtam egy jó játékot, próbáld ki. Thor',
        'csatolmanyok': ['dolphin.exe']
    },
    {
        'felado': 'kovacsne1932januar@gmail.com',
        'targy': 'megnyerik a szívemet ingyen cicák',
        'torzs': 'szia éle,tem ing yen kiscicák van-nak,.,,,,. a MANyiék-nál hozd el űüüőket ha arrr JÁRSZ KÜLD-ÖM A KÉP EKET KÖSZÖN.M, NAGYI',
        'csatolmanyok': ['dsc00965.png','dsc00967.png','dsc00968.png','dsc00969.png','kovacsne_aa234_latlelet1.png','kovacsne_aa234_latlelet2.png','tüdőszűrő beutaló.png','Nagyi ide kattints az internetért.exe']
    },
    {
        'felado': 'ugyintezes@rnnb.com',
        'targy': 'Hátraléka keletkezett!',
        'torzs': 'Számláját zároltuk! Kérjük, töltse ki az alábbi űrlapot. Magyar Nemzeti Bank. fizetes.rnnb.hu',
        'csatolmanyok': []
    }
];

for(email of emailek){
    email.spam = 0;
    if(email.felado.split('@')[1] == 'stark.com') email.spam -= 3;
    if(email.felado.split('@')[1] == 'mail.asg') email.spam += 0;
    if(email.targy.includes('nyer')) email.spam += 1;
    if(email.targy.includes('ingyen')) email.spam += 2;
    if(email.targy.includes('fizet')) email.spam += 2;
    if(email.targy.startsWith('adó')) email.spam += 1;
    if(email.targy.includes('nyer')) email.spam += 0;

    if(/(^|\s)[a-zA-Z]+\.[a-zA-Z]+\.[a-zA-Z]+(\s|$)/.test(email.torzs)) email.spam += 1; //reguláris kifejezés, ha még más tárgyból nem volt róla szó, php-nál elmondom
    if(/(^|\s)[a-zA-Z]+\.[a-zA-Z]+\.asg(\s|$)/.test(email.torzs)) email.spam += 4;

    if(email.csatolmanyok.length > 0){
        email.spam += 1;
        if(email.csatolmanyok.length > 3){
            email.spam += 1;
        }

        for(csatolmany of email.csatolmanyok){
            // Megoldás regkif nélkül:
            let bontva = csatolmany.split('.');
            if(bontva[bontva.length-1] == 'exe'){
                email.spam += 5;
            }
        }
    }
}

let emailTablazat = document.querySelector('#emailek');
let szuroInput = document.querySelector('#szuro');
let szuroGomb = document.querySelector('#szur-gomb');

function szures(limit){
    emailTablazat.innerHTML = '<tr><th>Feladó</th><th>Tárgy</th><th>Üzenet</th><th>Csatolmányok</th></tr>';

    emailTablazat.innerHTML = '';
    for(email of emailek){
        if(email.spam < limit){
            let ujSor = document.createElement('tr');
            emailTablazat.appendChild(ujSor);

            let felado = document.createElement('td');
            felado.innerHTML = email.felado;
            ujSor.appendChild(felado);

            let targy = document.createElement('td');
            targy.innerHTML = email.targy;
            ujSor.appendChild(targy);

            let torzs = document.createElement('td');
            torzs.innerHTML = email.torzs;
            ujSor.appendChild(torzs);

            let csatolmanyok = document.createElement('td');
            for(csatolmany of email.csatolmanyok){
                csatolmanyok.innerHTML += `>${csatolmany}<br>`;
            }
            ujSor.appendChild(csatolmanyok);
        }
    }
}

szuroGomb.addEventListener('click', ()=>{
    szures(parseInt(szuroInput.value));
});