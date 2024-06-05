<template>
  <div>
    <a href="#" @click.prevent="showOverlay = true" class="link">
      <slot></slot>
    </a>
    <div v-if="showOverlay" class="overlay" @click="closeOverlay">
      <img :src="imageSrc" class="overlay-image" alt="Overlay Image"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});

const showOverlay = ref(false);

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped>
.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-image {
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 5px solid white;
}
</style>
