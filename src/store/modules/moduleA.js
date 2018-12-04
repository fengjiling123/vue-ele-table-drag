const moduleA = {
  namespaced: true,
  state: { count: 5 },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload;
    }
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};

export default moduleA;
