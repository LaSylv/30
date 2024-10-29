<script setup>
import DisplayImage from "@/components/DisplayImage.vue";
import {ref} from "vue";
import pizza from "@/assets/food/pizza.png";
import raclette from "@/assets/food/raclette.png";
import soupe from "@/assets/food/soupe.png";

const urls = ref({
  pizza,
  raclette,
  soupe
})
</script>

<template>
  <div>
    <h2>Menus</h2>
    <DisplayImage :image-src="urls.pizza">
      <h3>Vendredi Soir</h3>
    </DisplayImage>
    <DisplayImage :image-src="urls.soupe">
      <h3>Samedi midi</h3>
    </DisplayImage>

    <DisplayImage :image-src="urls.raclette">
      <h3>Samedi Soir</h3>
    </DisplayImage>
  </div>
</template>
