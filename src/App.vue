<template>
  <q-layout view="hHh lpR lfr">
    <app-header></app-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <app-footer></app-footer>
  </q-layout>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

