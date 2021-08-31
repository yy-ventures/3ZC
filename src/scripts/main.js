// dom{{{
//==============================================================================
//                              Select Dom
//==============================================================================
const doms = (selector) => document.querySelectorAll(selector);
/*}}}*/
// observer dom{{{
//==============================================================================
//                              Observer Dom
//==============================================================================
const observer_dom = (dom, action_is_intersecting, action_not_intersecting) => {
  const io = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        action_is_intersecting(entry.target);
        if (!action_not_intersecting) io.disconnect();
      } else if (action_not_intersecting) {
        action_not_intersecting(entry.target);
      }
    });
  });
  io.observe(dom);
};
/*}}}*/
// add class on focus{{{
//==============================================================================
//                              Add Class on Focus
//==============================================================================
export const add_class_on_focus = (list) => {
  for (const key in list) {
    list[key].forEach((dom_string) => {
      doms(dom_string).forEach((d) => {
        observer_dom(d, (dom) => dom.classList.add(key));
      });
    });
  }
}; //
/*}}}*/
// toggle navigation on_scroll{{{
//==============================================================================
//                       Toggle Navigation on Scroll
//==============================================================================
const toggle_navigation_on_scroll = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.position_old) {
      if (!window.nav_hidden) {
        doms('nav')[0].style.transform = 'translateY(-100%)';
        window.nav_hidden = true;
      }
    } else if (window.nav_hidden) {
      doms('nav')[0].style.transform = 'translateY(0)';
      window.nav_hidden = false;
    }
    window.position_old = window.scrollY;
  });
};
/*}}}*/
//  get checked values{{{
const get_checked_values = (elements) =>
  Object.values(elements)
    .filter((box) => box.checked)
    .map((dom) => dom.value);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// }}}
//  submitter{{{
const submitter = (form_id, action) => {
  try {
    doms(form_id)[0].onsubmit = async (event) => {
      event.preventDefault();
      doms('input[type="submit"]')[0].setAttribute('disabled', 'disabled');
      doms('input[type="submit"]')[0].value = 'Submitting...';

      action();

      doms('input[type="submit"]')[0].value = 'Submitted';
      doms(`${form_id} .confirm`)[0].style.opacity = '1';
      await sleep(3000);
      window.location.href = '/';
    };
  } catch (error) {}
};
// }}}
//  api post{{{
const api_post = async (url, body, token) => {
  try {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body: JSON.stringify(body),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
// }}}
//  api post form{{{
const api_post_form = async (url, body) => {
  try {
    const form = new FormData();
    for (const key in body) {
      form.append(key, JSON.stringify(body[key]));
    }
    const init = {
      method: 'POST',
      body: form,
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
// }}}
//  api get{{{
const api_get = async (url, token) => {
  try {
    const init = {
      method: 'GET',
      ...(token && {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
// }}}
//  firebase{{{
firebase.initializeApp({
  apiKey: 'AIzaSyCDFazPZubHCKaSVn8dPvBZHvwJyd4cMZg',
  authDomain: 'three-zero-club.firebaseapp.com',
  projectId: 'three-zero-club',
  storageBucket: 'three-zero-club.appspot.com',
  messagingSenderId: '777429204977',
  appId: '1:777429204977:web:0d79f1fbeaff747a884e50',
  measurementId: 'G-1ZTS4B7X4H',
});
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

const sign_in_google = async () => {
  try {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch (error) {
    console.log(erro);
  }
};

// (async () => {
//   console.log(await db.collection('clubs').get())
// })();
// }}}
//  dom stuff{{{
add_class_on_focus({
  move_back: ['.moved_right', '.moved_left', '.moved_down'],
  fade_in: ['.faded_out'],
});

toggle_navigation_on_scroll();

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
  const preloader = doms('#preloader')[0];
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.remove();
  }, 1500);
};

try {
  doms(`nav a[href="${location.pathname.split('/')[1]}"]`)[0].classList.add(
    'active_link'
  );
} catch {
  doms('nav .menu a:first-of-type')[0].classList.add('active_link');
}
// }}}

//  form contact{{{
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
// }}}
//  form register{{{
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

  //  =======================================================================
  //  =                             GC Backend
  // =======================================================================

  const {
    club_focus_areas_list,
    club_spirits_list,
    club_declarations_list,
    geo_countries_list,
  } = await api_get(
    'https://3zeroclub.socialbusinesspedia.com/club/club_api/create_club'
  );

  const club_focus_area_id = Object.values(club_focus_areas_list).indexOf('WASH') + 1;
  const country_id = Object.values(geo_countries_list).indexOf('Bangladesh') + 1;

  const body = {
    club_focus_area_id: 3, // lookup [done]
    club_3zero_focus_ids: ['zero_unemployment', 'zero_wealth_concentration'],
    club_spirit_ids: ['2', '1'], // lookup [done]
    declaration_ids: ['2', '1'],
    country_id: 1, // lookup [done]
    city_id: 2, // lookup []
    state_id: 1, // lookup []
    postal_or_zip: 123,
    street_address: 'yy ventures',
    age_of_youngest_member: 12,
    age_of_oldest_member: 34,
    members: [
      {
        club_member_role_id: 1,
        first_name: 'S',
        last_name: 'M 1',
        email: 'sm@sad.com',
      },
      {
        club_member_role_id: 2,
        first_name: 'S',
        last_name: 'M 2',
        email: 'sm@sad.com',
      },
      {
        club_member_role_id: 3,
        first_name: 'S',
        last_name: 'M 3',
        email: 'sm@sad.com',
      },
      {
        club_member_role_id: 4,
        first_name: 'S',
        last_name: 'M 4',
        email: 'sm@sad.com',
      },
      {
        club_member_role_id: 5,
        first_name: 'S',
        last_name: 'M 5',
        email: 'sm@sad.com',
      },
    ],
  };

  const response = await api_post_form(
    'https://3zeroclub.socialbusinesspedia.com/club/club_api/club',
    body
  );
  console.log(response);


// }}}
//  register member{{{
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
// }}}
//  exp{{{
//  ===========================================================================
//  =                             Exp
//  ===========================================================================

//  let input = [
//  '3ZERO Clubs plant the seeds of 3 zeros in the minds of young people.',
//  'Youth is power. But have you decided what you want to use it for?',
//  ];
//  const club_spirit_ids = [];
//  input.forEach((i) => {
//  const out = Object.values(club_spirits_list).indexOf(i) + 1;
//  if (out) club_spirit_ids.push(out);
//  });
//  console.log(club_spirit_ids);

//  const input_2 = [
//  'We are fully aligned with the goals of three zeros and commit ourselves to work for promoting those goals through our own actions.',
//  'We have decided to form a 3ZERO Club as per the guidelines of the 3ZERO Club Handbook.',
//  ];
//  const declaration_ids = [];
//  input_2.forEach((i) => {
//  const out = Object.values(club_declarations_list).indexOf(i) + 1;
//  if (out) declaration_ids.push(out);
//  });
//  console.log(declaration_ids);


//  (async () => {
//  console.log(
//  );
//  })();

// const club_members_docs = await db.collection('members').where('club_id', '==', 'zrHIFHBJHvSz3V5jFjeh').get()
// club_members_docs.forEach(doc => {
//   console.log(doc.email)
// })

// }}}
