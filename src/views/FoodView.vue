<script setup>
import DisplayImage from "@/components/DisplayImage.vue";
import {ref} from "vue";
import pizza from "@/assets/food/pizza.png";
import raclette from "@/assets/food/raclette.png";

const urls = ref({
  pizza,
  raclette
})
</script>

<template>
  <div>
    <h2>Menus</h2>
    <DisplayImage :image-src="urls.pizza">
      <h3>Vendredi Soir</h3>
    </DisplayImage>
    <DisplayImage :image-src="urls.raclette">
      <h3>Samedi Soir</h3>
    </DisplayImage>
    <h3>Reste des repas en cours d'élaboration par nos chefs, revenez plus tard</h3>
    <img
        style="width: 100%"
        src="@/assets/wip-2.jpg"
        alt="WIP">
  </div>
</template>
