<template>
  <div class="cartView about row justify-start items-start">
    <div class="col-12">
      <div class="cart-header row justify-center justify-center">
        <div class="col-auto">
          <h2>Cart</h2>
        </div>
      </div>
    </div>
    <div class="col-12 q-pa-lg">
      <table class="cart table full-width">
        <thead>
        <tr class="cart-title">
          <th colspan="2" class="product-thumbnail"> Product name</th>
          <th class="product-price">Price</th>
          <th class="product-quantity">Quantity</th>
          <th class="product-subtotal">Total</th>
          <th class="product-remove">&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <tr class="cart_item" v-for="product in cartList" :key="product.id">
          <td data-label="Product Name" class="product-thumbnail imgSize">
            <a @click="goToProduct(product.id)">
              <q-img class="rounded-borders product-image" :src="product.image" :alt="product.name"></q-img>
            </a>
          </td>
          <td class="product-name-thumb" data-title="Product">
            <a @click="goToProduct(product.id)">{{product.name}}</a>
          </td>
          <td data-label="Product Price" class="product-price" data-title="Price">
            <span class="fontWeight600 text-subtitle1 amount">${{Number.parseFloat(product.price).toFixed(2)}}</span>
          </td>
          <td data-label="Quantity" class="product-quantity" data-title="Quantity">
            <AppInputQty :count="product.qty" max="10"/>
          </td>
          <td data-label="Sub Total" class="product-subtotal" data-title="Total">
            <span class="fontWeight600 text-subtitle1 text-primary amount">${{Number.parseFloat(product.total).toFixed(2)}}</span>
          </td>
          <td class="product-remove">
            <a @click="removeProductFromCart(product.id)"><span class="material-icons text-h5">close</span></a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="divider"></div>
    </div>
    <div class="col-12 q-px-lg ">
      <h4 class="cart-title">CART TOTALS</h4>
      <div class="divider"></div>
      <table class="total-checkout full-width">
        <tbody>
        <tr>
          <th class="text-left text-h6"><span>Total</span></th>
          <td class="text-center">
            <span class="fontWeight600 text-h6 text-primary amount">$65.00</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="divider"></div>
      <div class="actions q-pb-xl">
        <button class="app-btn outline primary shop-button" @click="onConfirm">Continue shopping</button>
        <button class="app-btn q-mx-lg">Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import AppInputQty from '../components/AppInputQty.vue'
const router = useRouter()

let cart = localStorage.getItem('cart') || null ;
cart = cart ? JSON.parse(cart) : {};

let cartList = ref([]);
if(cart && Object.keys(cart).length > 0){
  Object.keys(cart).forEach((id) => {
    cartList.value.push(cart[id]);
  })
}

const goToProduct = (id: number) => {
  router.push({
    name: 'product',
    params: { id: id }
  })
}
const saveCartToLocalStorage = () => {
  const cart:any = {};
  cartList.value.forEach((item) => cart[item.id] = item);
  localStorage.setItem("cart", JSON.stringify(cart));
}
const removeProductFromCart = (id: number) => {
  cartList.value = cartList.value.filter((item) => item.id !== id);
  if(cartList.value.length === 0) {
    const cartIcon = document.querySelector('.cartIcon');
    if (cartIcon) cartIcon.classList.remove('active');
  }
  saveCartToLocalStorage();
}
</script>

<style lang="sass">
.cart-header
  background-color: #d8d8d8
  padding: 10px 0 10px

.cart-header h2
  color: var(--white-color)
  text-shadow: 0 2px 7px #252424

.subtitle
  color: #b0b0b0

.product-thumbnail.imgSize
  height: 120px
  width: 120px
</style>
