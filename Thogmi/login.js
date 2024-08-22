
    document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault();  
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    })

    function reCheck() {
       try {
        var x = document.forms["username"]
        var y = document.forms["password"]
        if (x == "" && y == "") {
          alert('Form must be filled out')
          return false
        }else if (y > 6) {
          alert('Password must be filled out')
          return false
        }else if (x == "") {
          alert('Password must be filled out')
          return false
        }else {
          alert('Hold on!. Logging in.....')
          return true
        }
       } catch (error) {
        
       }
    }

    //  function Check() {
    //    var user = document.getElementById("username").value
    //    var pass = document.getElementById('password')
    //    if (user == "" | user == null){
    //      document.getElementById(text).innerHTML = "Username cannot be empty"
    //      return false
    //    }else if (user)
    // //    }else if  (pass < 6){
    // //      alert("Password is less than Six Digits/Alphabets")
    // //      return false
    // //    }else {
    // //      alert("Loging in");
    // //      return ('User Authenticated Succesfully')
    // //    }
    //  }
