// 1. feladat
function percent27(number) {
    return number * 0.27;
}

// 2. feladat
function percent(number, percentage) {
    return number * (percentage / 100);
}

// 3. feladat
function getVAT_task3switch(countryCode) {
    switch (countryCode) {
        case 'AUT':
            return 20;
            break;
        case 'CZE':
            return 21;
            break;
        case 'CRO':
            return 25;
            break;
        case 'HUN':
            return 27;
            break;
        default:
            return -1;
            break;
    }
}

const countries = [
    ['Austria', 'AUT', 20],
    ['Czechia', 'CZE', 21],
    ['Croatia', 'CRO', 25],
    ['Hungary', 'HUN', 27],
];

function getVAT_task3early(countryCode) {
    for (const country of countries) {
        if (country[1] === countryCode) {
            return country[2];
        }
    }
    return -1;
}

// 4. feladat
function getVAT_task4(countryID) {
    for (const country of countries) {
        if (country[0] === countryCode || country[1] === countryCode) {
            return country[2];
        }
    }
    return -1;
}

// 5. feladat
const countries_extended = [
    ['Austria', 'AUT', 20, 13, 10],
    ['Czechia', 'CZE', 21, 15, 10],
    ['Croatia', 'CRO', 25, 13, 5],
    ['Hungary', 'HUN', 27, 18, 5],
];

function getVAT(countryID, vatID) {
    for (const country of countries_extended) {
        if (country[0] === countryID || country[1] === countryID) {
            return country[vatID + 1];
        }
    }
    return -1;
}

// 6. feladat
function listVAT(price) {
    for (const country of countries_extended) {
        const cid = country[0];
        console.log(`${price} in ${cid} would cost ${price / ((getVAT(cid, 1)/100) + 1)}/${price / ((getVAT(cid, 2)/100) + 1)}/${price / ((getVAT(cid, 3)/100) + 1)}`);;
    }
}


// Object
const c_e = [
    ['Austria', 'AUT', 20, 13, 10],
    ['Czechia', 'CZE', 21, 15, 10],
    ['Croatia', 'CRO', 25, 13, 5],
    ['Hungary', 'HUN', 27, 18, 5],
];

// const countries_extended_obj = {
//     AUT: {
//         name: "Austria",
//         vat1: 20,
//         vat2: 13,
//         vat3: 10,
//     }
// }

const countries_obj = {};

function createObject(array) {
    for (const element of array) {
        countries_obj[element[1]] = {
            name: element[0],
            vat1: element[2],
            vat2: element[3],
            vat3: element[4],
        }
    }
}



// Tömbfüggvények
const numbers = [6,10,18,7,3,42,8,14,9,5];
function isEven(number) {
    return number % 2 === 0;
}

console.log(
    numbers.some(isEven),
    numbers.every(isEven),
    numbers.find(isEven),
    numbers.findIndex(isEven),
)

console.log(numbers);

console.log(
    numbers.map((number) => {
        if(isEven(number)) {
            return number * 2;
        }
        return number;
    })
);

