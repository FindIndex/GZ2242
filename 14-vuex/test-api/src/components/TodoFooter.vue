<template>
  <div>
    <ul>
      <li
        v-for="f in filters"
        :key="f"
        :class="{ active: f === filter }"
        @click="updateFilter({ f })"
      >
        {{ f }}
      </li>
    </ul>
    <hr />

    <h1>{{ count }}</h1>
    <button @click="increment({ n: 5 })">+5</button>
    <button @click="increment2({ n: 3 })">+3</button>
    <button @click="incrementAsync({ n: 3 })">+3 async Methods</button>
    <button @click="incrementAsyncMutations({ n: 3 })">
      +3 async Mutations ×
    </button>
    <button @click="incrementAsyncActions({ n: 3 })">+3 async Actions ×</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

// import { getHomeNewlist } from "@/apis";

export default {
  data: function () {
    return {
      filters: ["All", "Active", "Finished"],
    };
  },
  computed: {
    // ...mapState(["filter", "count"]),
    ...mapState(["filter"]),
    // ...mapState({
    //   count: (state) => state.a.count,
    // }),

    ...mapState("a", {
      count: (state) => state.count,
    }),
  },

  created() {
    // 异步逻辑写在 vue里面
    // getHomeNewlist().then((res) => {
    //   console.log(res);
    //   this.setListItems({ items: res.data.items });
    // });
    this.getAndSetHomeNewlist({ new1: 0 });
  },
  methods: {
    ...mapMutations([
      "updateFilter",
      "increment",
      "incrementAsyncMutations",
      "setListItems",
    ]),
    ...mapActions("b", ["getAndSetHomeNewlist"]),

    increment2: function ({ n }) {
      // this.$store.commit("increment", { n });
      this.$store.commit({
        type: "increment",
        n,
      });
    },

    incrementAsyncActions: function ({ n }) {
      this.$store.dispatch("incrementAsyncActions", { n });
    },

    // 在vue的methods里面处理异步 vuex 都是同步
    // incrementAsync: function ({ n }) {
    //   setTimeout(() => {
    //     this.$store.commit("increment", { n });
    //   }, 3000);
    // },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>