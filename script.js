const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password_one = "";
let password_two = "";

let len = 15;

function generate() {
    password_one = ""; 
    password_two = ""; 
    for (let i = 0; i < len; i++) {
        password_one += characters[Math.floor(Math.random() * characters.length)];
        password_two += characters[Math.floor(Math.random() * characters.length)];
    }

    let passwordoneEl = document.getElementById("first-el");
    let passwordtwoEl = document.getElementById("second-el");

    passwordoneEl.textContent = password_one;
    passwordtwoEl.textContent = password_two;
}



