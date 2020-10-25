
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCvg-75budaGTHgaoX1hinkYpqUMhABtaM",
      authDomain: "class-test-89130.firebaseapp.com",
      databaseURL: "https://class-test-89130.firebaseio.com",
      projectId: "class-test-89130",
      storageBucket: "class-test-89130.appspot.com",
      messagingSenderId: "901832687647",
      appId: "1:901832687647:web:bfc53cdcd835400c5dd52a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
