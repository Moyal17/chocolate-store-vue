import type { User } from "@/ts/interfaces";
import { apiMethods } from '@/api/apiService'


const actions = {
    // { dispatch, commit, getters, rootGetters }
    signIn: async ({ commit }: any, body: { email: string, password: string}): Promise<unknown> => {
        try {
            // Question:  TS2322: Type 'unknown' is not assignable to type '{ userInfo: User; accessToken: string; }'.
            const data = await apiMethods.users.signIn(body);
            commit('saveUserInfo', data);
            console.log('hey: ', data)
            return data;
        } catch (err: any) {
            console.log('hey', err)
            return { error: err};
        }
    },
    signUp: (ctx: any) => async (
        body: User
    ): Promise<unknown> => {
        console.log('ctx ', ctx)
        const data = await apiMethods.users.signup(body);
        console.log('signup', data)
        return data;
    },
    wow: () => console.log('wow')
}

export default actions;
