<template lang="pug">
  main#sign_up
    section
      article
        h3 Welcome to
        h3 3ZERO Club!
        form#form_register_club
          .field
            input(placeholder=" " name="email" required)
            p Name of Key Person
          .field
            input(placeholder=" " name="password" required)
            p Name of Key Person

          input.submit(type="submit" value="Submit")
          p Not registered?
          a Regsiter Now!

          p.confirm The form was successfully submitted. Redirecting you to Home.

</template>
