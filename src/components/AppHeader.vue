<template>
  <q-header elevated height-hint="98" id="header">
      <div class="row items-center q-pa-lg">
        <div class="col text-left">
          <img src="../assets/logo.png" alt="logo" class="app-logo">
        </div>
        <div class="col-6 text-center">
          <ul class="navbar-nav">
            <li class="col-auto navbar-item q-px-md">HOME</li>
            <li class="col-auto navbar-item q-px-md">SHOP</li>
            <li class="col-auto navbar-item q-px-md">BLOG</li>
          </ul>
        </div>
        <div class="col text-right">

        </div>
      </div>
  </q-header>
</template>

<script setup lang="ts">


</script>

<style lang="sass" scoped>

.app-logo
  height: 50px
#header
  background-color: #ffffff
  color: #111111
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


</style>
