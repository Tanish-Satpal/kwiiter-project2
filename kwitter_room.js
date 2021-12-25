var firebaseConfig = {
    apiKey: "AIzaSyBYQECEQJdWmL-XI6P4a1i5jOJLZ3gRjww",
    authDomain: "my-kwitter-project.firebaseapp.com",
    projectId: "my-kwitter-project",
    storageBucket: "my-kwitter-project.appspot.com",
    messagingSenderId: "638606439437",
    appId: "1:638606439437:web:7c27c9a5514c18f9959144"
  };
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

  });});}
//getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  console.log(room_name)
  firebase.database().ref("/").child(user_name).update({
        purpose:"adding room"
  });
  document.getElementById("room_name").value="";
}