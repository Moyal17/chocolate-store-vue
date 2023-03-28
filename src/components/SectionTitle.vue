<template>
  <div class="section-title col-auto items-center text-center">
    <h4 class="title col-12 q-pb-sm"> {{ props.title }}</h4>
    <span v-if="props.description" class="description col-12 q-pt-sm">
     <span class="q-ma-none q-pt-sm"> {{ props.description }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  description: String,
  title: String
})
</script>

<style scoped lang="sass">
.section-title .title
  color: #222222

.section-title .description
  color: #666666

.section-title .title:before
  content: ""
  width: 50%
  height: 2px
  background: var(--brown-color)
  position: absolute
  left: 50%
  -webkit-transform: translateX(-50%)
  transform: translateX(-50%)
  bottom: 0

.section-title .title
  font-size: 1.5rem
  font-weight: 600
  text-transform: uppercase
</style>
