<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="me">
    <div class="me-pic">
      <img
        class="me-pic-img"
        src="@/assets/img/me1.jpeg"
        alt="Jolman Gonzalez"
      />
    </div>
    <div class="me-info">
      <h1 class="me-info-name">Jolman González</h1>
      <p class="me-info-job">Software Developer</p>
      <div class="me-info-social">
        <a class="me-info-social-link" href="https://wa.me/573042502658">
          <FontAwesomeIcon
            :icon="faWhatsapp"
            class="me-info-social-icon whatsapp"
          />
        </a>
        <a
          class="me-info-social-link"
          href="https://www.linkedin.com/in/jolman-gonzalez/"
        >
          <FontAwesomeIcon
            :icon="faLinkedin"
            class="me-info-social-icon linkedin"
          />
        </a>
        <a
          class="me-info-social-link"
          href="https://github.com/jolmangonzalezp"
        >
          <FontAwesomeIcon
            :icon="faGithub"
            class="me-info-social-icon github"
          />
        </a>
        <a
          class="me-info-social-link"
          href="https://www.instagram.com/jolmangonzalez/"
        >
          <span class="instagram-icon-wrapper">
            <FontAwesomeIcon
              :icon="faInstagram"
              class="me-info-social-icon instagram"
            />
          </span>
        </a>
        <a class="me-info-social-link" href="https://t.me/jolmangonzalez">
          <FontAwesomeIcon
            :icon="faTelegramPlane"
            class="me-info-social-icon telegram"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/_variables"
.me
  width: 100%
  max-height: 46rem
  display: flex
  justify-content: flex-start
  align-items: center
  padding: 10rem 5rem
  font-family: $font-laro
.me-pic
  width: 30rem
  height: 30rem
.me-pic-img
  width: 100%
  height: 100%
  border-radius: 50%
.me-info
  width: 100%
  max-width: 60rem
  margin-left: 3rem
.me-info-name
  font-size: 5rem
  font-weight: bold
.me-info-job
  font-size: 3rem
.me-info-social
  width: 100%
  display: flex
  justify-content: space-around
  align-items: center
  margin-top: 2rem
.me-info-social-link
  color: $primary-color
  transition: all 0.3s ease-in-out
  &:hover
    color: $primary-color
    transform: scale(1.2)
    transition: all 0.3s ease-in-out
    .whatsapp
      color: #075E54
    .linkedin
      color: #0A66C2
    .github
      color: #24292E
    .instagram
      color: #5F4BC6
    .telegram
      color: #0088CC
.me-info-social-icon
  font-size: 3.5rem
</style>
