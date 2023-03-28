import {createStore} from "vuex";

const productStore = createStore({
    state () {
        return {
            productsList: [],
            productDetails: {},
        };
    },
    getters: {
        findProductById: (state) => (productId: number) => {
            return state.productsList.find((product) => {
                const { id } = product;
                return id === productId;
            })
        }
    }
})

export default productStore;
