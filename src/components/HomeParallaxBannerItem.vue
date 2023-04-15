<template>
  <div class="parallax-banner-items q-pa-xl">
    <div class="backgroundImage" :style="{ height: props.height + 'px', 'background-image': 'url(' + props.image + ')'}"></div>
    <div class="row items-start justify-center banner-content text-center" :style="{ height: props.height + 'px'}">
      <div class="col list-inline info-top">
        <h3 class="title-banner">{{ title }}</h3>
        <a href="#" class="fontWeight600">View More<i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const props = defineProps({
  height: String,
  classes: String,
  image: String,
  title: String
})

</script>

<style lang="sass" scoped>
.parallax-banner-items
  position: relative
  overflow: hidden
  width: 100%


.banner-content
  position: relative
  z-index: 5

.parallax-banner-items h3
    font-weight: 700
    letter-spacing: 1px
    text-transform: unset
    color: #161616

.parallax-banner-items .backgroundImage
  background-position: center center

.parallax-banner-items .backgroundImage
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  background-color: #f5f5f5

.parallax-banner-items:hover .backgroundImage
  -webkit-animation: zoomIn 0.8s linear
  animation: zoomIn 0.8s linear
  animation-fill-mode: forwards

</style>
