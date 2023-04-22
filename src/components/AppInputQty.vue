<template>
  <div class="js-qty">
    <button type="button" class="qty-minus js-qty-adjust js-qty-adjust-minus icon-fallback-text" @click="handleMinus">
      <span class="material-icons">remove</span>
    </button>
    <input type="number" class="js-qty__num" :value="count" min="1" :max="max" aria-label="quantity" readonly>
    <button type="button" class="qty-plus js-qty-adjust js-qty-adjust-plus icon-fallback-text" @click="handlePlus">
      <span class="material-icons">add</span>
    </button>
  </div>
</template>

<script setup>
import {ref, defineEmits, defineProps} from 'vue';
const emit = defineEmits(['on-change']);
const props = defineProps({
  count: {type: Number, default: 1},
  max: {type: String, default: "1000"},
})
let count = ref(props.count);
const max = ref(props.max);

const handlePlus = () => {
  if (count.value === parseInt(max.value)) return;
  count.value = count.value + 1
  emit("on-change", count.value);
}
const handleMinus = () => {
  if (count.value === 1) return;
  count.value = count.value - 1
  emit("on-change", count.value);
}
</script>
