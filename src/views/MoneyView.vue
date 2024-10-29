<template>
  <div class="participation-page">
    <h2>PAF</h2>
    <p>Afin de proposer une expérience unique en formule tout inclus sur 2 nuits, une participation financière par personne est demandée.</p>
    <p>Je compte sur environ 50€ par personne pour ne pas manger des pates eco+ pendant 6 mois après mon anniversaire, ce qui couvrira environ 30% des frais</p>
    <p>Ci-dessous, découvre les contreparties en fonction de ta participation, pour te donner envie de rendre cet événement inoubliable.</p>
    <swiper :slides-per-view="1"
            :breakpoints="{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }"
            class="mySwiper" :modules="[Navigation, Pagination]" navigation pagination>
      <swiper-slide class="option" @click="selectOption('Basic')">
        <div class="image-container">
          <img src="@/assets/money/very-poor.png" alt="Basic Level">
        </div>
        <h4>A partir de 0€</h4>
        <p>Un lit</p>
        <p>Tous les repas</p>
        <p>Toutes les boissons</p>
        <p>Pas de cartes pour le bingo</p>
      </swiper-slide>

      <swiper-slide class="option" @click="selectOption('Standard')">
        <div class="image-container">
          <img src="@/assets/money/poor.jpeg" alt="Standard Level">
        </div>
        <h4>A partir de 50€</h4>
        <p>Un lit</p>
        <p>Tous les repas</p>
        <p>Toutes les boissons</p>
        <p>Une dédicace sur le site</p>
      </swiper-slide>

      <swiper-slide class="option" @click="selectOption('Premium')">
        <div class="image-container">
          <img src="@/assets/money/medium.jpeg" alt="Premium Level">
        </div>
        <h4>A partir de 70€</h4>
        <p>Un lit</p>
        <p>Tous les repas</p>
        <p>Toutes les boissons</p>
        <p>Une dédicace sur le site</p>
        <p>Un mug ou une paire de chaussettes personnalisées (au choix)</p>
      </swiper-slide>

      <swiper-slide class="option" @click="selectOption('Premium')">
        <div class="image-container">
          <img src="@/assets/money/rich.jpeg" alt="Premium Level">
        </div>
        <h4>A partir de 100€</h4>
        <p>Un lit</p>
        <p>Tous les repas</p>
        <p>Toutes les boissons</p>
        <p>Une dédicace sur le site</p>
        <p>Un mug ET une paire de chaussettes personnalisées</p>
        <p>Une photo dédicacée d'un de mes pieds</p>
      </swiper-slide>

      <swiper-slide class="option" @click="selectOption('Premium')">
        <div class="image-container">
          <img src="@/assets/money/very-rich.png" alt="Premium Level">
        </div>
        <h4>A partir de 500€</h4>
        <p>Un lit</p>
        <p>Tous les repas</p>
        <p>Toutes les boissons</p>
        <p>Un mug ET une paire de chaussettes personnalisées</p>
        <p>Une dédicace sur la page d'accueil du site</p>
        <p>Une photo dédicacée de mes 2 pieds</p>
        <p>Echantillon ADN</p>
      </swiper-slide>
    </swiper>

    <div class="confirmation">
      <div class="flashy-banner">
        <p>Une carte de bingo offerte par tranche de 5€</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import {Navigation, Pagination} from "swiper/modules";

const selectedOption = ref(null);

const selectOption = (option) => {
  selectedOption.value = option;
};
</script>

<style scoped>
.participation-page {
  text-align: center;
  font-family: Arial, sans-serif;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.option {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  max-width: 200px;
}

.option img {
  max-width: 100%;
  border-radius: 10px;
}

.option h3 {
  font-size: 24px;
  margin: 10px 0;
}

.option p {
  font-size: 16px;
  margin: 5px 0;
}

.option:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.confirmation {
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
}

.image-container {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes border-flash {
  0% {
    border-color: red;
  }
  25% {
    border-color: yellow;
  }
  50% {
    border-color: green;
  }
  75% {
    border-color: blue;
  }
  100% {
    border-color: red;
  }
}

@keyframes background-blink {
  0% {
    background-color: #ff00ff;
  }
  25% {
    background-color: #00ffff;
  }
  50% {
    background-color: #ffff00;
  }
  75% {
    background-color: #ff0000;
  }
  100% {
    background-color: #ff00ff;
  }
}

.flashy-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border: 5px solid;
  border-radius: 10px;
  animation: border-flash 1s infinite, background-blink 1s infinite;
}
</style>
