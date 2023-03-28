<template>
  <home-carousel></home-carousel>
  <div class="banner-section row q-pa-lg">
    <div class="col-6">
      <banner-item classes="q-py-lg q-ma-lg" height="600" image-src="../src/assets/images/bn23.jpg"
                   title="Chocolate Cake"></banner-item>
    </div>
    <div class="col-6">
      <banner-item classes="q-pa-lg q-ma-lg" height="290" image-src="../src/assets/images/bn24.jpg"
                   title="Almond Chocolate"></banner-item>
      <banner-item classes="q-pa-lg q-ma-lg" height="290" image-src="../src/assets/images/bn25.jpg"
                   title="Fruit Chocolate"></banner-item>
    </div>
  </div>
  <div class="items-section row wrap justify-center q-pa-lg">
    <div class="col-auto">
      <div class="items-section-title justify-center q-pb-lg">
        <section-title title="BEST SELLER" description="Best Seller Product This Week!"></section-title>
      </div>
    </div>
    <div class="col-12">
      <div class="row justify-center">
        <div v-for="product in productsList" :key="product.id" class="col-lg-3 col-6 col-md-4 q-pa-md">
          <product-tile height="300" :name="product.name"
                        :price="product.price" :image-src="product.image"
                        :sale="product.sale" :id="product.id"></product-tile>
        </div>
      </div>
    </div>
  </div>
  <div class="parallax-section row wrap justify-center">
    <div class="col-12">
      <home-parallax-banner height="600" image-src="../src/assets/images/bn2.6.jpg"></home-parallax-banner>
    </div>
    <div class="col-12">
      <div class="parallax-section-banners row wrap justify-center q-pb-lg">
        <div v-for="banner in homeBannersList" :key="banner.id" class="col-lg-4 col-6 col-md-4 q-pa-md" >
          <home-parallax-banner-item height="350" :title="banner.title" :image-src="banner.image"></home-parallax-banner-item>
        </div>
      </div>
    </div>
  </div>
  <div class="new-arrival-section row wrap justify-center">
    <div class="col-12">
      <div class="items-section row wrap justify-center q-pa-lg">
        <div class="col-auto">
          <div class="items-section-title justify-center q-pb-lg">
            <section-title title="NEW ARRIVALS"></section-title>
          </div>
        </div>
        <div class="col-12">
          <div class="row justify-center">
            <div class="col-6 q-pr-md">
              <product-tile height="500"
                            :name="productsList[0].name"
                            :price="productsList[0].price"
                            :image-src="productsList[0].image"
                            :sale="productsList[0].sale"
                            :id="productsList[0].id"
              ></product-tile>
            </div>
            <div class="col-6 q-pl-md">
              <product-tile height="500"
                            :name="productsList[3].name"
                            :price="productsList[3].price"
                            :image-src="productsList[3].image"
                            :sale="productsList[3].sale"
                            :id="productsList[3].id"></product-tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="blog-section row wrap justify-center">
    <div class="col-12">
      <div class="items-section row wrap justify-center q-pa-lg">
        <div class="col-auto">
          <div class="items-section-title justify-center q-pb-lg">
            <section-title title="Our Blogs"></section-title>
          </div>
        </div>
        <div class="col-12 q-mb-xl">
          <div class="row justify-center">
            <div v-for="post in blogPostsList" :key="post.id" class="col-md-4 col-6 q-pa-md">
              <blog-article-tile height="350" :image-src="post.image" v-bind="post"></blog-article-tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeCarousel from '../components/HomeCarousel.vue'
import BannerItem from '../components/HomeBannerItem.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProductTile from '../components/ProductTile.vue'
import HomeParallaxBanner from '../components/HomeParallaxBanner.vue'
import HomeParallaxBannerItem from '../components/HomeParallaxBannerItem.vue'
import BlogArticleTile from '../components/BlogArticleTile.vue'
import {blogPosts, homeBanners, products} from '@/data';

const productsList = ref(products.slice(0,6));
const homeBannersList = ref(homeBanners);
const blogPostsList = ref(blogPosts);

</script>


<style lang="sass">
.parallax-section-banners
  position: relative
  z-index: 2
  margin-top: -8rem
</style>
