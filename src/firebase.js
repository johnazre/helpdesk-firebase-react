import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-D7vca1uHtqwECUny3t2hptfkA3LQ738",
  authDomain: "helpdesk-react-4fbe1.firebaseapp.com",
  databaseURL: "https://helpdesk-react-4fbe1.firebaseio.com",
  projectId: "helpdesk-react-4fbe1",
  storageBucket: "helpdesk-react-4fbe1.appspot.com",
  messagingSenderId: "346966249143"
};
firebase.initializeApp(config);

export default firebase