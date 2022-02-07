// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy4WH4iu1dbrAEetgriXx5e-pJKgPqkfo",
  authDomain: "sign-in-page-99471.firebaseapp.com",
  projectId: "sign-in-page-99471",
  storageBucket: "sign-in-page-99471.appspot.com",
  messagingSenderId: "546306975980",
  appId: "1:546306975980:web:9c3a87f80a0e618017ddc9",
  measurementId: "G-RY4KVB4275"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();

//signup function
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const uid = auth.createUserWithEmailAndPassword(email.value,password.value);
    uid.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
    function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const uid = auth.signInWithEmailAndPassword(email.value,password.value);
    uid.catch(e=>alert(e.message));
}

//signOut
function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active user :"+email);
    }
    else{
        alert("No Active user Found")
    }
})