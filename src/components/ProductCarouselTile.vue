<template>
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        height="480px"
        class="rounded-borders">
      <q-carousel-slide v-for="slide in slides" :key="slide.id" :name="slide.id" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div v-for="product in slide.products" :key="product.id" class="col-6 q-pa-md">
            <product-tile height="400" :name="product.name" :price="product.price" :image-src="product.image" :sale="product.sale" :id="product.id"></product-tile>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductTile from './ProductTile.vue'
import { products } from '@/data';

const slide = ref(1)
const props = defineProps({
  imageSrc: String,
  title: String,
})
let jump = 0;
const slides = ref(([1,2,3,4].map((num) => {
  const slide = {
    id: num,
    products: products.slice(jump, jump + 2)
  }
  jump += 2;
  return slide
})));


</script>

<style scoped lang="sass">

</style>
