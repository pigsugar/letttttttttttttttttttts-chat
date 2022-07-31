var firebaseConfig = {
    apiKey: "AIzaSyC4Q9TfATwdDLhx0DrJ7Q3ESkL_VJ9rE9c",
    authDomain: "kwitter-4ab07.firebaseapp.com",
    databaseURL: "https://kwitter-4ab07-default-rtdb.firebaseio.com",
    projectId: "kwitter-4ab07",
    storageBucket: "kwitter-4ab07.appspot.com",
    messagingSenderId: "14497021027",
    appId: "1:14497021027:web:60abf637f9a76e86488c56"
  };
  

  firebase.initializeApp(firebaseConfig);




user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;




    } });  }); }
getData();
