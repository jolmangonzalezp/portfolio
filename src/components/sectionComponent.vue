<script setup></script>

<template>
  <section class="banner">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
@import "../assets/styles/_variables.sass"
.banner
  width: 95%
  max-height: 48rem
  padding: 1rem
  margin: 3rem auto
  background: $secondary-color
  border-radius: 1rem
  box-shadow: 0 0 1rem $secondary-color
</style>
