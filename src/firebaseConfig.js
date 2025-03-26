/* Initialize Firebase  */

import { initializeApp } from 'firebase/app' // Initialize Firebase
import { getAuth } from 'firebase/auth' // Authentication
import { getFirestore } from 'firebase/firestore' // Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyDrMu57LasVNJS4rTaNH64LsU9L6_BZZ4k',
  authDomain: 'nowably-7967d.firebaseapp.com',
  projectId: 'nowably-7967d',
  storageBucket: 'nowably-7967d.firebasestorage.app',
  messagingSenderId: '539993233584',
  appId: '1:539993233584:web:91cd28739dcb890f130375',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize the services
const auth = getAuth(app) // Firebase Authentication
const db = getFirestore(app) // Firestore

// Export the initialized services
export { auth, db }
export default app // Export the app instance as default
