
const productStore = {
    namespaced: true,
    state: {
        count: 5,
        productsList: [],
        productDetails: {},
    },
    mutations: {
        increment(state: { count: number; }) {
            state.count++
        }
    },
    getters: {
        findProductById: (state: { productsList: any[]; }) => (productId: number) => {
            return state.productsList.find((product) => {
                const {id} = product;
                return id === productId;
            })
        }
    },
    actions: { // { state, commit, rootState }
        increment({ state, commit }: any) {
            console.log('increment before: ', state.count)
            commit('product/increment')
            console.log('increment after: ',  state.count)
        }
    }
}

export default productStore;
