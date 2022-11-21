var firebaseConfig = {
    apiKey: "AIzaSyA_Cc4mrSvKui2XFg4puECgc9ejk2uVOcw",
    authDomain: "login-with-firebase-data-ddc55.firebaseapp.com",
    projectId: "login-with-firebase-data-ddc55",
    storageBucket: "login-with-firebase-data-ddc55.appspot.com",
    messagingSenderId: "1048671250983",
    appId: "1:1048671250983:web:25358d028c357a25b0fc02",
    measurementId: "G-79J0Y6LXSF"
  };
  //Initialise variables
  const auth = firebase.auth()
  const database = firebase.database()

  //set up register function
  function signup (){
    //get all input fields
   username = document.getElementById('uname').value
    password = document.getElementById('pass').value
    confirmpassword = document.getElementById('pass').value
  }
  //validate input fields
  if (validate_username(username) == false || validate_password(password) == false){
    alert('username or Password is Otta Line!!')
    return 
  }

   //move on with auth
   auth.createUserWithusernameAndPassword(username,password)
   .then(function(){
    var user = auth.currentUser
    
    var database_ref = database.ref()

    var user_data = {
        username : username,
        password: password,
        last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)






    alert('User Created')

   })
   .catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
   })


   function login() {
    username = document.getElementById('uname').value
    password = document.getElementById('pass').value

    if (validate_username(username) == false || validate_password(password) == false){
        alert('username or Password is Otta Line!!')
        return 
      }
   }

   auth.signInWIthusernameAndPassword(username,password)
   .then(function(){
    var user = auth.currentUser
    
    var database_ref = database.ref()

    var user_data = {
      
        last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).update(user_data)

    alert('User Logged In')


   })
   .catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
   })




  function validate_password(password){
    if (password < 6){
        return false
    }
    else {
        return true
    }
  }

  function validate_field(field) {
    if(field == null){
        return false
    }
    if (field.length <=0){
        return false
    }
    else{
        return true
    }
  }
  
  