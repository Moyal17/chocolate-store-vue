<template>
  <div class="q-pa-md row wrap">
    <div class="col-12">
      <q-separator />
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator>
        <q-tab name="Description" label="Description" />
        <q-tab name="Additional Information" label="Additional Information" />
        <q-tab name="Reviews" label="Reviews" />
      </q-tabs>
      <q-separator />
    </div>
    <div class="col-12">
      <q-tab-panels v-model="tab" animated swipeable>
        <q-tab-panel name="Description" class="q-pa-lg">
          <div class="text-h4 q-mb-md">Description</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>

        <q-tab-panel name="Additional Information" class="q-pa-lg">
          <div class="text-h4 q-mb-md">Additional Information</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>
        <q-tab-panel name="Reviews" class="q-pa-lg">
          <div class="text-h4 q-mb-md">Reviews</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, <br/>
            quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tab = ref('Description')

const props = defineProps({
  height: {type: String, default: '300'},
  image: String,
  title: String,
  isOnSale: Boolean
})

</script>

<style scoped lang="sass">
.divider
  border-bottom: 1px solid #e7e7e7
  padding-bottom: 20px
  margin-bottom: 20px

.q-tabs--dense .q-tab
  min-height: 4rem
</style>
