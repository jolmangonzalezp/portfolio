<template>
  <div class="night-sky">
    <div class="stars-container">
      <div
        v-for="star in stars"
        :key="star.id"
        :class="[
          `star`,
          `star-size-${star.size}`,
          `star-brightness-${star.brightness}`,
        ]"
        :style="{
          left: star.x + `%`,
          top: star.y + `%`,
          animationDelay: star.delay + `s`,
          animationDuration: star.duration + `s`,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stars = ref([]);

const generateStars = () => {
  const starArray = [];
  for (let i = 0; i < 300; i++) {
    starArray.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(Math.random() * 4) + 1,
      brightness: Math.floor(Math.random() * 4) + 1,
      delay: Math.random() * 5,
      duration: 1.5 + Math.random() * 3,
    });
  }
  stars.value = starArray;
};

onMounted(() => {
  generateStars();
});
</script>

<style lang="sass" scoped>
.night-sky
  width: 100vw
  height: 100vh
  background: linear-gradient(180deg, #010440 0%, #010440 100%)
  position: relative
  overflow: hidden

.stars-container
  position: absolute
  width: 100%
  height: 100%
  z-index: 2

.star
  position: absolute
  background: white
  border-radius: 50%
  animation: twinkle infinite ease-in-out alternate

  &.star-size-1
    width: 1px
    height: 1px

  &.star-size-2
    width: 2px
    height: 2px

  &.star-size-3
    width: 3px
    height: 3px

  &.star-size-4
    width: 4px
    height: 4px

  &.star-brightness-1
    opacity: 0.2

  &.star-brightness-2
    opacity: 0.4

  &.star-brightness-3
    opacity: 0.7

  &.star-brightness-4
    opacity: 1

@keyframes twinkle
  0%
    opacity: 0.2
    transform: scale(0.8)
  50%
    opacity: 1
    transform: scale(1.2)
  100%
    opacity: 0.2
    transform: scale(0.8)
</style>
