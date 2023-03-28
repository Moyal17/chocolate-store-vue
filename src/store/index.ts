import {createStore} from 'vuex'
import userStore from './modules/user'
import productStore from './modules/products'

const store = createStore({
    modules: {
        userStore,
        productStore
    },
    state () {
        return {
            count: 0
        };
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {},
    actions: {}
})

export default store;
