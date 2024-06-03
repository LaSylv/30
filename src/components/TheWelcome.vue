<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <h2>La bamboche de l'année</h2>
  <div class="column-center">
    <p></p>
    <p><strong class="big-emoji">📅</strong> 22 au 24 Novembre 2024</p>
    <p><strong class="big-emoji">📍</strong> <a href="https://maps.app.goo.gl/89Wrqt1BvGvsYHfz9" target="_blank">Le Pontet (73)</a></p>
    <p>
      <strong class="big-emoji">🏏</strong>
      <RouterLink to="activities">Mais on va faire quoi ?</RouterLink>

    </p>
    <p>
      <strong class="big-emoji">🥘</strong>
      <RouterLink to="food">Mais on va manger quoi ?</RouterLink>

    </p>
  </div>
  <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+de+Jean&dates=20240620T000000Z/20240620T235900Z&details=30+Ans+Sylvain!&location=Le+Pontet&sf=true&output=xml"
     class="link">Ajouter à Google Calendar</a>
  <div class="sponsors">
    <h2>Sponsorisé par</h2>
    <div class="row-center">
      <a target="_blank" href="https://www.reddit.com/r/CryptoMoonShots/"><img height="75" width="75"
                                                                               src="@/assets/sponsors/dwax-logo.png"
                                                                               alt="DWAX"></a>
      <a target="_blank" href="https://allocinoche.fr"><img height="40" width="250"
                                                            src="@/assets/sponsors/allocinoche.svg"
                                                            alt="Allocinoche"></a>
    </div>
    <div>
      <a target="_blank" href="https://raclette.world"><img height="75" width="75"
                                                            src="@/assets/sponsors/raclette-world.png"
                                                            alt="Allocinoche"></a>
      <a target="_blank" href="https://oupsgpt.com"><img height="75" width="75"
                                                            src="@/assets/sponsors/oupsgpt.svg"
                                                            alt="OupsGPT"></a>
    </div>
  </div>
</template>
