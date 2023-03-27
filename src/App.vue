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
        <div class="col-auto">
          <div class="items-section-title justify-center q-pb-lg">
            <section-title title="BEST SELLER" description="Best Seller Product This Week!"></section-title>
          </div>
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
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/6.1.jpg"></product-tiles>
            </div>
            <div class="col-lg-3 col-6 col-md-4 q-pa-md">
              <product-tiles height="300" image-src="../src/assets/images/7.1.jpg"></product-tiles>
            </div>
          </div>
        </div>
      </div>
      <div class="parallax-section row wrap justify-center">
        <div class="col-12">
          <home-parallax-banner height="600" image-src="../src/assets/images/bn2.6.jpg"></home-parallax-banner>
        </div>
        <div class="col-12">
          <div class="parallax-section-banners row wrap justify-center q-pb-lg">
            <div class="col-lg-4 col-6 col-md-4 q-pa-md">
              <home-parallax-banner-item height="350" image-src="../src/assets/images/bn2.7.jpg"
                                         title="Milk Chocolate"></home-parallax-banner-item>
            </div>
            <div class="col-lg-4 col-6 col-md-4 q-pa-md">
              <home-parallax-banner-item height="350" image-src="../src/assets/images/bn2.8.jpg"
                                         title="Dark Chocolate"></home-parallax-banner-item>
            </div>
            <div class="col-lg-4 col-6 col-md-4 q-pa-md">
              <home-parallax-banner-item height="350" image-src="../src/assets/images/bn2.9.jpg"
                                         title="Almond Chocolate"></home-parallax-banner-item>
            </div>
          </div>
        </div>
      </div>
      <div class="new-arrival-section row wrap justify-center">
        <div class="col-12">
          <div class="items-section row wrap justify-center q-pa-lg">
            <div class="col-auto">
              <div class="items-section-title justify-center q-pb-lg">
                <section-title title="NEW ARRIVALS"></section-title>
              </div>
            </div>
            <div class="col-12">
              <div class="row justify-center">
                <div class="col-6 q-pa-md">
                  <product-tiles height="500" image-src="../src/assets/images/1.1.jpg" isOnSale="true"></product-tiles>
                </div>
                <div class="col-6 q-pa-md">
                  <product-tiles height="500" image-src="../src/assets/images/3.1.jpg"></product-tiles>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-section row wrap justify-center">
        <div class="col-12">
          <div class="items-section row wrap justify-center q-pa-lg">
            <div class="col-auto">
              <div class="items-section-title justify-center q-pb-lg">
                <section-title title="Our Blogs"></section-title>
              </div>
            </div>
            <div class="col-12 q-mb-lg">
              <div class="row justify-center">
                <div class="col-md-4 col-6 q-pa-md">
                  <blog-article-tile height="350" image-src="../src/assets/images/blog1.jpg" isOnSale="true"></blog-article-tile>
                </div>
                <div class="col-md-4 col-6 q-pa-md">
                  <blog-article-tile height="350" image-src="../src/assets/images/blog2.jpg" isOnSale="true"></blog-article-tile>
                </div>
                <div class="col-md-4 col-6 q-pa-md">
                  <blog-article-tile height="350" image-src="../src/assets/images/blog3.jpg" isOnSale="true"></blog-article-tile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <router-view /> -->
    </q-page-container>
    <app-footer></app-footer>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeCarousel from './components/HomeCarousel.vue'
import BannerItem from './components/HomeBannerItem.vue'
import SectionTitle from './components/SectionTitle.vue'
import ProductTiles from './components/ProductTiles.vue'
import HomeParallaxBanner from './components/HomeParallaxBanner.vue'
import HomeParallaxBannerItem from './components/HomeParallaxBannerItem.vue'
import BlogArticleTile from './components/BlogArticleTile.vue'


</script>


<style lang="sass">
.parallax-section-banners
  position: relative
  z-index: 2
  margin-top: -8rem
</style>
