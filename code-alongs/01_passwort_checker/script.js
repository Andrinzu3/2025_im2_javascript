console.log('hi script.js')

let password = prompt("Passwort eingeben");
let username = prompt("Username eingeben");

checkStringLengt(password, 12);
checkStringLengt(username, 7);

function checkStringLengt(testString, TestLengh) {
if (password.length >= 12) {
    console.log("Das Passwort ist lang genug");
} else {
console.log("Bitte verwende ein Längeres Passwort.");
}
}

function checkStringLengt(testString, testLengh) {
    if (testString.length >= TestLengh) {
        console.log("Der Text ist lang genug");

    } else {
        console.log("bitte verwende einen längeren Text")
    }
}