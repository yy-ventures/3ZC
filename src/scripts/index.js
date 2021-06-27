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
      email_kp,
      email_dkp,
      email_m1,
      email_m2,
      email_m3,
      zipcode,
      address,
      state
    } = Object.fromEntries(new FormData(event.target))

    const zeros = get_checked_values(event.target.elements['zeros'])

    const focus_area = doms('#form_register_club #focus')[0].value
    const country = doms('#form_register_club #country')[0].value

    // db.collection('clubs').add({
    //   email_key_person: email_kp,
    //   email_deputy_key_person: email_dkp,
    //   email_member_1: email_m1,
    //   email_member_2: email_m2,
    //   email_member_3: email_m3,
    //   zipcode,
    //   address,
    //   state,
    //   country,
    //   attractive_zeros: zeros,
    //   focus_area,
    // })

    db.collection('clubs').add({
      email_key_person: email_kp,
    })
    console.log('done')

    // window.location.href = '/';

    // try{
    //   const result = await auth.createUserWithEmailAndPassword(email, 'asdflkj')
    //   console.log(result)
    // }catch(error){
    //   console.log(error)
    // }

  }


} catch (error) {
  //
}

try {
  doms('#form_register_member')[0].onsubmit = async (event) => {
    event.preventDefault()
    const {
      email,
    } = Object.fromEntries(new FormData(event.target))
    const id = new URL(window.location.href).searchParams.get("id")

    await db.collection('member').doc(id).update({
      profile_completed: true,
    })

    console.log('done')
  }
} catch (error) {
  //
}

