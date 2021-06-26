const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require('firebase-admin')
admin.initializeApp()

// const db = admin.firestore()

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.logActivities = functions.firestore.document('clubs/{id}')
  .onCreate(async (snap, context) => {
    const { email_key_person, } = snap.data()
    // console.log(email_key_person)
    //send email
  })
