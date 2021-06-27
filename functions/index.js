const functions = require("firebase-functions");
const admin = require('firebase-admin')
const sendgrid = require('@sendgrid/mail')

const TEMPLATE_ID = 'd-dc24eadc636643f7854a9790fd0236c4'
const API_KEY = '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'

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp()
const db = admin.firestore()

sendgrid.setApiKey(API_KEY)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.sign_up_club = functions.firestore.document('clubs/{id}')
  .onCreate(async (snap, context) => {

    // const { email_key_person } = snap.data()
    // const key_person = await db.collection('member').add({
    //   email: email_key_person,
    //   club_id: context.params.id,
    //   profile_completed: false
    // })

    //send email using id
    // console.log(member.id)

    // const sendgrid_options = {
    //   to: 'salman104alvi@gmail.com',
    //   from: 'connect@3zero.club',
    //   templateId: TEMPLATE_ID
    // };

    // try {
    //   await sendgrid.send(sendgrid_options);
    // } catch (error) {
    //   //
    // }

    console.log('yo')

  })

// exports.sign_up_member = functions.firestore.document('member/{id}')
//   .onUpdate(async (snap, context) => {
//     const { club_id } = snap.after.data()
//     //send email if club completed
//   })
