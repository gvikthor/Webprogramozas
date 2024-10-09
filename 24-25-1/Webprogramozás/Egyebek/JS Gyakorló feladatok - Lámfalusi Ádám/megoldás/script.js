// Data
const names = ["Ori", "Nori", "Dori", "Bifur", "Bofur", "Bombur", "Oin", "Gloin", "Kili", "Fili", "Dwalin", "Balin", "Thorin"];

// -------------------------------------------------------------------------------------------------------------------------------------

// Task 1
// Output the names that end with "in"
const task1p = document.getElementById("task1-output");

const task1names = names.filter(name => { return name.slice(-2) == "in"; });
task1names.forEach(name => { task1p.innerText += (name + ", "); });

// Task 2
// Output the names that start with "Bo"
const task2p = document.getElementById("task2-output");

const task2names = names.filter(name => { return name.slice(0, 2) == "Bo"; });
task2names.forEach(name => { task2p.innerText += (name + ", "); });

// Task 3
// Convert all of the names to all uppercase in the output!
const task3p = document.getElementById("task3-output");

const task3names = names.map(name => name.toUpperCase() );
task3names.forEach(name => { task3p.innerText += (name.toUpperCase() + ", "); });

// Task 4
// Decide whether every name is at least 3 characters long by underlining the correct text!
const task4yes = document.getElementById("task4-yes");
const task4no = document.getElementById("task4-no");

const allThreeCharsLong = names.every(name => { return name.length >= 3; });
if (allThreeCharsLong) {
    task4yes.style.textDecoration = "underline";
}
else {
    task4no.style.textDecoration = "underline";
}

// Task 5
// Decide whether every name name has an "o" letter in it by making the correct answer bold and red!
const task5yes = document.getElementById("task5-yes");
const task5no = document.getElementById("task5-no");

const allContainingO = names.every(name => { return name.toLowerCase().includes("o"); });
const task5target = allContainingO ? task5yes : task5no;
task5target.style.fontWeight = "bold";
task5target.style.color = "red";

// Task 6
// Decide whether there are any names containing a "w" and "d" letters by coloring the correct answer green!
const task6yes = document.getElementById("task6-yes");
const task6no = document.getElementById("task6-no");

const containsDandW = names.some(name => { return name.toLowerCase().includes("d") && name.toLowerCase().includes("w"); });
const task6target = containsDandW ? task6yes : task6no;
task6target.style.color = "green";

// Task 7
// Decide whether there are any names that are at least 10 characters long by coloring the correct answer red!
const task7yes = document.getElementById("task7-yes");
const task7no = document.getElementById("task7-no");

const atLeast10Long = names.some(name => { return name.length >= 10; });
const task7target = atLeast10Long ? task7yes : task7no;
task7target.style.color = "red";

// Task 8
// If the name "Bofur" is among the names, output it's index in the array! If not, output some text saying it is not found!";
const task8p = document.getElementById("task8-output");

if (names.find(name => { return name == "Bofur"; }) != undefined) {
    task8p.innerText = names.findIndex(name => { return name == "Bofur"; });
}
else {
    task8p.innerText = "Bofur nincs meg!";
}

// Task 9
// If the name "Bilbo" is among the names, output it's index in the array! If not, output some text saying it is not found!";
const task9p = document.getElementById("task9-output");

if (names.find(name => { return name == "Bilbo"; }) != undefined) {
    task9p.innerText = names.findIndex(name => { return name == "Bilbo"; });
}
else {
    task9p.innerText = "Bilbo nincs meg!";
}

// Task 10
// Create event listeners for task10-up and task10-down that will shift the italic and bold styles up or down among the names!
const task10ul = document.getElementById("task10-names");
const task10up = document.getElementById("task10-up");
const task10down = document.getElementById("task10-down");