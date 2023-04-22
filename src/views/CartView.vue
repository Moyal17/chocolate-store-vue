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
          <td data-label="Product Name" class="product-thumbnail">
            <a href="/products/round-chocolate?variant=39448991531106">
              <q-img class="rounded-borders product-image" :src="product.image" :alt="product.name"></q-img>
            </a>
          </td>
          <td class="product-name-thumb" data-title="Product">
            <a>{{product.name}}</a>
          </td>
          <td data-label="Product Price" class="product-price" data-title="Price">
            <span class="fontWeight600 text-subtitle1 amount">{{Number.parseFloat(product.price).toFixed(2)}}</span>
          </td>
          <td data-label="Quantity" class="product-quantity" data-title="Quantity">
            <AppInputQty :count="product.qty" max="10"/>
          </td>
          <td data-label="Sub Total" class="product-subtotal" data-title="Total">
            <span class="fontWeight600 text-subtitle1 text-primary amount">{{Number.parseFloat(product.total).toFixed(2)}}</span>
          </td>
          <td class="product-remove">
            <a><span class="material-icons text-h5">close</span></a>
          </td>
        </tr>
        <tr class="cart_item">
          <td data-label="Product Name" class="product-thumbnail">
            <a href="/products/white-chocolate?variant=39448990515298"><img
                src="//cdn.shopify.com/s/files/1/0549/2332/9634/products/3.1_small.png?v=1634888709"
                alt="white chocolate"></a>
          </td>
          <td class="product-name-thumb" data-title="Product">
            <a href="/products/white-chocolate?variant=39448990515298">white chocolate</a>


          </td>
          <td data-label="Product Price" class="product-price" data-title="Price">
            <span class="fontWeight600 text-subtitle1 amount">$20.00</span>
          </td>
          <td data-label="Quantity" class="product-quantity" data-title="Quantity">
            <AppInputQty :count="1" max="10"/>
          </td>
          <td data-label="Sub Total" class="product-subtotal" data-title="Total">
            <span class="fontWeight600 text-subtitle1 text-primary amount">$20.00</span>
          </td>
          <td class="product-remove">
            <a><span class="material-icons text-h5">close</span></a>
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

<script setup>
import AppInputQty from '../components/AppInputQty.vue'
let cart = localStorage.getItem('cart') || null ;
cart = cart ? JSON.parse(cart) : {};
// localStorage.setItem("cart", JSON.stringify(cart));
const cartList = [];
if(cart && Object.keys(cart).length > 0){
  Object.keys(cart).forEach((id) => {
    cartList.push(cart[id]);
  })
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

.product-thumbnail
  height: 50px
  width: 50px
</style>
