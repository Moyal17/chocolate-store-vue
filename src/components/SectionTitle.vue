<template>
  <div class="section-title col-auto items-center text-center">
    <h4 class="title_heading col-12 q-pb-sm" style="color : #222222">Best Seller</h4>
    <span class="sub_heading col-12 q-pt-sm" style="color: #666666">
     <p class="q-ma-none q-pt-sm"> Best Seller Product This Week!</p>
    </span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.title_heading:before
  content: ""
  width: 50%
  height: 2px
  background: #915005
  position: absolute
  left: 50%
  -webkit-transform: translateX(-50%)
  transform: translateX(-50%)
  bottom: 0

.title_heading
  font-size: 1.5rem
  font-weight: 600
  text-transform: uppercase

</style>
