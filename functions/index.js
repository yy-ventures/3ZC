const functions = require("firebase-functions");
const admin = require('firebase-admin')
const mailgun = require('mailgun-js');

admin.initializeApp()
const db = admin.firestore()

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.sign_up_club = functions.firestore.document('clubs/{id}')
  .onCreate(async (snap, context) => {

    const {
      email_key_person, name_key_person,
      email_deputy_key_person, name_deputy_key_person,
      email_member_1, name_member_1,
      email_member_2, name_member_2,
      email_member_3, name_member_3,
    } = snap.data()

    const key_person = await db.collection('members').add({
      email: email_key_person,
      club_id: context.params.id,
      role: 'key_person',
      profile_completed: false
    })
    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email_key_person,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc',
          // 'v:name': name_key_person,
          'v:email': email_key_person,
          'v:link': `https://3zero.club/member-information?id=${key_person.id}`
        },
        (error, body) => {
          console.log(body);
        }
      );

    const deputy_key_person = await db.collection('members').add({
      email: email_deputy_key_person,
      club_id: context.params.id,
      role: 'deputy_key_person',
      profile_completed: false
    })
    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email_deputy_key_person,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc',
          // 'v:name': name_deputy_key_person,
          'v:email': email_deputy_key_person,
          'v:link': `https://3zero.club/member-information?id=${deputy_key_person.id}`
        },
        (error, body) => {
          console.log(body);
        }
      );

    const member_1 = await db.collection('members').add({
      email: email_member_1,
      club_id: context.params.id,
      role: 'member',
      profile_completed: false
    })
    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email_member_1,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc',
          // 'v:name': name_member_1,
          'v:email': email_member_1,
          'v:link': `https://3zero.club/member-information?id=${member_1.id}`
        },
        (error, body) => {
          console.log(body);
        }
      );

    const member_2 = await db.collection('members').add({
      email: email_member_2,
      club_id: context.params.id,
      role: 'member',
      profile_completed: false
    })
    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email_member_2,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc',
          // 'v:name': name_member_2,
          'v:email': email_member_2,
          'v:link': `https://3zero.club/member-information?id=${member_2.id}`
        },
        (error, body) => {
          console.log(body);
        }
      );

    const member_3 = await db.collection('members').add({
      email: email_member_3,
      club_id: context.params.id,
      role: 'member',
      profile_completed: false
    })
    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email_member_3,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc',
          // 'v:name': name_member_3,
          'v:email': email_member_3,
          'v:link': `https://3zero.club/member-information?id=${member_3.id}`
        },
        (error, body) => {
          console.log(body);
        }
      );

  })

exports.sign_up_member = functions.firestore.document('member/{id}')
  .onUpdate(async (snap, context) => {

    const { email, name_first, name_last } = snap.after.data()

    mailgun({ apiKey: 'ca5c81769102a5a418d0f574881f0ef5-6e0fd3a4-76989148', domain: 'mail.3zero.club' })
      .messages()
      .send(
        {
          from: '3ZERO Club <noreply@3zero.club>',
          to: email,
          subject: "3ZERO Club Registration: Complete your profile",
          template: 'welcome_3zc_member',
        },
        (error, body) => {
          console.log(body);
        }
      );
    //send email if club completed
  })
