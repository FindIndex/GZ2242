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
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: function () {
    return {
      filters: ["All", "Active", "Finished"],
    };
  },
  computed: {
    ...mapState(["filter"]),
  },
  methods: {
    ...mapMutations(["updateFilter"]),
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>