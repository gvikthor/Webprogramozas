let hallgatok = [
    {
        nev: 'Józsefvárosi Nándor',
        neptun: '4N1M8R',
        elvegzettKredit: 26,
        aktualisFelev: 3,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'B2'
            },
            {
                nyelv: 'spanyol',
                szint: 'B2'
            }
        ]
    },
    {
        nev: 'Íliász Patrik',
        neptun: 'SQ1RL2',
        elvegzettKredit: 135,
        aktualisFelev: 5,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'B2'
            },
            {
                nyelv: 'latin',
                szint: 'C1'
            }
        ]
    },
    {
        nev: 'Frankos Áron',
        neptun: 'F4660T',
        elvegzettKredit: 24,
        aktualisFelev: 3,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'C1'
            }
        ]
    },
    {
        nev: 'Horgász Henrietta',
        neptun: '5TUD10',
        elvegzettKredit: 127,
        aktualisFelev: 5,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'B2'
            },
            {
                nyelv: 'francia',
                szint: 'B2'
            }
        ]
    },
    {
        nev: 'Dombóvári Viktor',
        neptun: 'L3V0NS',
        elvegzettKredit: 174,
        aktualisFelev: 7,
        aktiv: false,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'A1'
            }
        ]
    },
    {
        nev: 'Lapcsánka Míra',
        neptun: 'ILVDTK',
        elvegzettKredit: 231,
        aktualisFelev: 9,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'C1'
            },
            {
                nyelv: 'magyar',
                szint: 'C2'
            }
        ]
    },
    {
        nev: 'Csikós Erik',
        neptun: 'B34C69',
        elvegzettKredit: 161,
        aktualisFelev: 7,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'B2'
            }
        ]
    },
    {
        nev: 'Kis Gergő',
        neptun: '31RTKZ',
        elvegzettKredit: 87,
        aktualisFelev: 3,
        aktiv: false,
        nyelvvizsgak: [
            {
                nyelv: 'német',
                szint: 'C1'
            },
            {
                nyelv: 'spanyol',
                szint: 'B2'
            }
        ]
    },
    {
        nev: 'Jónás Katalin',
        neptun: '3R1KT0',
        elvegzettKredit: 91,
        aktualisFelev: 3,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'spanyol',
                szint: 'C1'
            },
            {
                nyelv: 'angol',
                szint: 'C1'
            }
        ]
    },
    {
        nev: 'Buchanyi Mihály',
        neptun: '30TT0M',
        elvegzettKredit: 290,
        aktualisFelev: 11,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'python',
                szint: 'C1'
            },
            {
                nyelv: 'angol',
                szint: 'B2'
            }
        ]
    },
    {
        nev: 'Bogodi Viktória',
        neptun: 'J3GZKV',
        elvegzettKredit: 37,
        aktualisFelev: 3,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'magyar',
                szint: 'C1'
            }
        ]
    },
    {
        nev: 'Fodros Zoltán',
        neptun: 'B000Z1',
        elvegzettKredit: 146,
        aktualisFelev: 7,
        aktiv: false,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'A1'
            }
        ]
    },
    {
        nev: 'Jobbágy Balázs',
        neptun: 'V3NF52',
        elvegzettKredit: 420,
        aktualisFelev: 31,
        aktiv: false,
        nyelvvizsgak: [
            {
                nyelv: 'német',
                szint: 'B2'
            },
            {
                nyelv: 'angol',
                szint: 'B2'
            },
            {
                nyelv: 'linux',
                szint: 'C2'
            }
        ]
    },
    {
        nev: 'Gerő Viktor',
        neptun: 'K431NT',
        elvegzettKredit: 0,
        aktualisFelev: 1,
        aktiv: true,
        nyelvvizsgak: [
            {
                nyelv: 'angol',
                szint: 'C1'
            },
            {
                nyelv: 'mutyi',
                szint: 'C2'
            }
        ]
    }
];



// Összegezd a hallgatók által elvégzett krediteket!

    //// Progalapos megoldás 
    let osszeg = 0;
    for(const hallgato of hallgatok){
        osszeg += hallgato.elvegzettKredit;
    }
    console.log(osszeg);

    //// JavaScriptes megoldás
    console.log(
        hallgatok.reduce((osszeg, hallgato) => osszeg + hallgato.elvegzettKredit, 0)
    );




// Ki végezte el a legtöbb kreditet eddig?

    //// Progalapos megoldás 1
    let maxIndex = 0;
    for(let i = 1; i < hallgatok.length; i++){
        if(hallgatok[i].elvegzettKredit > hallgatok[maxIndex].elvegzettKredit){
            maxIndex = i;
        }
    }
    console.log(hallgatok[maxIndex].nev);

    //// Progalapos megoldás 2
    let maxHallgato = hallgatok[0];
    for(const hallgato of hallgatok){
        if(hallgato.elvegzettKredit > maxHallgato.elvegzettKredit){
            maxHallgato = hallgato;
        }
    }
    console.log(maxHallgato.nev);

    //// JavaScriptes megoldás
    console.log(
        hallgatok.reduce(
            (hallgato1, hallgato2) =>  hallgato1.elvegzettKredit > hallgato2.elvegzettKredit ? hallgato1 : hallgato2
        ).nev
    );



