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
const observer_dom = (
  dom,
  action_is_intersecting,
  action_not_intersecting
) => {
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
// toggle class on focus{{{
//==============================================================================
//                              Toggle Class on Focus
//==============================================================================
const toggle_class_on_focus = (list) => {
  for (const key in list) {
    list[key].forEach((dom_string) => {
      doms(dom_string).forEach(d => {
        observer_dom(
          d,
          (dom) => dom.classList.add(key),
          (dom) => dom.classList.remove(key)
        );
      })
    });
  }
}; //
/*}}}*/
// add class on focus{{{
//==============================================================================
//                              Add Class on Focus
//==============================================================================
const add_class_on_focus = (list) => {
  for (const key in list) {
    list[key].forEach((dom_string) => {
      doms(dom_string).forEach(d => {
        observer_dom(
          d,
          (dom) => dom.classList.add(key)
        );
      })
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
// update scroll{{{
//==============================================================================
//                              Update Scroll
//==============================================================================
const update_scroll = () => {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty(
      '--scroll',
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  });
};
/*}}}*/

const get_checked_values = (elements) => Object.values(elements).filter(box => box.checked).map(dom => dom.value)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const submitter = (form_id, action) => {
  try {
    doms(form_id)[0].onsubmit = async (event) => {
      event.preventDefault()
      doms('input[type="submit"]')[0].setAttribute('disabled', 'disabled')
      doms('input[type="submit"]')[0].value = 'Submitting...'

      action()

      doms('input[type="submit"]')[0].value = 'Submitted'
      doms(`${form_id} .confirm`)[0].style.opacity = '1'
      await sleep(3000)
      window.location.href = '/';
    }
  } catch (error) {
  }
}
