import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAOVk1Lw_lGAHTHix7STmfBC3879Nv-6ho",
    authDomain: "shape-your-ideal-body.firebaseapp.com",
    projectId: "shape-your-ideal-body",
    storageBucket: "shape-your-ideal-body.appspot.com",
    messagingSenderId: "852155453443",
    appId: "1:852155453443:web:6a05432ebaae8ef955be36"
};

const app = initializeApp(firebaseConfig);
export  const auth  = getAuth(app)
export default app