/* Initialize Firebase  */

import { initializeApp } from 'firebase/app' // Initialize Firebase
import { getAuth } from 'firebase/auth' // Authentication
import { getFirestore } from 'firebase/firestore' // Firestore

const firebaseConfig = {
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize the services
const auth = getAuth(app) // Firebase Authentication
const db = getFirestore(app) // Firestore

// Export the initialized services
export { auth, db }
export default app // Export the app instance as default
