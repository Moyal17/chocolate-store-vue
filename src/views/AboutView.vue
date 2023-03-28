<template>
  <div class="about row justify-center items-center">
    <div class="col-auto">
      <h1>about page</h1>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const email = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const password = ref('')
    const isPwd = ref(true)
    return {
      name,
      age,
      accept,
      password,
      isPwd,
      email,
      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
