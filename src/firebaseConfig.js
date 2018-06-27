import firebase from 'firebase'
import 'firebase/firestore'

//This is wrong.  This is sooo wrong. Put this in an env later and gitignore it.
const config = {
    apiKey: "AIzaSyD9Knm8tbaM4scUKruiaXEoP8kikGlr_Uo",
    authDomain: "pas-fe793.firebaseapp.com",
    databaseURL: "https://pas-fe793.firebaseio.com",
    projectId: "pas-fe793",
    storageBucket: "pas-fe793.appspot.com",
    messagingSenderId: "981220879192"
};

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}