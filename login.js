  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCJQ5pekW_F421D1uTlK35M4Tdy0BGOocs",
    authDomain: "bandb-21b99.firebaseapp.com",
    databaseURL: "https://bandb-21b99.firebaseio.com",
    projectId: "bandb-21b99",
    storageBucket: "bandb-21b99.appspot.com",
    messagingSenderId: "714417219935"
  };
  firebase.initializeApp(config);


  
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }

        // Sign in with email and pass.
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
    
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          
        });
        
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }
    
    function initApp() {
      // Listening for auth state changes.
      
      firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          // User is signed in.
          console.log("user logged in")
          console.log(user)
          alert('Youve Been Logged in')
          // log out cntrls n
          document.getElementById('quickstart-sign-out').addEventListener('click', function(){
                  console.log('Log out function started')
                  firebase.auth().signOut();
                  alert('You have been logged out') }, false);
                
  
        } else {
          // User is signed out.

        }
      
        document.getElementById('quickstart-sign-in').disabled = false;
      
      });
    
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
          
    }
    window.onload = function() {
      initApp();
    };