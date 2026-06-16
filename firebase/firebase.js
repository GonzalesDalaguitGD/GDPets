import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUEE6oQMxEPWN_jI8Gz_rPBQcQrQrU_y4",
  authDomain: "gdpets-ce764.firebaseapp.com",
  projectId: "gdpets-ce764",
  storageBucket: "gdpets-ce764.firebasestorage.app",
  messagingSenderId: "327638683123",
  appId: "1:327638683123:web:b8ec3191a41a5db952d686",
  measurementId: "G-P0EC4K1NTT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

console.log("AUTH:", auth);
console.log("DB:", db);