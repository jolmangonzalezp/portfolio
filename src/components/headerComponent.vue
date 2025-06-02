<script setup></script>

<template>
  <header class="header">
    <div class="header__logo">
      <img class="header__logo-img" src="@/assets/img/jg_dev.png" alt="Logo" />
    </div>
    <nav class="header__navigation">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/_variables"
.header
  width: 95%
  height: 4rem
  margin: 1.5rem auto
  background: $secondary-color
  box-shadow: 0 0 10px $secondary-color
  border-radius: 1rem
  display: flex
  justify-content: space-between
  align-items: center
  font-family: $font-laro
.header__logo
  width: 4rem
  height: 4rem
  padding: 0.2rem 0.5rem
.header__logo-img
  height: 100%
.header__navigation
  width: auto
  height: 100%
  ul
    height: 100%
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: center
    border-radius: 1rem
    li
      border-radius: 1rem
      height: 100%
      width: auto
      padding: 0 0.5rem
      display: flex
      align-items: center
      justify-content: center
      color: $secondary-color
      font-size: 1.5rem
      transition: all 0.3s ease-in-out
      a
        color: $primary-color
        text-decoration: none
      &:hover
        border-bottom: 0.2rem solid $primary-color
        box-shadow: 0 0.5rem 0.5rem $primary-color
    li:has(.router-link-exact-active)
      border-bottom: 0.2rem solid $primary-color
      box-shadow: 0 0.5rem 0.5rem $primary-color
</style>
