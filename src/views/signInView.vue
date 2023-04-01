<template>
  <div class="fullScreen row justify-center items-center">
    <div class="col-auto">
      <q-card class="my-card" bordered>
        <q-card-section>
          <div class="q-pa-md" style="width: 500px">
            <q-form
                ref="myForm"
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
                <template v-slot:append>
                  <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="row wrap items-end justify-end">
                <div class="float-right">
                  <q-btn :loading="isLoading" color="primary" type="submit" label="Submit"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
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
      // Question: did understand fully aspect of - mapActions, mapGetters, mapState
      /*    computed: {
              ...mapState(["count"])
            },
            methods: {
              // Question: how to work with map actions
              ...mapActions('user', ['wow']),
              ...mapGetters(['doneTodos', 'doneTodosCount', 'getTodoById'])
            },*/
      async onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-8',
            textColor: 'white',
            icon: 'warning',
            position: 'bottom-right',
            message: 'You need to accept the license and terms first'
          })
        } else {
          isLoading.value = true
          const body = {email, password}
          const res = await store.dispatch('user/signIn', body)
          if (res.error) {
            $q.notify({
              color: 'red-8',
              position: 'bottom-right',
              textColor: 'white',
              icon: 'warning',
              message: res.error,
            })
          } else {
            $q.notify({
              color: 'green-6',
              position: 'bottom-right',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'login you in...',
            })
          }
          // simulate loading
          setTimeout(() => {
            isLoading.value = false
          }, 3000)
        }
      },
      onReset() {
        email.value = null
        password.value = ''
      },
      increment() {
        store.dispatch('incrementBy', 6);
      }
    }
  }
}
</script>

<style>

</style>
