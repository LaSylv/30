<template>
  <div class="floating-button" @click="toggleSlide">
    ?
    <transition name="slide">
      <div v-if="isSliding" class="slide-container column-center">
        <!-- Add your sliding image here -->
        <img src="@/assets/slide-sylv.png" width="400px" alt="Sliding Image">
        <span style="background-color: #FFA500">
          Une question ? Contactez moi par mail/Insta/Telegram/Signal/GSM
</span>

      </div>
    </transition>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isSliding = ref(false);

const toggleSlide = () => {
  isSliding.value = !isSliding.value;
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff0000;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-icon {
  width: 80%;
}

.slide-container {
  position: fixed;
  max-width: 400px;
  bottom: 80px;
  right: 0; /* Adjust position to avoid overlapping */
  border-radius: 5px;
  padding: 10px;
  transition: right 0.5s ease; /* Animation */
}

.slide-enter-active {
  animation: slide-in 0.5s ease;
}

.slide-leave-active {
  animation: slide-out 0.5s ease;
}

@keyframes slide-in {
  from {
    right: -200px;
    opacity: 0;
  }
  to {
    right: 0px;
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    right: 0px;
    opacity: 1;
  }
  to {
    right: -200px;
    opacity: 0;
  }
}
</style>
