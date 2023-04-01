const getters = {
    // state, getters, rootState, rootGetters
    findOrderById: (state: { userOrders: any[]; }) => (orderId: number) => {
        return state.userOrders.find((order) => {
            const { id } = order;
            return id == orderId;
        })
    }
}

export default getters;
