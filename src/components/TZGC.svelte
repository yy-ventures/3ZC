<script>
  import Header  from "./sub_components/Header.svelte";

	const data_header = {
		image: 'hero_3zgc',
		h2: '',
		h1: '3Z Global Centre',
	}
</script>

<template lang="pug">
  Header({...data_header})
  #tzgc
    //- section#location.grid.two
    section#location
      //- article.moved_left
      //-   iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2938915827895!2d90.34826811408531!3d23.80814619248678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14bae48ccf5%3A0x4b677293410b7502!2sYY%20Ventures%20Limited!5e0!3m2!1sen!2sbd!4v1624126967642!5m2!1sen!2sbd" allowfullscreen="" loading="lazy").shadow
      //- article.moved_right
      article
        #text_container
          p.faded_out(style="--order: 1") The 3Z Global Centre is responsible for resolving all issues relating to the Clubs, Circles, and Networks. It has the final decision-making power on all issues relating to rules and procedures, objectives, registration, affiliation, cancellation of registration, acceptance and cancellation of membership in any Circles, or Networks or any other organisational matters.
          p.faded_out(style="--order: 1.5")  Power to prepare and amend guidelines that defines the relationship among the Clubs and between the Clubs and the 3Z Global Centre remains vested in 3Z Global Centre. It is responsible for keeping all information about the leadership, membership, receiving and disseminating all news, activity reports, presentations, videos, photographs, from Clubs, Circles, Networks, etc.
          p.faded_out(style="--order: 2") The 3Z Global Centre is headed by an Executive Officer (EXO). The EXO is appointed by Nobel Laureate Professor Muhammad Yunus, who is the Chief Advisor of the 3Z Global Centre.
          p.faded_out(style="--order: 2.5") The 3Z Global Centre serves as a one-stop help centre for all Clubs, Circles, 3Z Support organisations, YSBCs, and facilitates networking among all Clubs and associated organisations. It plays a key role in co-organising and coordinating network events, programs, and competitions. The 3Z Global Centre helps the Clubs to get connected with 3Z Support organisations and facilitate and co-organise programs for affiliating institutions. It provides services to Clubs to get introduced to individuals who can help Clubs to develop and execute their programs. It makes efforts to connect Clubs with foundations, government agencies, international organisations, corporates, media, business leaders and organisations who may support Club activities, and vice versa. It draws media attention to programmes and projects undertaken by Clubs. It helps Clubs in organising national, regional, and global programmes. It organises various design competitions, workshops, lectures, and conferences. It invites ideas and proposals from Clubs to undertake various programmes at a local, regional or global level. All 3ZERO Clubs, Circles, Networks, the 3Z Global Centre are informal entities.
</template>
