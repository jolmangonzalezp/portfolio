<script setup>
import headerComponent from "@/components/headerComponent.vue";
import sectionComponent from "@/components/sectionComponent.vue";
import homeBannerComponent from "@/components/homeBannerComponent.vue";
</script>

<template>
  <headerComponent />
  <sectionComponent>
    <homeBannerComponent />
  </sectionComponent>
</template>

<style lang="sass" scoped>
@import "../assets/styles/_variables.sass"
</style>
