<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {onMounted, ref} from 'vue';
import Compteur from "@/components/Compteur.vue";
import Banner from "@/components/Banner.vue";
import Money from "@/components/Money.vue";


// Function to replace text when hovered over
const replaceText = (el) => {
  if (el.target.innerHTML === "quoi") {
    el.target.innerHTML = 'quoicoubeh';
  } else {
    el.target.innerHTML = 'quoi';

  }
};

</script>

<template>

  <h2>La bamboche de l'année</h2>
  <div class="column-center">
    <Banner></Banner>

    <p>
      <strong class="big-emoji">ℹ️</strong>
      <RouterLink to="infos">Informations générales</RouterLink>

    </p>
    <p><strong class="big-emoji">📅</strong> 22 au 24 Novembre 2024</p>
    <p><strong class="big-emoji">📍</strong> <a href="https://maps.app.goo.gl/G25UncNcQshp6evu5" target="_blank">Le Pontet (73)</a></p>
    <p>
      <strong class="big-emoji">🏏</strong>
      <RouterLink to="activities">Mais on va faire <strong @mouseenter="replaceText">quoi</strong> ?</RouterLink>

    </p>
    <p>
      <strong class="big-emoji">🥘</strong>
      <RouterLink to="food">Mais on va manger <strong @mouseenter="replaceText">quoi</strong> ?</RouterLink>
    </p>
    <p>
      <strong class="big-emoji">💵</strong>
      <RouterLink to="money">Participation financière</RouterLink>
    </p>
  </div>
  <a target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Anniversaire+de+Sylvain&dates=20241122T180000Z/20241124T150000Z&details=La+bamboche+de+l'année+!+https://lasylv.github.io/30/&location=Le+Pontet&sf=true&output=xml"
     class="link">Ajouter à Google Calendar</a>

  <img
      src="@/assets/place.gif"
      alt="WOW">
  <Compteur></Compteur>

  <Money></Money>


  <div class="sponsors">
    <h2>Sponsorisé par</h2>
    <div class="row-center">
      <a target="_blank" href="https://www.reddit.com/r/CryptoMoonShots/"><img height="75" width="75"
                                                                               src="@/assets/sponsors/dwax-logo.png"
                                                                               alt="DWAX"></a>
      <a target="_blank" href="https://allocinoche.fr"><img height="30" width="200"
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
