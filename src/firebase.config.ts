import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { toast } from "./pages/toast";

var firebaseConfig = {
    apiKey: "AIzaSyA24lkiA2PMDphylXFBgHyiEOUoEbP3igQ",
    authDomain: "covid-fourteen-days.firebaseapp.com",
    projectId: "covid-fourteen-days",
    storageBucket: "covid-fourteen-days.appspot.com",
    messagingSenderId: "670269718434",
    appId: "1:670269718434:web:b408a08ae4fb3a9274bcfb",
    measurementId: "G-1YVQFPSKJJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export  async function userLogin(username:string,password:string){
    const email = `${username}@gmail.com`
        
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log(`${res ?'login success':'login failed'}`)
            return true
        } catch (err) {
          toast(err.message,4000)
            console.log(err)
          return false
        }
}
export async function registerUser(username,password) {
   try {
    const email = `${username}@gmail.com`
    const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
    console.log(res)
    return true
   } catch (err) {
    console.log(err)
     return false
    
   }
}

