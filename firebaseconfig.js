// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBdIf190yo_-pZRA2BTtPfeB_sK424_qlA",
  authDomain: "astronomy-website-6bbcf.firebaseapp.com",
  databaseURL: "https://astronomy-website-6bbcf.firebaseio.com",
  projectId: "astronomy-website-6bbcf",
  storageBucket: "astronomy-website-6bbcf.appspot.com",
  messagingSenderId: "372062911875",
  appId: "1:372062911875:web:234240f1bd206c68640ab6",
  measurementId: "G-XVLPST579K"
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
