add_class_on_focus({
  move_back: ['.moved_right', '.moved_left', '.moved_down'],
  fade_in: ['.faded_out'],
});

toggle_navigation_on_scroll();

window.onload = () => {
  const preloader = doms('#preloader')[0];
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.remove();
  }, 1500);
};

try {
  doms(`nav a[href="/${location.pathname.split('/')[1]}"]`)[0].classList.add(
    'active_link'
  );
} catch {
  //  doms('nav .menu a:first-of-type')[0].classList.add('active_link');
}

submitter('#form_contact', async () => {
  const { name, email, message } = Object.fromEntries(
    new FormData(event.target)
  );

  await api_post(
    'https://us-central1-three-zero-club.cloudfunctions.net/send_email',
    {
      name,
      from: email,
      to: 'connect@3zero.club',
      subject: 'Message to 3ZERO Club',
      text: message,
    }
  );
});

submitter('#form_register_club', async () => {
  const {
    name_kp,
    email_kp,
    name_dkp,
    email_dkp,
    name_y1,
    email_y1,
    name_y2,
    email_y2,
    name_y3,
    email_y3,
    age_oldest,
    age_youngest,
    age_difference,
    zipcode,
    address,
    state,
  } = Object.fromEntries(new FormData(event.target));

  const zeros = get_checked_values(event.target.elements['zeros']);
  const spirit = get_checked_values(event.target.elements['spirit']);
  const declerations = get_checked_values(
    event.target.elements['declerations']
  );

  const focus_area = doms('#form_register_club #focus')[0].value;
  const country = doms('#form_register_club #country')[0].value;

  await db.collection('clubs').add({
    name_key_person: name_kp,
    email_key_person: email_kp,
    name_deputy_key_person: name_dkp,
    email_deputy_key_person: email_dkp,
    name_y1,
    email_y1,
    name_y2,
    email_y2,
    name_y3,
    email_y3,
    age_oldest,
    age_youngest,
    age_difference,
    zipcode,
    spirit,
    address,
    state,
    country,
    declerations,
    attractive_zeros: zeros,
    focus_area,
  });
});

submitter('#form_register_member', async () => {
  const {
    name_first,
    name_last,
    email,
    date_of_birth,
    profession,
    organization,
    contact,
    position,
  } = Object.fromEntries(new FormData(event.target));
  const id = new URL(window.location.href).searchParams.get('id');

  const zeros = get_checked_values(event.target.elements['zeros']);
  const reasons = get_checked_values(event.target.elements['reasons']);

  const gender = doms('#form_register_member #gender')[0].value;
  const education = doms('#form_register_member #education')[0].value;

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
    zeros,
    reasons,
    education,
  });
});
