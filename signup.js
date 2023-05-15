function signup_action() {
  let iname = document.getElementById("username").value;
  let iemail = document.getElementById("useremail").value;
  let ipasword = document.getElementById("psw").value;
  let iconpassword = document.getElementById("con-psw").value;
  if (ipasword == iconpassword && iname != "" && iemail != "") {
    username = {
      name: iname,
      email: iemail,
      pasword: ipasword,
    };
    fetch(
      "https://finaljsproject-a1c25-default-rtdb.firebaseio.com/username.json",
      {
        method: "post",
        body: JSON.stringify(username),
      }
    ).then(() => {
      alert("Registration is sucessful");
      document.getElementById("username").value = "";
      document.getElementById("useremail").value = "";
      document.getElementById("psw").value = "";
      document.getElementById("con-psw").value = "";
    });
  } else if (ipasword != iconpassword) {
    alert("Both the password must same");
  } else {
    alert("fill  all the detail");
  }
}
