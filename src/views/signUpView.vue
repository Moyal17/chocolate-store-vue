<template>
  <div class="fullScreen row justify-center items-center">
    <div class="col-auto">
      <q-card class="my-card q-ma-md" bordered>
        <q-card-section>
          <div style="max-width: 500px">
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md">
              <div class="row justify-center items-center">
                <div class="col-sm-6 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.firstName" label="First Name" />
                </div>
                <div class="col-sm-6 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.lastName" label="Last Name" />
                </div>
                <div class="col-12 q-pa-sm">
                  <q-input v-model="state.email" outlined type="email" label="Email"
                           :rules="[ val => val && val.length > 0 || 'Type your Email address']"/>
                </div>
                <div class="col-12 q-pa-sm">
                  <q-input v-model="state.password" outlined label="password"
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
                </div>
                <div class="col-md-8 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.address" label="Address" />
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.zipCode" label="zip" type="number" />
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.city" label="city" />
                </div>
                <div class="col-md-6 col-xs-12 q-pa-sm">
                  <q-input outlined v-model="state.country" label="country" />
                </div>
              </div>
              <q-toggle v-model="state.acceptTerms" label="I accept the license and terms" />
              <div class="row wrap items-end justify-end">
                <div class="float-right">
                  <q-btn label="Submit" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </div>
            </q-form>
            <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>


<script>
import {useQuasar} from 'quasar'
import {ref, reactive} from 'vue'
import {useStore} from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength  } from '@vuelidate/validators'

export default {
  setup(props, context) {
    const $q = useQuasar()
    const store = useStore();
    const isPwd = ref(false)
    const acceptTerms = ref(false)
    const isLoading = ref(false)

    // Question: is there a way to build all form into one object 'ref' and control the value of each props in ref?
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      acceptTerms: false
    })

    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required },
      password: { required, minLength: minLength(6) },
      email: { required, email }, // Matches state.contact.email
      confirmPassword:  { required },
      address: { minLength: minLength(2) },
      zipCode: { minLength: minLength(3) },
      city: { minLength: minLength(2) },
      country: { minLength: minLength(2) },
      acceptTerms: false
    }
    const v$ = useVuelidate(rules, state)

    return {
      isPwd,
      isLoading,
      acceptTerms,
      state,
      v$,
      async onSubmit() {
        // const result = v$.value.validate();
        // store.dispatch('user/signUp')
      },
      onReset() {
        state.firstName.value = '';
        state.lastName.value = '';
        state.email.value = null;
        state.password.value = null;
        state.confirmPassword.value = null;
        state.address.value = null;
        state.zipCode.value = null;
        state.city.value = null;
        state.country.value = null;
      }
    }
  }
}
</script>
