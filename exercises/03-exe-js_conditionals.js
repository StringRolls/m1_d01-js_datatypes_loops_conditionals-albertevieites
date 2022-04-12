/** Practice conditionals
 *
 * Take user name and language as input (declare two variables)
 * Use console.log() method to output  a welcome message to the user using `if ...else if..else`
 * If the language is one of `French, Spanish, English` , show the welcome message. If not show `I am not sure what are you trying to do, sorry! 🍺"`
 * Do the same using a switch statement
 */

const language = "English";
// const name = ... <- Complete here and keep wriritng your code below
const userName = "alberte";
// 1: if...else - simple solution
if (language === "French" || language === "Spanish" || language === "English") {
  console.log(`Wellcome, ${userName}`);
} else {
  console.log(`I am not sure what are you trying to do, sorry! 🍺"`);
}
// 2: switch
switch (language) {
  case "French":
  case "Spanish":
  case "English":
    console.log(`Wellcome, ${userName}`);
    break;
  default:
    console.log(`I am not sure what are you trying to do, sorry! 🍺"`);
}
