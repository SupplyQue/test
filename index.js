



function login() {

	
	var userEmail = document.getElementById("inputEmail").value;
	
	var userPass = document.getElementById("inputPassword").value;
	// body...
	//window.alert(userEmail+"this shit is crazy"+userPass);
	

}
firebase.auth().signInWithEmailAndPassword(userEmail,userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error:fuck off")
  // ...
});