// ÁFA (== VAT: Value Added Tax)
    /*
    Második gyakolraton beszélünk objektumokról,
    ezt a megoldást sokkal szebben is meg lehet írni.
    */

    // 1. Feladat
        function percent27(number){
            return number*0.27
        }

    // 2. Feladat
        function percent(number, percentage){
            return number*(percentage/100)
        }

    // 3. Feladat
        /**
         * ## Elágazással
         * Nehezen bővíthető, nem alkalmazkodik az adatok változásához,
         * nem lehet kívülről adatokat beletölteni.
         */
        function getVAT_task3if(countryCode){
            let VAT = -1
            if(countryCode == 'AUT') VAT = 20
            else if(countryCode == 'CZE') VAT = 21
            else if(countryCode == 'CRO') VAT = 25
            else if(countryCode == 'HUN') VAT = 27
            return VAT
        }


        const countries = [
            ['Austria', 'AUT', 20],
            ['Czechia', 'CZE', 21],
            ['Croatia', 'CRO', 25],
            ['Hungary', 'HUN', 27]
        ]

        /**
         * ## Egyszerű megoldás
         * Ez egy szimpla lineáris keresés.
         */
        function getVAT_task3simple(countryCode){
            let VAT = -1
            let found = false
            for(let i = 0; i < countries.length && !found; i++){
                if(countries[i][1] == countryCode){
                    found = true
                    VAT = countries[i][2]
                }
            }
            return VAT
        }

        /**
         * ## Early return megoldás
         * Ebben a megoldásban kihasználjuk, hogy ha egy függvény
         * returnöl, akkor abban a pillanatban le is áll a futása.
        */
        function getVAT_task3early(countryCode){
            for(const country of countries){
                if(country[1] == countryCode){
                    return country[2]
                }
            }
            return -1
        }

    // 4. Feladat
        /**
         * Ha csak egy sor jön a ciklusba vagy ifbe, elhagyhatóak a
         * kapcsos zárójelek.
         * (Nem python, mindegy, hogy be van tabolva vagy nem.)
         */
        function getVAT_task4(countryID){
            for(const country of countries)
                if(country[0] == countryID || country[1] == countryID)
                    return country[2]
            return -1
        }

    // 5. Feladat
        const countries_extended = [
            ['Austria', 'AUT', 20, 13, 10],
            ['Czechia', 'CZE', 21, 15, 10],
            ['Croatia', 'CRO', 25, 13, 5],
            ['Hungary', 'HUN', 27, 18, 5]
        ]
        function getVAT(countryID, vatID){
            for(const country of countries_extended)
                if(country[0] == countryID || country[1] == countryID)
                    return country[vatID + 1] // 0: országnév, 1: kód, 2: áfa 1, 3: áfa 2, 4: áfa 3
            return -1
        } 

    // 6. Feladat
        /**
         * Függvények nélkül
         */
        function listVAT_nofunc(price){
            for(const country of countries_extended){
                console.log(`${price} in ${country[0]} would cost ${price * country[2] / 100}/${price * country[3] / 100}/${price * country[4] / 100}`)
            }
        }

        /**
         * Függvényekkel
         */
        function listVAT(price){
            for(const country of countries_extended){
                const cid = country[0]
                console.log(`${price} in ${cid} would cost ${percent(price, getVAT(cid,1))}/${percent(price, getVAT(cid,2))}/${percent(price, getVAT(cid,3))}`)
            }
        }

// Tömbfüggvények
        const numbers = [6,10,18,7,3,42,8,14,9,5]
        function isEven(number){
            return number % 2 == 0
        }
        // 1-4. Feladat
        console.log(
            numbers.some(isEven),
            numbers.every(isEven),
            numbers.find(isEven),
            numbers.findIndex(isEven)
        )

        // 5. Feladat

        function modify(number){
            if(isEven(number)) return number / 2
            return number * 2
        }

        console.log(
            numbers.map(modify)
        )

        // 6. Feladat
        /*
            Google: javascript array contains value
            2. találat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
            
            Az MDN WebDocs az official, de nyilván végtelen sok forrás van.
            Nyilván érdemes ezt használni, mert **mindig** up to date.
            A w3schools nem hivatalos dokumentáció, de általában azt
            dobja ki először.

            Abban más, mint a some, hogy ez egy értéket vár paraméterként,
            és konkrétan össze fogja hasonlítani a tömbelemekkel.
            A some egy függvényt vár, ami logikai értéket ad vissza.
            Tehát a some egy általánosabb includes.

            Az includes működik stirngekre is, így lehet vel
            pl. névelő függvényt írni. Csatoltam egy ilyen példát.
        */

        // 7. Feladat
        function GCD(number1, number2){
            let a = Math.min(number1, number2)
            let b = Math.max(number1, number2)
            remainder = a % b
            while(remainder > 0){
                a = b
                b = remainder
                remainder = a % b
            }
            return b
        }
        
        function GCDinArray(number1, number2){
            return numbers.includes(GCD(number1, number2))
        }

        // 8. Feladat
        function GCDwithSevenInArray(number){
            return GCDinArray(number, 7)
        }

        console.log(
            numbers.filter(GCDwithSevenInArray)
        )

        // 9. Feladat
        for(const number1 of numbers){
            for(const number2 of numbers){
                if(number1 != number2){
                    let text = 'have'
                    if(!GCDinArray(number1, number2)){
                        text = 'don\'t have'
                    }
                    console.log(`${number1} and ${number2} ${text} their GCD in the array.`)
                }
            }
        }