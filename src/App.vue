<template>
  <q-layout view="hHh lpR lfr">
  <app-header></app-header>
    <q-page-container>
      <home-carousel></home-carousel>
      <div class="banner-section row q-pa-lg">
        <div class="col-6">
          <banner-item classes="q-py-lg q-ma-lg" height="600" image-src="../src/assets/images/bn23.jpg"
          title="Chocolate Cake"></banner-item>
        </div>
        <div class="col-6">
          <banner-item classes="q-pa-lg q-ma-lg" height="290" image-src="../src/assets/images/bn24.jpg"
                       title="Almond Chocolate"></banner-item>
          <banner-item classes="q-pa-lg q-ma-lg" height="290" image-src="../src/assets/images/bn25.jpg"
                       title="Fruit Chocolate"></banner-item>
        </div>
      </div>
      <div class="items-section row wrap justify-center q-pa-lg">
        <div class="col-auto justify-center q-pb-lg">
          <section-title></section-title>
        </div>
        <div class="col-12">
          <div class="row justify-center">
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/1.1.jpg" isOnSale="true"></product-tiles>
            </div>
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/3.1.jpg"></product-tiles>
            </div>
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/4.1.jpg"></product-tiles>
            </div>
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/5.1.jpg"></product-tiles>
            </div>
          </div>
        </div>
      </div>
      <!-- <router-view /> -->
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HomeCarousel from './components/HomeCarousel.vue'
import BannerItem from './components/HomeBannerItem.vue'
import SectionTitle from './components/SectionTitle.vue'
import ProductTiles from './components/ProductTiles.vue'


</script>
