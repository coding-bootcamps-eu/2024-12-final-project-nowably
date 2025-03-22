/* Initialize Firebase  */

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrMu57LasVNJS4rTaNH64LsU9L6_BZZ4k',
  authDomain: 'nowably-7967d.firebaseapp.com',
  projectId: 'nowably-7967d',
  storageBucket: 'nowably-7967d.firebasestorage.app',
  messagingSenderId: '539993233584',
  appId: '1:539993233584:web:91cd28739dcb890f130375',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
export default app
