// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBdIf190yo_-pZRA2BTtPfeB_sK424_qlA",
  authDomain: "astronomy-website-6bbcfc.firebaseapp.com",
  databaseURL: "https://astronomy-website-6bbcfc.firebaseio.com",
  projectId: "astronomy-website-6bbcfc",
  storageBucket: "astronomy-website-6bbcfc.appspot.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storageRef = firebase.storage();

/*var spaceRef = storageRef.child('AquqrxpMGMq8ok9Xf9HF9k.jpg');
var path = spaceRef.fullPath;
var gsReference = storage.refFromURL('gs://astronomy-website-6bbcf.appspot.com')

storageRef.child('AquqrxpMGMq8ok9Xf9HF9k.jpg').getDownloadURL().then(function(url) {
    var test = url;
}).catch(function(error) {*/
