let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%&*_-+=?/|";
let combined = upperCase + lowerCase + numbers + symbols;
const length = 8;
let pass = document.querySelector(".pass");
let copy = document.querySelector(".copy");

function generatePass() {
  let password = "";
  // Ensure at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill the rest of the password
  while (password.length < length) {
    password += combined[Math.floor(Math.random() * combined.length)];
  }

  // // Shuffle the password
  // password = shufflePassword(password);

  // Set the password in the input field
  pass.value = password;
}

// // Function to shuffle the generated password
// function shufflePassword(password) {
//   return password.split('').sort(() => Math.random() - 0.5).join('');
// }

function copyPass(){
  pass.select();
  document.execCommand("copy");
}
