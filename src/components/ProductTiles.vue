<template>
  <div class="product-tile q-mb-lg " :style="{ height: props.height + 'px'}">
    <div class="img-product" :style="{'background-image': `url(${props.imageSrc})`, height: props.height + 'px'}">
      <figure v-if="props.isOnSale" class="label-sale text-center">
        <span class="sale-percent">20% off</span>
      </figure>
      <ul class="product-icon-action list-unstyled text-center">
        <li class="add-to-cart">
          <button type="button" class="q-pa-sm">
            <i class="col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.78668 398.66666" height="398.66666" width="297.78668" id="svg2" version="1.1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xml:space="preserve"><metadata id="metadata8"><rdf><work rdf:about=""><format>image/svg+xml</format><type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage"></type></work></rdf></metadata><defs
                  id="defs6"></defs><g transform="matrix(1.3333333,0,0,-1.3333333,0,398.66667)" id="g10"><g transform="scale(0.1)" id="g12"><path id="path14" style="fill-opacity:1fill-rule:nonzerostroke:none" d="M 2233.36,2432.71 H 0 V 0 h 2233.36 v 2432.71 z m -220,-220 V 220 H 220.004 V 2212.71 H 2021.36"></path><path
                  xmlns="http://www.w3.org/2000/svg" id="path16" style="fill-opacity:1fill-rule:nonzerostroke:none"
                  d="m 1116.68,2990 v 0 C 755.461,2990 462.637,2697.18 462.637,2335.96 V 2216.92 H 1770.71 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-220 c 204.58,0 376.55,-142.29 422.19,-333.08 H 694.492 C 740.117,2627.71 912.102,2770 1116.68,2770"></path><path
                  xmlns="http://www.w3.org/2000/svg" id="path18" style="fill-opacity:1fill-rule:nonzerostroke:none"
                  d="M 1554.82,1888.17 H 678.543 v 169.54 h 876.277 v -169.54"></path></g></g></svg>
            </i>
          </button>
        </li>
        <li class="quick-view">
          <a class="q-pa-xs">
            <i class="col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" height="400" width="400" id="svg2"
                   version="1.1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xml:space="preserve"><metadata id="metadata8"><rdf><work rdf:about=""><format>image/svg+xml</format><type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage"></type></work></rdf></metadata>
                <defs id="defs6"></defs>
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10"><g transform="scale(0.1)" id="g12"><path id="path14" style="fill-opacity:1fill-rule:nonzerostroke:none" d="m 1312.7,795.5 c -472.7,0 -857.204,384.3 -857.204,856.7 0,472.7 384.504,857.2 857.204,857.2 472.7,0 857.3,-384.5 857.3,-857.2 0,-472.4 -384.6,-856.7 -857.3,-856.7 z M 2783.9,352.699 2172.7,963.898 c 155.8,194.702 241.5,438.602 241.5,688.302 0,607.3 -494.1,1101.4 -1101.5,1101.4 -607.302,0 -1101.399,-494.1 -1101.399,-1101.4 0,-607.4 494.097,-1101.501 1101.399,-1101.501 249.8,0 493.5,85.5 687.7,241 L 2611.7,181 c 23,-23 53.6,-35.699 86.1,-35.699 32.4,0 63,12.699 86,35.699 23.1,22.801 35.8,53.301 35.8,85.898 0,32.602 -12.7,63 -35.7,85.801"></path></g></g></svg>
            </i>
          </a>
        </li>
        <li class="add-wishlist">
          <a class="q-pa-xs">
            <i class="col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" height="400" width="400" id="svg2"
                   version="1.1"
                   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                   xml:space="preserve"><metadata id="metadata8"><rdf><work rdf:about=""><format>image/svg+xml</format><type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage"></type></work></rdf></metadata>
                <defs id="defs6"></defs>
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10"><g transform="scale(0.1)" id="g12"><path id="path14" style="fill-opacity:1fill-rule:nonzerostroke:none" d="m 903,2424.4 c 157.9,0 306.4,-61.5 418.1,-173.1 l 134.8,-134.9 c 20.7,-20.6 48.1,-32 77.1,-32 29,0 56.4,11.4 77,32 l 133.7,133.7 c 111.7,111.6 259.9,173.1 417.5,173.1 156.91,0 305,-61.3 416.8,-172.5 111.2,-111.3 172.5,-259.5 172.5,-417.5 0.6,-157.3 -60.69,-305.5 -172.5,-417.4 L 1531.5,373.5 487.402,1417.6 c -111.601,111.7 -173.105,259.9 -173.105,417.5 0,158.1 61.199,306.1 172.5,416.8 111.308,111.2 259.101,172.5 416.203,172.5 z m 1829.7,-19.6 c 0,0 0,0 -0.1,0 -152.4,152.4 -355.1,236.3 -570.9,236.3 -215.7,0 -418.7,-84.1 -571.5,-236.9 l -56.9,-57 -58.2,58.2 c -153.1,153.1 -356.3,237.5 -572.1,237.5 -215.305,0 -417.902,-83.9 -570.305,-236.3 -153,-153 -236.8942,-356 -236.2966,-571.5 0,-215 84.4026,-417.8 237.4966,-571 L 1454.7,143.301 c 20.5,-20.403 48.41,-32.199 76.8,-32.199 28.7,0 56.7,11.5 76.7,31.597 L 2731.5,1261.8 c 152.7,152.7 236.8,355.7 236.8,571.4 0.7,216 -83,419 -235.6,571.6"></path></g></g></svg>
            </i>
          </a>
        </li>
      </ul>
    </div>
    <h4 class="product-title q-pa-md">
      <a href="/products/round-chocolate">Round chocolate</a>
      <p class="price-product mb-0">
        <span class="price">$15.00</span>
      </p>
    </h4>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  height: {type: String, default: '300'},
  imageSrc: String,
  title: String,
  isOnSale: Boolean
})

</script>

<style scoped lang="sass">
.product-tile
  overflow: hidden
  height: 300px

.img-product
  height: 300px
  background-repeat: no-repeat
  background-size: cover
  background-position-y: 85%

.product-tile .product-icon-action
  position: absolute
  bottom: 80px
  left: 0
  display: block
  transition: .5s
  opacity: 0
  visibility: hidden
  z-index: 2

.product-tile:hover .product-icon-action
  left: 25px
  opacity: 1
  visibility: visible

.product-tile .product-icon-action li button,
.product-tile .product-icon-action li a
  border: 0
  width: 46px
  height: 46px
  line-height: 46px
  background-color: #fff
  box-shadow: 0 15px 25px rgba(0,0,0,.08)
  border-radius: 50%
  margin-left: 0
  margin-right: 0
  display: block
  margin-bottom: 13px
  transition: .5s
  color: #111111
  font-size: 0


.product-tile .product-icon-action li a svg,
.product-tile .product-icon-action li button svg
  width: 20px
  height: 20px
  fill: #111111


.product-tile .product-icon-action li a i
  font-size: 18px
  line-height: 46px

.product-tile .product-title
  font-size: 16px
  position: absolute
  bottom: -20px
  left: 20px
  font-weight: 500

.product-tile .label-sale
  background: #e12c43
  color: #ffffff
  position: absolute
  top: 14px
  right: -27px
  color: #fff
  font-size: 12px
  font-weight: 500
  letter-spacing: 1px
  padding: 5px 12px
  transform: rotate(45deg)
  width: 110px

.product-tile .product-title a
  color: #111111
  text-decoration: none
  font-weight: 600

.product-tile .price
  font-size: 15px
  font-weight: 700
  color: #915005

.price-product
  margin-top: -5px

</style>
