<template>
  <div :class="`${props.classes} banner-item row banner-1 items-center q-pa-lg`"
       :style="{
        height: props.height + 'px',
        'background-image': 'url(' + props.imageSrc + ')'
        }">
    <div class="col column items-center text-center">
      <div class="col-12 text-center">
        <h1 class="q-pb-sm">{{ props.title }}</h1>
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
.banner-1
  height: 400px

.banner-1
  height: 400px
  background-image: url("../assets/images/bn2.1.jpg")
  background-size: cover
  background-repeat: no-repeat


.banner-item h1
  font-weight: 400
  font-size: 3rem
  text-shadow: 0 2px 7px #1d1e20
  color: #fff

.banner-item:before
  content: ''
  position: absolute
  top: 20px
  right: 20px
  bottom: 20px
  left: 20px
  border: 1px solid #fff
  z-index: 1
  pointer-events: none

</style>
