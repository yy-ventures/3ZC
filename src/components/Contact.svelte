<template lang="pug">
  #contact_section
    //- section#location
    section#location.grid.two

      //- article.moved_left
      //-   iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2938915827895!2d90.34826811408531!3d23.80814619248678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14bae48ccf5%3A0x4b677293410b7502!2sYY%20Ventures%20Limited!5e0!3m2!1sen!2sbd!4v1624126967642!5m2!1sen!2sbd" allowfullscreen="" loading="lazy").shadow

      //- article.moved_left
      article#contact
        h2 Write to Us
        form#form_contact
          .field
            input(type="text" name="name" placeholder=" ")
            p Full Name
          .field
            input(type="email" name="email" placeholder=" ")
            p Email Address
          .field
            textarea(name="message" rows='5' placeholder=" ")
            p Message
          input(type="submit" value="Send Message" )
          p.confirm Your message was sent. Redirecting you to Home.

      //- article.moved_right
      article
        #text_container
          p EXO, 3Z Global Centre
          p 9th Floor, Grameen Telecom Bhaban,
          p Zoo Road, Mirpur 1, Dhaka-1216, Bangladesh
          p#email Email: connect@3zero.club
</template>
