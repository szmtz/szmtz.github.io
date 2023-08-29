const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

/* concatenate strings old way    */
const firstName = "Brian";
const lastName = "Holt";

/* concatenate strings new way  uses backticks for template strings  */
const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

/* Loops */

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");

  