function login_action() {
  let loginemail = document.getElementById("email").value;
  let loginpassword = document.getElementById("psw").value;
  let alluser = [];
  fetch(
    "https://finaljsproject-a1c25-default-rtdb.firebaseio.com/username.json"
  )
    .then((response) => response.json())
    .then((data) => {
      for (let x in data) {
        tempusers = {
          ...data[x],
        };
        alluser.push(tempusers);
      }

      //console.log(alluser);
      let testuser = alluser.filter((x) => {
        return x.email == loginemail && x.pasword == loginpassword;
      });
      if (testuser.length == 1) {
        alert("Login sucessful");
      } else {
        alert("No such user found");
      }
    });
}
