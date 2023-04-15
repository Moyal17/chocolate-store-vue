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
          <product-tile height="400" :name="product.name" :price="product.price" :image="product.image"
                        :sale="product.sale" :id="product.id"
                        @openAddToCart="openAddToCartDialog(product)"></product-tile>
          </div>
        </div>
      </q-carousel-slide>
      <ProductAddToCart :product="product"/>
  </q-carousel>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ProductTile from './ProductTile.vue'
import ProductAddToCart from '../components/ProductAddToCart.vue'
import {products} from '@/data';
import {Product} from "@ts/interfaces";
import {useQuasar} from "quasar";

const $q = useQuasar();

const slide = ref(1)
let jump = 0;
const slides = ref(([1, 2, 3, 4].map((num) => {
  const slide = {
    id: num,
    products: products.slice(jump, jump + 2)
  }
  jump += 2;
  return slide
})));

const openAddToCartDialog = (product: Product) => {
  $q.dialog({
    component: ProductAddToCart,
    // props forwarded to your custom component
    componentProps: {
      text: 'something',
      product
      // ...more..props...
    }
  }).onOk((data) => {
    console.log('mainlayout->onOK')
    if (data) console.log('onOK data', data)
  }).onCancel(() => {
    console.log('mainlayout->onCancel')
  }).onDismiss(() => {
    console.log('mainlayout->onDismiss')
  });
}
</script>

<style scoped lang="sass">

</style>
