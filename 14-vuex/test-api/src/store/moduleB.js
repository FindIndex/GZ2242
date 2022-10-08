import { getHomeNewlist } from "@/apis";
const moduleB = {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    setListItems(state, { items }) {
      state.list = items;
    },
  },
  actions: {
    getAndSetHomeNewlist(context, { new1, readarticles } = {}) {
      getHomeNewlist({ new1, readarticles }).then((res) => {
        context.commit("setListItems", { items: res.data.items });
      });
    },
  },
  getters: {},
};

export default moduleB;
