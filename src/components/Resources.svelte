<script>
  import Header  from "./sub_components/Header.svelte";

	const data_header = {
		image: 'hero_resources',
		h2: '',
		h1: 'Resources',
	}
</script>

<template lang="pug">
  Header({...data_header})
  #resources
    section
      //- h2 3ZERO Club - Resources

      //- h3.title Documents
      h3.title Documents, Branding & Logos
      .resources_item_container.grid.two

        .resources_item
          aside
            img(src="/images/optimized/resources_welcome-note.jpg").shadow
          article
            h3.faded_out(style="--order: 1") Welcome to 3ZERO Club
            p.faded_out(style="--order: 2") This document will give a brief overview of 3ZERO Club, Circles, Networks, Support Organizations, and 3Z Global Centre.
            a.faded_out(href="/resources/3ZERO_Club_Welcome_Note.pdf" target="_blank" rel="noopener noreferrer" download style="--order: 3").orange_button Download

        .resources_item
          aside
            img(src="/images/optimized/resources_concept_note.jpg").shadow
          article
            h3.faded_out(style="--order: 1") Concept Note
            p.faded_out(style="--order: 2") The concept note is an overview of 3ZERO Club.  It contains brief descriptions about 3ZERO Club its activities and structure.
            a.faded_out(href="/resources/3ZERO_Club_Concept_Note.pdf" target="_blank" rel="noopener noreferrer" download style="--order: 3").orange_button Download

        .resources_item
          aside
            img(src="/images/optimized/resources_brand_guideline.jpg").shadow
          article
            h3.faded_out(style="--order: 2") Brand Guideline
            p.faded_out(style="--order: 3") The brand guideline for 3ZERO Club contains all the necessary information and guidelines on how to incorporate branding for all kinds of communication, both online and offline.
            a.faded_out(href="/resources/3ZERO_Club_Brand_Guideline.pdf" target="_blank" rel="noopener noreferrer" download style="--order: 4").orange_button Download

        .resources_item
          aside
            img(src="/images/resources_handbook.png").shadow
          article
            h3.faded_out(style="--order: 2") Handbook
            p.faded_out(style="--order: 3") A complete handbook about 3ZERO Club.
            a.faded_out(href="/resources/3ZERO_Club_Handbook.pdf" target="_blank" rel="noopener noreferrer" download style="--order: 4").orange_button Download

        .resources_item
          aside
            img(src="/images/optimized/resources_logos.jpg").shadow
          article
            h3.faded_out(style="--order: 2") Logos
            p.faded_out(style="--order: 3") The logo of 3ZERO Club in commonly used formats.
            a.faded_out(href="/resources/3ZERO_Club_logos.zip" target="_blank" rel="noopener noreferrer" download style="--order: 4").orange_button Download

        //- .resources_item
        //-   aside
        //-     img(src="/images/optimized/who_we_are").shadow
        //-   article
        //-     h3 Handbook
        //-     p A complete handbook about 3ZERO Club.
        //-     a(href="#" target="_blank" rel="noopener noreferrer") Download

        //- .resources_item
        //-   aside
        //-     img(src="/images/optimized/who_we_are").shadow
        //-   article
        //-     h3 Flyer
        //-     p The logo of 3ZERO Club, including all variations.
        //-     a(href="" target="_blank" rel="noopener noreferrer") Download

      //- h3.title Logo & Branding
      //- .resources_item_container.grid.two
      //-   .resources_item
      //-     aside
      //-       img(src="/images/optimized/who_we_are").shadow
      //-     article
      //-       h3 Brand Guideline
      //-       p The brand guideline for 3ZERO Club contains all the necessary information and guidelines on how to incorporate branding for all kinds of communication, both online and offline.
      //-       a(href="" target="_blank" rel="noopener noreferrer").orange_button Download
      //-   .resources_item
      //-     aside
      //-       img(src="/images/optimized/who_we_are").shadow
      //-     article
      //-       h3 3ZERO Club - Logo
      //-       p The logo of 3ZERO Club, including all variations.
      //-       a(href="" target="_blank" rel="noopener noreferrer").orange_button Download
</template>
