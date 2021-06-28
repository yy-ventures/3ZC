add_class_on_focus({
  'move_back': ['.moved_right', '.moved_left', '.moved_down'],
  'fade_in': ['.faded_out'],
});

// toggle_navigation_on_scroll()

// doms('#form_sign_up')[0].onsubmit = async (event) => {
//   event.preventDefault()
//   window.location.href = '/register';
//   // const { full_name, email } = Object.fromEntries(new FormData(event.target))
//   // console.log(full_name, email)
//   // try{
//   //   const result = await auth.createUserWithEmailAndPassword(email, 'asdflkj')
//   //   console.log(result)
//   // }catch(error){
//   //   console.log(error)
//   // }
// }

// doms('#sign_in_google')[0].onclick = () => {
//   sign_in_google()
// }

window.onload = () => {
  const preloader = doms('#preloader')[0]
  preloader.style.opacity = '0'
  setTimeout(() => {
    preloader.remove()
  }, 2000);
}

try {
  doms(`nav a[href="${location.pathname.split("/")[1]}"]`)[0].classList.add('active_link')
} catch {
  doms('nav .menu a:first-of-type')[0].classList.add('active_link')
}

try {
  doms('#form_register_club')[0].onsubmit = async (event) => {
    event.preventDefault()
    const {
      name_kp,
      email_kp,
      name_dkp,
      email_dkp,
      name_m1,
      email_m1,
      name_m2,
      email_m2,
      name_m3,
      email_m3,
      zipcode,
      address,
      state
    } = Object.fromEntries(new FormData(event.target))

    const zeros = get_checked_values(event.target.elements['zeros'])
    const spirit = get_checked_values(event.target.elements['spirit'])

    const focus_area = doms('#form_register_club #focus')[0].value
    const country = doms('#form_register_club #country')[0].value

    // await db.collection('clubs').add({
    //   name_key_person: name_kp,
    //   email_key_person: email_kp,
    //   name_deputy_key_person: name_dkp,
    //   email_deputy_key_person: email_dkp,
    //   name_member_1: name_m1,
    //   email_member_1: email_m1,
    //   name_member_2: name_m2,
    //   email_member_2: email_m2,
    //   name_member_3: name_m3,
    //   email_member_3: email_m3,
    //   zipcode,
    //   spirit,
    //   address,
    //   state,
    //   country,
    //   attractive_zeros: zeros,
    //   focus_area,
    // })

    // const club_members_docs = await db.collection('members').where('club_id', '==', 'zrHIFHBJHvSz3V5jFjeh').get()
    // club_members_docs.forEach(doc => {
    //   console.log(doc.email)
    // })

    // console.log('done')

    doms('#confirm')[0].style.display = 'block'
    window.location.href = '/';

  }


} catch (error) {
  //
}

try {
  doms('#form_register_member')[0].onsubmit = async (event) => {
    event.preventDefault()
    const {
      name_first,
      name_last,
      email,
      date_of_birth,
      profession,
      organization,
      contact,
      position
    } = Object.fromEntries(new FormData(event.target))
    const id = new URL(window.location.href).searchParams.get("id")

    const gender = doms('#form_register_member #gender')[0].value
    const education = doms('#form_register_member #education')[0].value

    await db.collection('members').doc(id).update({
      name_first,
      name_last,
      email,
      date_of_birth,
      profession,
      organization,
      contact,
      position,
      profile_completed: true,
      gender,
      education
    })

    console.log('done')
    doms('#confirm')[0].style.display = 'block'
    // window.location.href = '/';

  }
} catch (error) {
  //
}

