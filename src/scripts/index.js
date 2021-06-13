import { add_class_on_focus, toggle_navigation_on_scroll } from './dom_utils'

add_class_on_focus({
  ['.moved_right']: 'move_back',
  ['.moved_left']: 'move_back',
  ['.moved_down']: 'move_back',
  ['.faded_out']: 'fade_in',
});

// toggle_navigation_on_scroll()

// document.querySelector('#intro img').onload = () => {
//   add_class_on_focus({
//     ['.moved_right']: 'move_back',
//     ['.moved_left']: 'move_back',
//     ['.faded_out']: 'fade_in',
//   });
// }

// import { update_scroll, toggle_class_on_focus } from './dom_utils'

// toggle_class_on_focus({
//   ['.title']: 'glow',
// });

// update_scroll()
