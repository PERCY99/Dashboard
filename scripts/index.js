document.getElementById('logout').addEventListener('click', function(event) {
  firebase.auth().signOut();
  });
function logout(){
  firebase.auth().signOut();
}

