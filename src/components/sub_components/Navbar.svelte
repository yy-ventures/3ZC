<template lang="pug">
    nav
      input#toggler(type="checkbox")
      label(for="toggler" )#menu_toggler_label
        #menu_button
          #bar

      a(href="/")
        img(src="/images/3ZC.svg")
      .menu
        //- a(href="/").underline Home
        a(href="/about").underline About
        a(href="/events").underline Events
        a(href="/register").underline Register
        a(href="/3z_global_centre") 3Z Global Centre
</template>
