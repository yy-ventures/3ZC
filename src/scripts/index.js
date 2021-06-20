add_class_on_focus({
  'move_back': ['.moved_right', '.moved_left', '.moved_down'],
  'fade_in': ['.faded_out'],
});

// toggle_navigation_on_scroll()

doms('#form_sign_up')[0].onsubmit = async (event) => {
  event.preventDefault()
  window.location.href = '/register';
  // const { full_name, email } = Object.fromEntries(new FormData(event.target))
  // console.log(full_name, email)
  // try{
  //   const result = await auth.createUserWithEmailAndPassword(email, 'asdflkj')
  //   console.log(result)
  // }catch(error){
  //   console.log(error)
  // }

}

doms('#sign_in_google')[0].onclick = () => {
  sign_in_google()
}
