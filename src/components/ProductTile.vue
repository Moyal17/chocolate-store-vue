<template>
  <div class="product-tile q-mb-lg">
    <div class="img-product" :style="{'background-image': `url(${props.imageSrc})`, 'min-height': props.height + 'px'}">
      <figure v-if="props.sale" class="label-sale text-center">
        <span class="sale-percent">{{props.sale}}% off</span>
      </figure>
      <ul class="product-icon-action list-unstyled text-center">
        <li class="add-to-cart">
          <button type="button" class="q-pa-sm">
            <i class="col-auto">
              <img :src="cart" alt="cart"/>
            </i>
          </button>
        </li>
        <li class="quick-view">
          <a class="q-pa-xs" @click="goToProduct(props.id)">
            <i class="col-auto">
              <img :src="quickView" alt="quickView"/>
            </i>
          </a>
        </li>
        <li class="add-wishlist">
          <a class="q-pa-xs">
            <i class="col-auto">
              <img :src="favorite" alt="favorite"/>
            </i>
          </a>
        </li>
      </ul>
      <div class="column justify-start items-start" :style="{'min-height': `${props.height}px`, height: `${props.height}px`}">
        <div class="col-8 full-width" @click="goToProduct(props.id)"></div>
        <div class="col-4 q-pa-lg full-width" @click="goToProduct(props.id)">
          <a>{{ props.name }}</a>
          <p class="price-product">
            <span class="text-strike text-grey-5 q-pr-md" v-if="salePrice">${{ props.price }} USD</span>
            <span class="price">${{ salePrice || props.price }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import cart from '../assets/cart.svg'
import favorite from '../assets/favorite.svg'
import quickView from '../assets/quickView.svg'


const router = useRouter()
const props = defineProps({
  height: {type: String, default: '300'},
  imageSrc: {type: String, required: true},
  id: {type: Number, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  sale: Number
})
const salePrice = ref(props.sale ? Math.floor(props.price * ((100 - props.sale) / 100)) : null);

const goToProduct = (id : number) => {
  router.push({
    name: 'product',
    params: { id: id }
  })
}

</script>

<style scoped lang="sass">
.product-tile
  overflow: hidden
  height: auto

.img-product
  height: auto
  background-repeat: no-repeat
  background-size: cover
  background-position-y: 85%

.product-tile .product-icon-action
  position: absolute
  top: 30px
  left: 0
  display: block
  transition: .5s
  opacity: 0
  visibility: hidden
  z-index: 2

.product-tile:hover .product-icon-action
  left: 25px
  opacity: 1
  visibility: visible

.product-tile .product-icon-action li button,
.product-tile .product-icon-action li a
  border: 0
  width: 46px
  height: 46px
  line-height: 46px
  background-color: #fff
  box-shadow: 0 15px 25px rgba(0,0,0,.08)
  border-radius: 50%
  margin-left: 0
  margin-right: 0
  display: block
  margin-bottom: 13px
  transition: .5s
  color: var(--primary-color)
  font-size: 0


.product-tile .product-icon-action li a svg,
.product-tile .product-icon-action li a img,
.product-tile .product-icon-action li button svg,
.product-tile .product-icon-action li button img
  width: 20px
  height: 20px
  fill: var(--primary-color)


.product-tile .product-icon-action li a i
  font-size: 18px
  line-height: 46px

.product-tile .product-title
  font-size: 16px
  position: absolute
  bottom: -20px
  left: 20px
  font-weight: 500

.product-tile .label-sale
  background: #e12c43
  color: var(--white-color)
  position: absolute
  top: 14px
  right: -27px
  font-size: 12px
  font-weight: 500
  letter-spacing: 1px
  padding: 5px 12px
  transform: rotate(45deg)
  width: 110px

.product-tile .product-title a
  color: var(--primary-color)
  text-decoration: none
  font-weight: 600

.product-tile .price, .product-tile .text-strike
  font-size: 15px
  font-weight: 700

.product-tile .price
  color: var(--brown-color)

.price-product
  margin-top: -5px

</style>
