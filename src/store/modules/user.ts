import {createStore} from 'vuex'
// @ts-ignore
import { signInUser, signUpUser } from "@/api/user";

const userStore = createStore({
    state () {
        return {
            userInfo: null,
            isAuthorized: false,
            userOrders: []
        };
    },
    getters: {
        findOrderById: (state) => (orderId: number) => {
            return state.userOrders.find((order) => {
                const { id } = order;
                return id == orderId;
            })
        }
    },
    actions: {
        signIn: (ctx) => async (body: object) => {
            console.log('ctx ', ctx)
            const data = await signInUser(body)
        }
    }
})

export default userStore;
