import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDIrkiRrIU4PpbOwsq77ql0h5WsaIbfr5M',
  authDomain: 'crownshopping-b977d.firebaseapp.com',
  databaseURL: 'https://crownshopping-b977d.firebaseio.com',
  projectId: 'crownshopping-b977d',
  storageBucket: 'crownshopping-b977d.appspot.com',
  messagingSenderId: '761405854109',
  appId: '1:761405854109:web:a2d4b513c9b289fe165f74',
  measurementId: 'G-LSKFWN9XZK',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
