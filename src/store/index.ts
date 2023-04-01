import {createStore} from 'vuex'
import userStore from './modules/user'
import productStore from './modules/product'

const store = createStore({
    modules: {
        user: userStore,
        product: productStore
    },
    state () {
        return {
            count: 0,
            todos: [
                { id: 1, text: 'doing it 1', done: true },
                { id: 2, text: 'doing it 2', done: false },
                { id: 3, text: 'doing it 3', done: false },
                { id: 4, text: 'doing it 4', done: false },
                { id: 5, text: 'doing it 5', done: true },
                { id: 6, text: 'doing it 6', done: false },
                { id: 7, text: 'doing it 7', done: true },
            ]
        };
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy (state, payload) {
            state.count += payload
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id: number) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        },
        incrementBy ({ commit }, payload) {
            commit('incrementBy', payload);
        }
    }
})

export default store;
