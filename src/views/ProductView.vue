<template>
  <div class="product-section row justify-center q-pa-md">
    <div class="col-sm-6 col-12">
      <q-img class="rounded-borders full-height product-image" :src="product.image" :alt="product.name" ></q-img>
    </div>
    <div class="col-sm-6 col-12 q-pa-md ">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price fontWeight600">
        <span class="text-strike text-grey-5 q-pr-md" v-if="product.salePrice">${{ product.price }} USD</span>
        <span class="text-primary fontWeight600">${{product.salePrice || product.price}} USD</span></p>
      <div class="divider"></div>
      <p class="product description">{{ product.description }}</p>
      <p class="product description">{{ product.description }}</p>
    </div>
  </div>
  <product-info-tabs></product-info-tabs>
  <div class="blog-section row wrap justify-center">
    <div class="col-12">
      <div class="items-section row wrap justify-center">
        <div class="col-auto">
          <div class="items-section-title justify-center q-pb-lg">
            <section-title title="Related Products"></section-title>
          </div>
        </div>
        <div class="col-12">
          <product-carousel-tile></product-carousel-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'
import ProductInfoTabs from '../components/ProductInfoTabs.vue'
import ProductCarouselTile from '../components/ProductCarouselTile.vue'
import { products } from "@/data";
const route = useRoute()
const productId = route && route.params && route.params.id ? parseInt(route.params.id) : 1;

const product =  [...products].filter((product) => product.id === productId)[0];
if (product.sale) {
  product.salePrice = Math.floor(product.price * ((100 - product.sale) / 100));
}
</script>


<style lang="sass">

.parallax-section-banners
  position: relative
  z-index: 2
  margin-top: -8rem
 </style>
