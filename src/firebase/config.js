import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAdLOIhS3FwMfRJ8gKNF6l90aU87IHJNDo",
  authDomain: "fiberart-webshop.firebaseapp.com",
  databaseURL: "https://fiberart-webshop-default-rtdb.firebaseio.com/",
  storageBucket: "fiberart-webshop.appspot.com",
};
firebase.initializeApp(config);

var db = firebase.database();

export { db };
