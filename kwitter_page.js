 // Your web app's Firebase configuration
 var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  

 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        
//End code
      } });  }); }


function updateLike(message_id)
{
  

}

function logout() {

}
