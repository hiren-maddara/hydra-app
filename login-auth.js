const btnSignin = document.querySelector("#btn-signin");
let inputUsername = document.getElementById("input-username");
let inputPwd = document.querySelector("#input-pwd");
let checkbtnRememberMe = document.querySelector("#checkbtn-remember-me");

function signIn(e) {
   e.preventDefault();

   //do something with the data
   console.log(inputUsername.value, inputPwd.value);

   //validate the input
   //authenticate
   //load the dashboard

   //reset the UI
   const pathToHome = `${window.location.href}`.replace("/", "dashboard") + "";

   window.location.href = "/dashboard.html";

   inputPwd = inputUsername = "";
}

btnSignin.addEventListener("click", signIn);
