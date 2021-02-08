const franc = require("franc");
const langs = require("langs");

const input = process.argv[2];  // get the input string
const code = franc(input);      // convert input string to certain language code

try {
    const type = langs.where('3', code);    // find the language according to code
    console.log("Detected language is: " + type.name);
} catch {
    console.log("Cannot find the language. Pls try again!");
}
