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

