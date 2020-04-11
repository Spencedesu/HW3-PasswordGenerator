var lowerArr = "abcdefghijklmnopqrstuvwxyz";
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numArr = "0123456789";
var specialArr = "!@#$%^&*";

var displayPass = document.getElementById("password");
var generateButton = document.getElementById("generate");
var numberCharacters = document.getElementById("passLength");
var uppers = document.getElementById("uppers");
var nums = document.getElementById("nums");
var special = document.getElementById("specials");
var clipboard = document.getElementById("copyClip");
var totalCharacters = lowerArr;

function generate () {
  var password = "";
  for (i=0; i<numberCharacters.value; i++) {
    password += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
  }
  displayPass.textContent = password;
  console.log(password);
}
uppers.addEventListener("change", function(event) {
  if (this.checked) {
    if (uppers.checked === true) {
      totalCharacters = totalCharacters + upperArr
    };
  }
});
nums.addEventListener("change", function(event) {
  if (this.checked) {
    if (nums.checked === true){
      totalCharacters = totalCharacters + numArr
    };
  }
});
special.addEventListener("change", function(event) {
  if (this.checked) {
    if (special.checked === true) {
      totalCharacters = totalCharacters + specialArr
    };
  }
});
clipboard.addEventListener("click", function() {
  var copy = document.getElementById("password");
  copy.select();
  copy.setSelectionRange(0,100)
  document.execCommand('copy');
  alert("Password copied successfully");
})