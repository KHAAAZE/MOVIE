import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBY1KXjrci6XGxeAftY7WMljvkfHCOQPys",
  authDomain: "database-80e6e.firebaseapp.com",
  databaseURL: "https://database-80e6e.firebaseio.com",
  projectId: "database-80e6e",
  storageBucket: "database-80e6e.appspot.com",
  messagingSenderId: "472524243530"
};
const fire = firebase.initializeApp(config);
export default fire;
