const moduleB = {
  namespaced: true,
  state: { count: 0 },
  mutations: {
    incrementB(state) {
      state.count++;
    }
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};

export default moduleB;
