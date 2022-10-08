const moduleA = {
  namespaced: true,
  state: () => ({
    count: 10,
  }),
  mutations: {},
  actions: {},
  getters: {
    count2(state) {
      return state.count * 2;
    },
  },
};

export default moduleA;
