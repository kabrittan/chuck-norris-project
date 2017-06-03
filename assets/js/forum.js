// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2WNoXwQQx_OWIi_fituHWbMCdo5OGc1Y",
  authDomain: "forum-posts-norris.firebaseapp.com",
  databaseURL: "https://forum-posts-norris.firebaseio.com",
  projectId: "forum-posts-norris",
  storageBucket: "forum-posts-norris.appspot.com",
  messagingSenderId: "1089739002370"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var post = "";
var postTitle = "";
var userId = "";
var e = 0;

// Click Button changes what is stored in firebase
$("#submit-post").on("click", function() {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  postTitle = $("#title-post").val().trim();
  post = $("#post").val().trim();
  userId = postTitle;

  // Store e in firebase??

  function ePush() {
    e++;
  }

  // Change what is saved in firebase
  database.ref('norris-post/' + userId).push({
    postTitle: postTitle,
    post: post
  });
});

// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref("norris-post").on("child_added", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

console.log("TEST!");