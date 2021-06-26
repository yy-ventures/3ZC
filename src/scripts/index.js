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

const get_checked_values = (elements) => Object.values(elements).filter(box => box.checked).map(dom => dom.value)

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

  console.log(zeros)

  // window.location.href = '/register';
  // try{
  //   const result = await auth.createUserWithEmailAndPassword(email, 'asdflkj')
  //   console.log(result)
  // }catch(error){
  //   console.log(error)
  // }

}
