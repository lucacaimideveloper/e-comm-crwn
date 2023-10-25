import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDyvGWLAkEVjpp_JwNvfzWNJBsAoKdmONU",

  authDomain: "crown-clothing-db-f9e22.firebaseapp.com",

  projectId: "crown-clothing-db-f9e22",

  storageBucket: "crown-clothing-db-f9e22.appspot.com",

  messagingSenderId: "961603046192",

  appId: "1:961603046192:web:6945d6d1184a8cb066d6f5",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});
//
//
export const auth = getAuth();
//
//
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//
//
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
//
//
//this allowd us to get or set a document
export const db = getFirestore();
//
//
export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  //batch gives us methods set events that we can acces when
  // will be the moment of the transaction
  const batch = writeBatch(db);
  //
  objectsToAdd.forEach((object) => {
    // for each obj we pass the param1 object it-self param2 a key
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //we will gave a docReference also if the object doesn't exist yet
    // and the obj it self to form the json structure
    batch.set(docRef, object);
  });
  //
  await batch.commit();
  console.log("done");
};
//
//this helper funtion isolate the areas that might change
export const getCategoriesAndObject = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

//
//
//will take data and store it insede firestore
export const createUserDocFromAuth = async (userAuth, addInfo = {}) => {
  //check if there is a doc
  // param = db, collection, identifier(unic id)
  if (!userAuth) return;
  //check
  const userDocRef = doc(db, "user", userAuth.id);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //
  //if exist true set user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    //
    // if user do not exist create with following params
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...addInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
//
//
export const createAuthenticationuserEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//
//
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//
//
export const signOutUser = async () => await signOut(auth);
//
// when ever you enstanciate this func you have to give me a call back
export const onAuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
