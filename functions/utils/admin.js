const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://doniyor-git.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
