import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirbaseAuth = () => {

    initializeApp(firebaseConfig);
}

export default initFirbaseAuth;