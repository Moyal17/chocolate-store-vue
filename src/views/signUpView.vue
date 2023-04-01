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

              <q-input v-model="email" outlined type="email" label="Email" lazy-rules
                       :rules="[ val => val && val.length > 0 || 'Type your Email address']"/>
              <q-input v-model="password" outlined
                       label="password"
                       :type="isPwd ? 'password' : 'text'"
                       :rules="[ val => val && val.length > 6 || 'at least 6 characters']"
                       hint="at least 6 characters with numbers or special character">

              <q-toggle v-model="accept" label="I accept the license and terms" />
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
import {useQuasar} from 'quasar'
import {ref, computed} from 'vue'
import {useStore} from 'vuex';

export default {
  setup(props, context) {
    const $q = useQuasar()
    const store = useStore();
    const email = ref(null)
    const password = ref('')
    const accept = ref(false)
    const isPwd = ref(false)
    const isLoading = ref(false)
    // Question: is it the more recommended way ?
    const count = computed(() => store.state.count);

    return {
      isPwd,
      isLoading,
      email,
      password,
      accept,
      store,
      count,
      async onSubmit() {


      },
      onReset() {
        email.value = null
        password.value = ''
      }
    }
  }
}
</script>
