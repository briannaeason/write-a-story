alert("Let's write a story.");

//prompts user with questions to answer

var adjective1 = prompt("First, please give an adjective");
var adjective2 = prompt("And one more adjective");
var noun1 = prompt("Please give a noun");
var noun2 = prompt("Please give a second noun");
var animal = prompt("What's your favorite animal?");

var verb1 = prompt("Now give me a verb");
var verb2 = prompt("And another verb please");
var name = prompt("Now enter your name");
var place = prompt("And please name a place");
alert("Thanks for filling out all the questions!");

//function to make name input have first letter capitalized and the rest lowercase

function firstLetterUpper(name) {
  var makeLowerCase = name.toLowerCase();
  return makeLowerCase.charAt(0).toUpperCase() + makeLowerCase.slice(1);
}

//inputs the user's responses into a story format 

var story = "There once was a " + animal;
story += " named " + firstLetterUpper(name) + ". " + firstLetterUpper(name);
story += ' said "I want to go ';
story += verb1;
story += " because I feel so gosh darned ";
story += adjective1 + '!"';
story += " So " + firstLetterUpper(name);
story += " went to " + place;
story += ". Once there, a " + noun1;
story += " appeared! The " + noun1;
story += ' said, "Whoa there! You\'re awfully ' + adjective2;
story += " for a stranger. Why don't you " + verb2;
story += '?" ' + firstLetterUpper(name);
story += " obeyed and went home to their " + noun2;
story += " and lived happily ever after. The end.";

//places the story inside a div

$('.paragraph').html(story);