// Átlagosan hány kreditet végeztek el félévenként a hallgatók?
    //// Az összeget kiszámoltuk máskor
    console.log(osszeg/hallgatok.length);



// Átlagosan hány kreditet végeztek el azon hallgatók, akik már legalább 7 féléve itt tanulnak?

    //// Progalapos megoldás 
    let hetFelevOsszeg = 0;
    let hetFelevMennyiseg = 0;
    for(const hallgato of hallgatok){
        if(hallgato.aktiv){
            hetFelevOsszeg += hallgato.elvegzettKredit;
            hetFelevMennyiseg++;
        }
    }
    console.log(hetFelevOsszeg/hetFelevMennyiseg);

    //// JavaScriptes megoldás
    let atlagObjektum = hallgatok.reduce(
        ({osszeg, mennyiseg}, hallgato) => {
            return {
                osszeg: osszeg + (hallgato.aktiv ? hallgato.elvegzettKredit : 0),
                mennyiseg: mennyiseg + (hallgato.aktiv ? 1 : 0)
            }
        }, {osszeg: 0, mennyiseg: 0}
    );
    console.log(atlagObjektum.osszeg/atlagObjektum.mennyiseg);
    //Ez már amúgy abszolút over the top, csak flexelgetés, undorítóan néz ki, és sokkal olvashatatlanabb, mint a progtétel.
    //Ne csinálj ilyet élesben, ÉS NAGYON KÉRLEK NE CSINÁLJ ILYET BEADANDÓBAN MEG ZH-N - nem azért, mert nem fogadom el,
    // hanem mert elmegy húsz-negyven perc azzal, hogy kitaláld, mit akarsz, és debugold az amúgy 2 perces kódot.



// Hányadik félévében jár a legrégebb óta itt tanuló aktív hallgató?

    //// Progalapos megoldás 1
    let maxIndex2 = 0;
    for(let i = 1; i < hallgatok.length; i++){
        if(hallgatok[i].aktualisFelev > hallgatok[maxIndex].aktualisFelev){
            maxIndex = i;
        }
    }
    console.log(hallgatok[maxIndex].nev);

    //// Progalapos megoldás 2
    let maxHallgato2 = hallgatok[0];
    for(const hallgato of hallgatok){
        if(hallgato.aktualisFelev > maxHallgato2.aktualisFelev){
            maxHallgato2 = hallgato;
        }
    }
    console.log(maxHallgato.nev);

    //// JavaScriptes megoldás
    console.log(
        hallgatok
        .reduce(
            (hallgato1, hallgato2) =>  hallgato1.aktualisFelev > hallgato2.aktualisFelev ? hallgato1 : hallgato2
        )
        .nev
    );



// Van-e olyan hallgató, akinek a Neptun kódja ugyanazzal a betűvel kezdődik, mint a vezetékneve?

    // Progalapos megoldás
    let index = 0;
    while(index < hallgatok.length && hallgatok[index].nev[0] != hallgatok[index].neptun[0]){ //ide indokolt lehet egy-egy .toUpperCase()
        index++;
    }
    if(index < hallgatok.length){
        console.log(`Volt ilyen hallgató: ${hallgatok[index].nev}, ${hallgatok[index].neptun}`);
    }else{
        console.log('Nem volt ilyen hallató');
    }

    // JavaScriptes megoldás
    let neptunosHallgato = hallgatok.find(hallgato => hallgato.nev[0] == hallgato.neptun[0]);
    console.log(neptunosHallgato ? `Volt ilyen hallgató: ${neptunosHallgato.nev}, ${neptunosHallgato.neptun}` : 'Nem volt ilyen hallató');
                //ez itt egy csúnya trükk:
                //- ha a find nem találja a megfelelő elemet, undefined-ot ad vissza
                //- mondhatnám azt, hogy if(neptunosHallgato != undefined)
                //- de az if(neptunosHallgato) is jó, mert ez akkor lesz igaz, ha nem undefined/null/üres stb...



// Listázd ki az angol C1 nyelvvizsgával rendelkező hallgatókat ABC sorrendben!

    // Progalapos megoldás
    let angolosHallgatok = [];
    for(const hallgato of hallgatok){
        let i = 0;
        while(i < hallgato.nyelvvizsgak.length && !(hallgato.nyelvvizsgak[i].nyelv == 'angol' && hallgato.nyelvvizsgak[i].szint == 'C1') ){
            i++;
        }
        if(i < hallgato.nyelvvizsgak.length){
            angolosHallgatok.push(hallgato);
            let j = angolosHallgatok.length - 1;
            while(j > 0 && angolosHallgatok[j-1].nev > hallgato.nev){
                angolosHallgatok[j] = angolosHallgatok[j-1];
                angolosHallgatok[j-1] = hallgato;
                j--;
            }
        }
    }
    console.log(angolosHallgatok);

    // JavaScriptes megoldás
    console.log(
        hallgatok
        .filter(
            hallgato => hallgato.nyelvvizsgak.some(
                vizsga => vizsga.nyelv == 'angol' && vizsga.szint == 'C1'
            )
        )
        .sort(
            (hallgato1, hallgato2) => hallgato1.nev > hallgato2.nev
        )
    );