const firebaseConfig = {
    apiKey: "AIzaSyCF5NfdQvofrvFYqWvB7Ae2J7MFGeOU5yE",
    authDomain: "letschat-8b984.firebaseapp.com",
    databaseURL: "https://letschat-8b984-default-rtdb.firebaseio.com",
    projectId: "letschat-8b984",
    storageBucket: "letschat-8b984.appspot.com",
    messagingSenderId: "30218718895",
    appId: "1:30218718895:web:5c05cbb099211d3cdc0e5a"
};
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room code"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
//Start code

//End code
});});}
getData();
