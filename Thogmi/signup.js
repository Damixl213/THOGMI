document.getElementById('pass').addEventListener('onfocus', function(event) {
    event.target.type = 'text';
  })

  function name() {
    var name
    document.getElementsByName('username').value.length = username
    if (username = "") {
      name = 'Username cant be empty'
      document.getElementById('user').innerHTML = name
      return false
    } else if (username < 5) {
      name = 'Username can\'t\' be less than 4 characters'
      document.getElementById('user').innerHTML = name
      return false
    } else {
      name = ""
      document.getElementById('user').innerHTML = name
      return true
    }
  }


  // to generate the generate password button when the password > 0
  function change() {
    var pa = document.getElementsByClassName('generate-button').value
    if (pa = "") {
      document.getElementsByClassName('generate-button').classList.add('animate__animated animate__zoomInDown')
    }else {
      generateBtn.disable = false
    }
  }

  function  Functionevent(){
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('useremail');
    var passwordInput = document.getElementById('pass');
    var passwordInputsec = document.getElementById('pass2');
    var signupbutton = document.getElementsByClassName('signup-button');

    //Function to check if all fields are filled out
    function checkFormValidity() {
      if (usernameInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' && passwordInput.value.trim() !== '' &&
        passwordInputsec.value.trim() !== '' || passwordInputsec.value == passwordInput.value ) {
        signupbutton.disabled = false; 
      } else {
        signupbutton.disabled = true;
      }
    }
    // Event listener to check form validity
    usernameInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
   }


  // For generating random password
  function generateUniquePassword(length) {
    var drop
    var length = 12 //length of password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    var password = ""
    var passwordArray = []
    
    // To check if the generated password is unique
    function isUnique(password, passwordArray) {
      return passwordArray.indexOf(password) === -1
    }

    do {
      password = ";"
    for (var i = 0; i < length; i++) {
      var randomIndex =Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    }while (!isUnique(password, passwordArray)) 
    document.getElementById('pass').value = password;
    document.getElementById('pass2').value = password;
    checkPasswordStrength(); 
    return false
  }

  //To check password strength
  function checkPasswordStrength() {
    var password = document.getElementById('pass').value;
    var strength = document.getElementById('strength');

    //Defining the regex pattern
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z]{8,}$/;
    var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z]{8,}$/;
    var weakRegex = /^(?=.*[a-zA-Z])[A-Za-z]{8,}$/;

    if (strongRegex.test(password)) {
      strength.innerHTML = 'Strong';
      strength.style.color = 'green';
    }else if (mediumRegex.test(password)){
      strength.innerHTML = 'Medium';
      strength.style.color = 'orange';
    }else if (weakRegex.test(password)) {
      strength.innerHTML = 'Very Weak';
      strength.style.color = '#e74c3c';
    } else{
      return false
    }
    return false
  }
