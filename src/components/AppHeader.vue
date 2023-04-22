<template>
  <q-header elevated height-hint="98" id="header">
      <div class="row items-center q-pa-lg">
        <div class="col text-left" @click="goTo('home')">
          <img src="@/assets/logo.png" alt="logo" class="app-logo">
        </div>
        <div class="col-6 text-center">
          <ul class="navbar-nav">
            <li class="col-auto navbar-item q-px-md">
              <router-link to="/about">About</router-link>
            </li>
            <li class="col-auto navbar-item q-px-md">
              <router-link to="/product/1">Product</router-link>
            </li>
            <li class="col-auto navbar-item q-px-md">
              <router-link to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="col text-right">
          <span class="material-icons-outlined q-mx-xs" @click="goTo('login')">face</span>
          <span class="material-icons-outlined q-mx-xs" @click="goTo('signup')">favorite_border</span>
          <span class="material-icons-outlined q-mx-xs" @click="goTo('cart')">shopping_cart</span>
        </div>
      </div>
  </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = (page: string) => {router.push({name: page})}
</script>

<style lang="sass" scoped>

.app-logo
  height: 50px
#header
  background-color: var(--white-color)
  color: var(--primary-color)
  box-shadow: 0 2px 5px -2px rgba(0,0,0,.1)

#header ul.navbar-nav
  padding: 0
  margin-left: -25px
  flex-direction: row
  list-style: none

ul.navbar-nav .navbar-item
  display: inline
  width: 100px
  font-size: 18px
  font-weight: 600

.material-icons-outlined
  font-size: 35px

</style>

