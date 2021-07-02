

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//function to generate the password

function generatePassword() {
    var passwordLength = 0;
    //array letters and numbers characters
    var characterTypes = [
      [false, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      [false, "abcdefghijklmnopqrstuvwxyz"],
      [false, "1234567890"],
      [false, "?/><.,;:'|][{})(*&^%$#@!"]
    ];
    var passWord = "";
    var validCharacter = "";

    
    
    //do-while loop to confirm valid digit entered if not prompt if valid run

    do {
      passwordLength = prompt("Enter the length for requested password between (8-128 characters:");
    }
      while (( passwordLength > 128) || (passwordLength < 8));
      do {
        var valid = false;

        var passwordInput = prompt ("Enter types of characters you want in the password.\n'u' UPPERCASE Letters\n'l' for lowercase letters\n'n' for numbers\n's' for special characters");
        passwordInput.toLowerCase();


        
        for (var i = 0; i < passwordInput.length; i++) {
          switch (passwordInput[i]) {
            case "u":
              characterTypes[0][0] = true;
              valid = true;
              break;
            case "l":
              characterTypes[1][0] = true;
              valid = true;
              break;
            case "n":
              characterTypes[2][0] = true;
              valid = true;
              break;
            case "s":
              characterTypes[3][0] = true;
              valid = true;
              break;
          }
        }

          // if for not selecting u l n s
        if (!valid) {
          alert("Please enter valid option.");
        }

        

      }while (!valid);
          //once valid loop types chosen and length chosen
        for (i = 0; i < characterTypes.length; i++) {
            if (characterTypes[i][0] ){
              validCharacter += characterTypes[i][1];
              }
          }


          

              //for loop to generate based of formula
   for (i = 0; i <passwordLength; i++) {
     geneRate = validCharacter[Math.floor(Math.random() * validCharacter.length)];

     passWord += geneRate;

     

     

   }
   
    //display password
   return  prompt("password", [passWord]);
   

  }  



// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

