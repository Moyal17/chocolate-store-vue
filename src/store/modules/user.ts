import {createStore} from 'vuex'
import {signInUser, signUpUser} from "@/api/user";
import type {User} from '@/types';

const userStore = createStore({
    state () {
        return {
            userInfo: null,
            isAuthorized: false,
            userOrders: []
        };
    },
    mutations: {

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
        signIn: (ctx) => async (
                body: { email: string, password: string }
            ): Promise<unknown> => {
            // Question:  TS2322: Type 'unknown' is not assignable to type '{ userInfo: User; accessToken: string; }'.
            console.log('ctx ', ctx);
            const data = await signInUser(body);
            return data;
        },
        signUp: (ctx) => async (
            body: User
        ): Promise<unknown> => {
            console.log('ctx ', ctx)
            const data = await signUpUser(body);
            return data;
        },
    }
})

export default userStore;
