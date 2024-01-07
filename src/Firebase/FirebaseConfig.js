
// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc  } from "firebase/firestore";

// TODO: Agrega SDK para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de su aplicación web
const firebaseConfig = {
    apiKey: "AIzaSyBAfx7iG-t1vLVBIDNeF8yNxWCHLOKc49k",
    authDomain: "restaurante0a1.firebaseapp.com",
    projectId: "restaurante0a1",
    storageBucket: "restaurante0a1.appspot.com",
    messagingSenderId: "829796485637",
    appId: "1:829796485637:web:a4d7825e55f4dc838a2a6c",
    measurementId: "G-3C2NQYS3JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// IInicialice Cloud Firestore y obtenga una referencia al servicio
const db = getFirestore(app);

// export { app, db };


export async function GrabarRegistro(Registro) {    

    try {
        
        const IdDocumento = new Date().toLocaleString("sv-SE");
        // await setDoc(doc(db, "Estudio", '' + IdDocumento.toLocaleString("sv-SE")), Registro);
        await setDoc(doc(db, "Estudio", ''+ IdDocumento), Registro);

// Declaración de cookie para indicar que ya fue respondida la encuesta
        document.cookie = "Respondida=SI; max-age=60; path=/"

        localStorage.setItem("Respondio", "SI");
        
        
    } catch (e) {
        //alert("ERROR AL GRABAR:" + error(e));    
        console.error(e); // handle your error here
    } finally {        
        alert("- RESPUESTAS GRABADAS -, GRACIAS POR PARTICIPAR, Su opinion es muy importante para nosotros ");    
        location.replace('https://restaurante0a1.web.app/');
    }

}
