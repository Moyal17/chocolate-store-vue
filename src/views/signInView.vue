<template>
  <div class="fullScreen row justify-center items-center">
    <div class="col-auto">
      <q-card class="my-card" bordered>
        <q-card-section>
          <div class="q-pa-md" style="width: 500px">
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md">
              <q-input
                  outlined
                  v-model="name"
                  label="Full name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"/>
              <q-input v-model="email" outlined type="email" label="Email" />

              <q-input v-model="password" outlined
                       label="password"
                       :type="isPwd ? 'password' : 'text'"
                       hint="at least 6 characters with numbers or special character">
                <template v-slot:append>
                  <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-toggle v-model="accept" label="Remember me" />
              <div class="row wrap items-end justify-end">
                <div class="float-right">
                  <q-btn label="Submit" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
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

</style>
