

var firebaseConfig = {
  apiKey: "AIzaSyBqCCkGlmr502RhWFwIA9rtJBD4UTeADbU",
  authDomain: "homework-project-49363.firebaseapp.com",
  databaseURL: "https://homework-project-49363-default-rtdb.firebaseio.com",
  projectId: "homework-project-49363",
  storageBucket: "homework-project-49363.appspot.com",
  messagingSenderId: "457821717879",
  appId: "1:457821717879:web:22fa74a930c1b9f1178d72"
};

firebase.initializeApp(firebaseConfig);

function addRoom() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    

     
      });});}
getData();
