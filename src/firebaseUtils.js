// src/firebaseUtils.js
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Función para obtener el rol del usuario autenticado
export async function getUserRole(uid) {
  const db = getFirestore();
  const userRef = doc(db, "users", uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    return userDoc.data().role; // Devuelve el rol del usuario
  } else {
    console.error("El documento del usuario no existe.");
    return null;
  }
}
