firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    
    window.location.href = "http://percy99.me/Dashboard";
  
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;

    if(user){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
const loginForm = document.querySelector('#login-form');
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    loginForm.reset();

    // ...
  });

}
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
  function logout(){
  firebase.auth().signOut();
}
