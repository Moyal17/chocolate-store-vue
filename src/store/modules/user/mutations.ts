import type { User } from "@/ts/interfaces";

const mutations = {
    // Question: is this the right way declare it?
    saveUserInfo: (state: { userInfo: User }, payload: User) => {
        state.userInfo = payload;
    }
}

export default mutations;
