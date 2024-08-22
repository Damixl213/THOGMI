async

function addPassword(website, username, password) {
    event.preventDefault()
    var passwordList = document.getElementById("password-list");
    var newItem = document.createElement("div");
    newItem.classList.add("password-item");
    newItem.innerHTML = "<strong>" + website + "</strong> - " + username + ": " + "*******" +
                        "<button class='change-button' onclick='changePassword(this)'>Change</button>" +
                        "<button class='delete-button' onclick='deletePassword(this)'>Delete</button>";
    passwordList.appendChild(newItem);
    console.Log('New Account Added')
  }

  // Function to handle form submission
  document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var website = document.getElementById("website").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    addPassword(website, username, password);
    document.getElementById("password-form");
  });

  function viewPasswords() {
    if (passwordList == null) {
      alert('No Password To View')
      return false
    }else{return true;}
  }

  
  function deletePassword(button) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
  }

  // Function to delete all passwords
  function deleteAllPasswords() {
    var passwordList = document.getElementById("password-list");
    passwordList.innerHTML = "";
  }

  
  function changePassword(button) {
    var item = button.parentNode;
    var website = item.querySelector("strong").innerText;
    var username = item.innerText.split(" - ")[1].split(": ")[0];
    var newPassword = prompt("Enter new password for " + website + " - " + username + ":");
    if (newPassword !== null) {
      item.innerHTML = "<strong>" + website + "</strong> - " + username + ": " + newPassword +
                        "<button class='change-button' onclick='changePassword(this)'>Change</button>" +
                        "<button class='delete-button' onclick='deletePassword(this)'>Delete</button>";
      item.classList.add("password-item");
    }
  }
