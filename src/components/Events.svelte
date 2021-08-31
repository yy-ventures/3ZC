<script>
  import Header  from "./sub_components/Header.svelte";

	const data_header = {
		image: 'hero_events',
		h2: '',
		h1: 'National & International Events',
	}
</script>

<template lang="pug">
  Header({...data_header})
  section#events
    h2.faded_out(style="--order: 1") Social Business and 3ZERO Club Events
    p.quote.faded_out(style="--order: 2") 3ZERO Clubs initiate and manage events such as Social Fiction Design Competition, Social Business Design Competition, workshops, co-create joint events, and participate in global events like Social Business Day and Global Social Business Summit every year.
    //- #events_container.grid.three
    #events_container.grid.two
      article(style="--order: 1").moved_left
        img(src="/images/optimized/events_1.jpg").shadow
        h3 Social Business Design Competition
        a(href="#") Coming Soon
      article(style="--order: 1").moved_right
        img(src="/images/optimized/events_2.jpg").shadow
        h3 Social Fiction Design Competition
        a(href="#") Coming Soon
      //- article(style="--order: 3").moved_down
      //-   img(src="/images/optimized/events_5.jpg").shadow
      //-   h3 Social Business Day
      //-   a(href="https://socialbusinesspedia.com/events/sbd2021" target="_blank" rel="noopener noreferrer") Register Now
</template>
