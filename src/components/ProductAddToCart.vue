<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <div class="row items-center">
        <h4 class="col-12 success-message text-center q-pt-md text-primary">Added to cart successfully!</h4>
        <div class="col-4 q-pa-lg">
          <div class="row items-center justify-center">
            <q-img class="col-12 rounded-borders" :src="product.image" :alt="product.name"></q-img>
          </div>
        </div>
        <div class="col-8">
          <div class="row items-center">
            <div class="col-12 product-info">
              <p>Name : {{ product.name }}</p>
              <p>Description : {{ product.description.slice(0, 100) }}...</p>
              <p>Price : <span class="product-price">
                <span class="text-primary">${{ Number.parseFloat(product.salePrice || product.price).toFixed(2) }}</span>
                <span class="text-strike text-grey-5 q-pl-sm" v-if="product.salePrice">${{ Number.parseFloat(product.price).toFixed(2) }}</span>
              </span></p>
              <p>Quantity : <span class="product-qty">{{ product.qty }}</span></p>
            </div>
          </div>
        </div>
        <div class="col-12 q-px-lg">
          <div class="divider"></div>
            <div class="column justify-start">
              <h6 class="q-ma-none">There are <span class="text-primary">3</span> items in your cart</h6>
              <h6 class="total_price">Total price : <span class="product-total-cart text-primary">${{ Number.parseFloat(product.total).toFixed(2) }}</span></h6>
              <div class="divider"></div>
              <div class="actions q-pb-md">
                <button class="app-btn outline primary shop-button" @click="onConfirm">Continue shopping</button>
                <button class="app-btn outline primary go_cart q-mx-lg">Go to cart</button>
                <button class="app-btn outline primary">Proceed to checkout</button>
              </div>
            </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {useDialogPluginComponent} from 'quasar'
import {defineProps} from 'vue'
import ProductCarouselTile from '../components/ProductCarouselTile.vue'

const props = defineProps({
  text: {type: String},
  product: {type: Object}
  // ...your custom props
})

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits
])

const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogCancel - Function to call to settle dialog with "cancel" outcome
const onConfirm = () => {
  onDialogOK({data: 'it ok'})
}
</script>

<style scoped lang="sass">
.q-card.q-dialog-plugin
  min-width: 700px

</style>
