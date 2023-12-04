// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;






// //---------------------------------------------------------
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBj_O0rdcnS4-arTr_9YFcP_Ng_OnCi7zo",
//   authDomain: "contesthub2.firebaseapp.com",
//   projectId: "contesthub2",
//   storageBucket: "contesthub2.appspot.com",
//   messagingSenderId: "938508650941",
//   appId: "1:938508650941:web:30b6bdea96684cf03b2ad4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;