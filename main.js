var Phrase = require("mhartl-palindrome");

var string = prompt("Please enter a string for palindrome testing:");

var phrase = new Phrase(string);

if (phrase.palindrome()) {
alert(`"${phrase.content}" is a palindrome!`);
} else {
alert(`"${phrase.content}" is not a palindrome.`)
}
