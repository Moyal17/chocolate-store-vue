<template>
  <div class="blog-tile row wrap">
    <div class="blog-img col-12">
      <div class="backgroundImage" :style="{'background-image': `url(${props.image})`, height: props.height + 'px'}"></div>
      <div class="date">
        <div class="day fontWeight600">{{ props.date.getDate() }}</div>
        <div class="month">Oct</div>
      </div>
    </div>
    <div class="blog-tile-content text-center col-12 q-pt-md">
      <a class="blog-category" href="#">{{ props.category }}</a>
      <h4 class="title-blog q-mb-none q-pt-xs"><a href="#" class="fontWeight600">{{ props.title }}</a></h4>
      <p class="content q-mb-none q-pt-md">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  height: {type: String, default: '300'},
  date: { type: Date, default: new Date() },
  image: String,
  title: String,
  category: String,
  subtitle: String,
})

</script>

<style scoped lang="sass">
.blog-img
  position: relative
  overflow: hidden
  width: 100%

.blog-tile .backgroundImage
  position: relative
  width: 100%
  background-color: #f5f5f5
  background-position: center center

.blog-tile:hover .backgroundImage
  -webkit-animation: zoomIn 0.8s linear
  animation: zoomIn 0.8s linear
  animation-fill-mode: forwards

.blog-tile .date
  position: absolute
  box-shadow: 0 3px 10px rgba(0,0,0,.08)
  width: 70px
  height: 70px
  background-color: #fff
  color: var(--primary-color)
  font-weight: 600
  text-align: center
  text-transform: uppercase
  top: 36px
  left: 36px
  padding: 10px 0

.blog-tile .day
  line-height: 1.3

.blog-tile .day:after
  content: ''
  background-color: var(--primary-color)
  width: 27px
  height: 1px
  display: block
  margin: 0 auto
  margin-top: 4px

.blog-tile .month
  font-size: 10px
  padding-top: 4px
  letter-spacing: .3em

.blog-tile .blog-category
  font-size: 16px
  font-weight: 500
  line-height: 24px
  color: #83868c
  text-transform: uppercase

.blog-tile .title-blog a:after
  content: ""
  position: absolute
  bottom: -5px
  left: 50%
  transform: translateX(-50%)
  height: 1px
  width: 50px
  background: var(--brown-color)

.blog-tile .title-blog a
  font-size: 1.3rem
  line-height: 1.5

.blog-tile .content
  font-size: 16px
  font-weight: 400
  color: #83868c
</style>
