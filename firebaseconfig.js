// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBdIf190yo_-pZRA2BTtPfeB_sK424_qlA",
  authDomain: "astronomy-website-6bbcfc.firebaseapp.com",
  databaseURL: "https://astronomy-website-6bbcfc.firebaseio.com",
  projectId: "astronomy-website-6bbcfc",
  storageBucket: "astronomy-website-6bbcfc.appspot.com",
  messagingSenderId: "id"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storage = firebase.storage();
var storageRef = storage.ref();

var spaceRef = storageRef.child('BlackHole.png');
storageRef.child('BlackHole.png').getDownloadURL().then(function(url){
   var astroimg = document.getElementById('myImgId')
   astroimg.src = url;
}).catch(function(error) {
});
