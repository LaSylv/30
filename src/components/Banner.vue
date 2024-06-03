<template>
  <div class="banner">
   <a target="_blank" href="https://www.leboncoin.fr/recherche?text=nokia%203310"> <span :class="{ 'blink': isBlinking }">GAGNE UN NOKIA 3310</span> </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isBlinking = ref(true);
</script>

<style scoped>
.banner {
  background-color: #ff00ff; /* Rose flashy */
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 24px;
  border: 4px solid #9e379e; /* Pour simuler une bannière */
}

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
