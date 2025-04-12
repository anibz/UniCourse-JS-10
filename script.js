let userAsk = prompt("A word?");
let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
let firstLetter = userAsk[0];

if (vowels.includes(firstLetter)) {
  console.log(`სიტყვა იწყება ხმოვანით, რომელიც არის ${firstLetter}`);
} else console.log(`სიტყვა არ იწყება ხმოვანით, რადგან ის არის ${firstLetter}`);
