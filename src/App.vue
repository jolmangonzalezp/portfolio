<script setup>
import backgroundFirstLayerComponent from "@/components/backgroundFirstLayerComponent.vue";
import spheresComponents from "@/components/spheresComponent.vue";
</script>

<template>
  <background-first-layer-component />
  <spheres-components />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/_variables.sass"
*
  margin: 0
  padding: 0
  box-sizing: border-box

html, body
  width: 100%
  height: 100%
  padding: 0
  margin: 0
  overflow: auto
  scrollbar-width: none
  color: $primary-color

#app
  font-family: $font-laro
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $primary-color
  margin: 0
  padding: 0
  overflow: auto
  scrollbar-width: none

.container
  width: 100vw
  height: 100vh
  z-index: 2
  position: absolute
  top: 0
  left: 0
  color: $primary-color
  overflow: auto
  scrollbar-width: none
  a
    text-decoration: none
    color: $primary-color
  ul, ol, li
    list-style: none
</style>
