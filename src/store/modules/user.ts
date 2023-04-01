import actions from './user/actions';
import getters from './user/getters';
import mutations from './user/mutations';

const userStore = {
    namespaced: true,
    state: {
        count: 9,
        userInfo: null,
        isAuthorized: false,
        userOrders: []
    },
    mutations: mutations,
    getters: getters,
    actions: actions
}

export default userStore;
