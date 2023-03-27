<template>
  <div class="parallax-banner col"
       :style="{ height: props.height + 'px', 'background-image': 'url(' + props.imageSrc + ')'}">
    <div class="row justify-center items-center content-banner text-center" :style="{ height: props.height + 'px'}">
      <div class="col-8 content-banner text-center q-mb-xl">
        <h1 class="title-banner q-pb-lg">chocolate collection</h1>
        <h4 class="content q-pb-xl">The Chocolate Collection uses cocoa beans from different regions, each of our specials has its own distinctive flavors.</h4>
        <a href="#" class="app-btn outline white">SHOP NOW</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const props = defineProps({
  height: String,
  classes: String,
  imageSrc: String,
  title: String
})
console.log('image', props.imageSrc)

</script>

<style lang="sass" scoped>
.parallax-banner
  position: relative
  background-attachment: fixed
  background-size: cover!important
  background-position: center!important
  color: #ffff

.parallax-banner h1
  font-weight: 400

.parallax-banner a
  font-weight: bold
</style>
